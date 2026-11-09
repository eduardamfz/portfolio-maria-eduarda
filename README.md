# Portfólio · Maria Eduarda Fernandes

Currículo/portfólio feito com **Next.js 15 (App Router)** e **React 19**, com CSS puro (tema claro/escuro, animações, layout responsivo).

## Páginas

| Rota | Conteúdo |
| --- | --- |
| `/` | Home com apresentação, efeito de digitação e clima do Recife (API) |
| `/sobre` | Sobre mim, habilidades e todas as tecnologias/módulos usados no site |
| `/experiencia-academica` | UNICAP, ensino médio técnico e cursos |
| `/experiencia-profissional` | Jovem Aprendiz na PanCristal |
| `/projetos` | Repositórios listados em tempo real pela GitHub API |

## APIs integradas

- **GitHub REST API**: lista os repositórios públicos (página Projetos).
- **Open-Meteo**: clima atual do Recife (Home). Sem chave de API.

## Como rodar

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Configurando seu GitHub

Em `src/data/profile.js`, defina o seu usuário no campo `github`
(ou crie a variável de ambiente `NEXT_PUBLIC_GITHUB_USER`, localmente em `.env.local` e na Vercel em *Settings → Environment Variables*).

## Deploy na Vercel

1. Suba este projeto para um repositório no GitHub.
2. Em https://vercel.com/new importe o repositório (o Next.js é detectado automaticamente).
3. Clique em **Deploy**.
