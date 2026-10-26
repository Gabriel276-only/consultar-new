# ConsultAR — Saúde e Bem-Estar

O site da ConsultAR apresenta o consultório, sua equipe e os serviços de saúde e bem-estar oferecidos. A página inicial reúne informações sobre áreas de atendimento, profissionais, convênios e espaços do consultório. A ferramenta de busca permite encontrar profissionais por área ou tema e acessar opções de contato.

## Sobre o projeto

A aplicação é uma interface web de página única (SPA), desenvolvida com React e Vite. O React Router organiza a navegação entre a página inicial (`/`) e a busca de profissionais (`/professional`). Os componentes da interface ficam em `src/components/`, as páginas em `src/pages/` e os arquivos estáticos, como imagens e logos, em `public/assets/`.

A busca filtra a lista de profissionais por área de atendimento ou tema. Os resultados incluem links para contato pelo WhatsApp, e a página também oferece acesso à equipe ConsultAR. O layout e os estilos próprios do projeto estão em `src/App.css` e `src/index.css`.

## Tecnologias

- React e React DOM
- Vite
- React Router
- ESLint
- Font Awesome, Framer Motion, React Slick e Swiper

## Executar localmente

Requer Node.js e npm.

```bash
npm install
npm run dev
```

O Vite informará no terminal o endereço local da aplicação.

## Comandos

- `npm run dev` — inicia o servidor de desenvolvimento.
- `npm run build` — gera os arquivos de produção em `dist/`.
- `npm run preview` — pré-visualiza a versão de produção.
- `npm run lint` — verifica o código com ESLint.
