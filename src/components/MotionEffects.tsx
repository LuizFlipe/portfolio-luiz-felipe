import { useEffect, useRef } from "react";

export default function MotionEffects() {
  const cursorDot = useRef<HTMLDivElement>(null);
  const cursorRing = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    document.body.classList.add("motion-ready");

    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".section-label, .section-heading, .sticky-copy, .expertise-row, .project-card, .experience-row, .contact-panel, .quick-card, .case-section",
      ),
    );

    revealTargets.forEach((element, index) => {
      element.classList.add("motion-reveal");
      element.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    revealTargets.forEach((element) => observer.observe(element));

    let scrollFrame = 0;
    const updateScroll = () => {
      scrollFrame = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      document.documentElement.style.setProperty("--scroll-progress", `${progress}`);
      document.documentElement.style.setProperty("--hero-shift", `${Math.min(window.scrollY * 0.16, 150)}px`);
    };
    const onScroll = () => {
      if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateScroll);
    };
    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const dot = cursorDot.current;
    const ring = cursorRing.current;
    let cursorFrame = 0;
    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    const drawCursor = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      if (dot) dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      if (ring) ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      cursorFrame = window.requestAnimationFrame(drawCursor);
    };
    const onPointerMove = (event: PointerEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      document.body.classList.add("cursor-active");
    };
    const onPointerOver = (event: PointerEvent) => {
      if ((event.target as Element).closest("a, button, .project-visual")) {
        document.body.classList.add("cursor-hovering");
      }
    };
    const onPointerOut = (event: PointerEvent) => {
      if ((event.target as Element).closest("a, button, .project-visual")) {
        document.body.classList.remove("cursor-hovering");
      }
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerover", onPointerOver);
    document.addEventListener("pointerout", onPointerOut);
    cursorFrame = window.requestAnimationFrame(drawCursor);

    const tiltElements = Array.from(document.querySelectorAll<HTMLElement>(".project-visual"));
    const tiltCleanups = tiltElements.map((element) => {
      const move = (event: PointerEvent) => {
        const rect = element.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        element.style.setProperty("--tilt-x", `${(0.5 - y) * 5}deg`);
        element.style.setProperty("--tilt-y", `${(x - 0.5) * 6}deg`);
        element.style.setProperty("--glow-x", `${x * 100}%`);
        element.style.setProperty("--glow-y", `${y * 100}%`);
        element.classList.add("is-tilting");
      };
      const leave = () => {
        element.classList.remove("is-tilting");
        element.style.setProperty("--tilt-x", "0deg");
        element.style.setProperty("--tilt-y", "0deg");
      };
      element.addEventListener("pointermove", move);
      element.addEventListener("pointerleave", leave);
      return () => {
        element.removeEventListener("pointermove", move);
        element.removeEventListener("pointerleave", leave);
      };
    });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerout", onPointerOut);
      tiltCleanups.forEach((cleanup) => cleanup());
      window.cancelAnimationFrame(scrollFrame);
      window.cancelAnimationFrame(cursorFrame);
      document.body.classList.remove("motion-ready", "cursor-active", "cursor-hovering");
    };
  }, []);

  return (
    <>
      <div className="intro-curtain" aria-hidden="true">
        <span>LF</span>
        <small>Portfolio · 2026</small>
      </div>
      <div className="scroll-progress" aria-hidden="true" />
      <div ref={cursorRing} className="cursor-ring" aria-hidden="true" />
      <div ref={cursorDot} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
