# Portfolio de Massinissa Messaoudi

Portfolio développeur frontend construit avec React et Vite, pensé pour mettre en valeur une expérience web et mobile orientée React, React Native et TypeScript.

## Stack

- React
- Vite
- JavaScript
- CSS moderne

## Installation

```bash
npm install
```

## Lancement en local

```bash
npm run dev
```

Le site sera accessible sur l’URL indiquée par Vite, en général `http://localhost:5173`.

## Build de production

```bash
npm run build
```

Le build statique est généré dans le dossier `dist/`.

## Prévisualiser le build

```bash
npm run preview
```

## Déploiement sur Vercel

1. Pousser le projet sur GitHub, GitLab ou Bitbucket.
2. Importer le dépôt dans Vercel.
3. Laisser Vercel détecter automatiquement Vite.
4. Vérifier les paramètres suivants si besoin :
   - Build Command : `npm run build`
   - Output Directory : `dist`
5. Déployer.

## Personnalisation rapide

- Remplacer le lien LinkedIn de recherche par l’URL directe du profil dans [src/data/portfolioData.js](/c:/Users/proprietaire/mon-portfolio/src/data/portfolioData.js).
- Remplacer le PDF placeholder dans [public/Massinissa-Messaoudi-CV.pdf](/c:/Users/proprietaire/mon-portfolio/public/Massinissa-Messaoudi-CV.pdf).
- Si souhaité, remplacer l’avatar placeholder dans [src/assets/avatar-placeholder.svg](/c:/Users/proprietaire/mon-portfolio/src/assets/avatar-placeholder.svg).

## Scripts disponibles

- `npm run dev` : démarre le serveur de développement
- `npm run build` : génère le build de production
- `npm run lint` : lance ESLint
- `npm run preview` : prévisualise le build

## Structure

```text
src/
  components/
  data/
  sections/
  assets/
  App.jsx
  index.css
  main.jsx
```

## Vérifications effectuées

- structure modulaire
- contenu rédigé en français
- site responsive
- métadonnées SEO de base
- projet prêt pour un déploiement statique sur Vercel
