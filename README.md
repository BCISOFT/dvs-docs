# Documentation DevSpaces

Documentation multi-langue (FR/EN) pour DevSpaces, construit avec [Docusaurus](https://docusaurus.io/).

## Développement local

### Avec Makefile (recommandé)

```bash
# Installer les dépendances et démarrer le serveur
make dev

# Ou étape par étape:
make install    # Installer les dépendances
make start      # Démarrer le serveur
make stop       # Arrêter le serveur
```

### Avec npm directement

```bash
npm install     # Installer les dépendances
npm start       # Démarrer le serveur de développement
npm run build   # Build pour production
npm run serve   # Prévisualiser le build production
```

## URLs locales

- **Français** : http://localhost:3000
- **English** : http://localhost:3000/en

## Commandes Make disponibles

- `make help`   - Afficher l'aide
- `make install` - Installer les dépendances
- `make start`  - Démarrer le serveur de développement
- `make stop`   - Arrêter le serveur en cours
- `make build`  - Build pour production
- `make serve`  - Prévisualiser le build production
- `make clean`  - Nettoyer le cache et node_modules
- `make dev`     - Install + start en une commande

## Structure

```
docs/
├── docs/                      # Documentation FR
│   ├── index.md              # Page d'accueil
│   ├── introduction.md       # À propos
│   └── getting-started/      # Guides de démarrage
│       └── installation.md
├── i18n/en/                  # Documentation EN
│   └── docusaurus-plugin-content-docs/
│       └── current/
│           ├── index.md
│           ├── introduction.md
│           └── getting-started/
│               └── installation.md
├── docusaurus.config.ts      # Configuration
├── sidebars.ts               # Navigation
├── Makefile                  # Commandes locales
└── package.json              # Dépendances
```

## Déploiement

La documentation est automatiquement déployée via GitHub Actions lors d'un push sur `main` avec des modifications dans `documentation/**`.

Le workflow `.github/workflows/deploy-docs.yml` :
1. Installe les dépendances
2. Build la documentation
3. Déploie sur GitHub Pages → `docs.devspaces.cloud`

Pour la configuration initiale, voir **[GITHUB_PAGES_SETUP.md](GITHUB_PAGES_SETUP.md)**

## Scripts npm

- `npm start`    - Démarre le serveur de développement
- `npm run build` - Build pour production
- `npm run serve` - Prévisualise le build production
- `npm run clear` - Nettoie le cache
