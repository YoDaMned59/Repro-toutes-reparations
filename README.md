# Site Web ArtisanPro Bâtiment

Site web professionnel pour une entreprise d'artisanat du bâtiment, développé avec React, Vite, JavaScript et SCSS.

## Fonctionnalités

- Design moderne et responsive
- Présentation des services
- Section témoignages
- Formulaire de contact
- Navigation intuitive
- Optimisé pour le référencement

## Prérequis

- Node.js (version 14 ou supérieure)
- npm (version 6 ou supérieure)

## Installation

1. Clonez le dépôt :
```bash
git clone [URL_DU_REPO]
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

4. Pour construire la version de production :
```bash
npm run build
```

## Structure du projet

```
src/
├── assets/         # Images et autres ressources
├── components/     # Composants React réutilisables
├── data/          # Données JSON
├── pages/         # Pages de l'application
├── styles/        # Fichiers SCSS
└── App.jsx        # Point d'entrée de l'application
```

## Personnalisation

### Charte graphique

Les variables de style sont définies dans `src/styles/variables.scss`. Vous pouvez modifier :
- Les couleurs
- Les polices
- Les espacements
- Les breakpoints

### Contenu

Les données sont stockées dans des fichiers JSON dans le dossier `src/data/` :
- `company.json` : Informations de l'entreprise
- `services.json` : Liste des services
- `testimonials.json` : Témoignages clients

## Déploiement

Le site peut être déployé sur n'importe quel service d'hébergement statique :
- Netlify
- Vercel
- GitHub Pages
- etc.

## Contribution

1. Fork le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## Contact

Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue.
