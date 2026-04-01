# Kakau Brigaderia Link Page

Página estilo Linktree em `Next.js + TypeScript` com abordagem mobile-first, baseada na tela fornecida.

## Estrutura

- `app/`: App Router, layout global e rota principal
- `components/`: header da marca, lista de links, cards e ícones
- `data/`: dados mockados centralizados
- `lib/`: sanitização de links e logger de desenvolvimento
- `public/assets/`: assets estáticos locais
- `styles/`: tokens e CSS Modules

## Rodar localmente

```bash
npm install
npm run dev
```

Abra `http://localhos2t:3000`.

## Build e deploy

```bash
npm run build
npm run start
```

Deploy recomendado: Vercel ou qualquer ambiente Node compatível com Next.js.

## Segurança e observabilidade

- Links externos são sanitizados e limitados a `http/https`
- Todos os links usam `target="_blank"` com `rel="noopener noreferrer external nofollow"`
- Não há uso de `dangerouslySetInnerHTML`
- Logs são exibidos apenas em desenvolvimento via `lib/logger.ts`
- Eventos cobertos: carregamento da página, render dos links, dados inválidos e falha do logo

## Decisões objetivas

- Usei `CSS Modules` para controle fino de tipografia, espaçamento e sombras da arte
- O logo foi reconstruído em SVG local para manter o projeto autônomo e pronto para deploy
- A descrição da marca foi mantida curta e discreta porque a arte não explicita um bloco textual visível
