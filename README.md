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

## Analytics gratuito de contatos

O portfólio registra eventos em um projeto gratuito do Supabase, sem depender dos Custom Events pagos da Vercel.

Eventos registrados:

- `contact_click`: WhatsApp, e-mail, agendamento, LinkedIn e Instagram.
- `cta_click`: CTAs principais da home.
- `project_open`: abertura de cases.

Cada evento salva apenas:

- tipo do evento;
- destino;
- área da página;
- rota atual;
- domínio de referência, quando existir;
- data e hora.

O tracking não grava nome, mensagem, e-mail do visitante ou outros dados pessoais enviados pelo usuário.

### 1. Criar a tabela no Supabase

Crie um projeto gratuito no Supabase e abra o **SQL Editor**. Execute o conteúdo de:

```text
supabase/portfolio_events.sql
```

A tabela usa Row Level Security: visitantes podem apenas inserir eventos. A chave pública não recebe permissão para ler, editar ou apagar os registros.

### 2. Configurar as variáveis

No Supabase, copie a **Project URL** e a **Publishable key**.

Localmente, crie `.env.local` a partir de `.env.example`:

```env
VITE_SUPABASE_URL=https://SEU-PROJETO.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_SUA_CHAVE_PUBLICA
```

Na Vercel, adicione as mesmas duas variáveis em **Project Settings > Environment Variables** e faça um novo deploy.

### 3. Ver os cliques

Os registros aparecem na tabela `portfolio_events` dentro do Supabase.

Consultas prontas para analisar contatos, cases e eventos dos últimos 30 dias estão em:

```text
supabase/analytics_queries.sql
```

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
