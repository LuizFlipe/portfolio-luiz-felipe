# Portfolio de Luiz Felipe

Portfólio em React + Vite + TypeScript + Tailwind CSS, criado com uma direção visual escura, editorial e roxa.

## Rodar localmente

```bash
pnpm install
pnpm dev
```

## Gerar build de produção

```bash
pnpm build
```

A pasta final será `dist/`.

## Publicar na Vercel

1. Envie os arquivos deste projeto para a raiz do repositório GitHub.
2. Importe o repositório na Vercel.
3. Framework preset: **Vite**.
4. Build command: `pnpm build`.
5. Output directory: `dist`.

O arquivo `vercel.json` já inclui o redirecionamento necessário para que
as rotas internas do React Router funcionem ao abrir ou atualizar uma URL.

## Conteúdo

Os cases ficam em:

`src/data/portfolio.ts`

Você pode editar título, resumo, tags, conteúdo e ordem sem mexer na estrutura das páginas.

## Contatos usados

- E-mail: `luiz.felipesantos11@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/luiz-felipe-me/`
- Instagram: `https://www.instagram.com/luiz.felipedesign`

## Observação

Alguns cases estão sinalizados como NDA e foram escritos de forma intencionalmente genérica para evitar expor detalhes internos.
