# KRIMO Press Kit

One-page immersive pour KRIMO, La Tempête et La Danse ou Rien.

## Lancer le projet

```bash
npm install
npm run dev
```

Build de production :

```bash
npm run build
npm run start
```

## Ajouter les photos

Les images utilisées par le site sont rangées dans :

- `public/images/krimo`
- `public/images/tempete`
- `public/images/ldor`

Les textes, légendes et chemins de galerie se modifient dans `data/site-content.ts`.

## Ajouter la vidéo hero

Remplacer ou ajouter la vidéo principale ici :

```text
public/videos/hero-krimo.mp4
```

Le poster/fallback du hero utilise actuellement :

```text
public/images/krimo/krimo-hero-poster.jpg
```

## Modifier les contenus et coordonnées

Tout le contenu éditorial réutilisable est centralisé dans `data/site-content.ts`.
Les metadata SEO sont dans `app/layout.tsx`.

## Structure

- `app/` : routes Next.js, layout, SEO, sitemap et robots
- `components/layout/` : header et footer
- `components/sections/` : sections du one-page
- `components/ui/` : composants réutilisables
- `public/` : assets servis par Next.js
