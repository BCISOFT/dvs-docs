# macOS

Cette page couvre les considérations spécifiques lors de l'utilisation de DevSpaces sur macOS.

## Performance

### Recommandé : Utiliser OrbStack

Pour des performances optimales sur macOS, nous recommandons d'utiliser **OrbStack** au lieu de Docker Desktop. OrbStack est une alternative rapide et légère qui offre des performances nettement meilleures.

#### Pourquoi OrbStack ?

- **E/S de système de fichiers plus rapides** : OrbStack utilise VirtioFS pour le partage de fichiers, offrant des opérations d'E/S 2 à 10 fois plus rapides, atteignant 75 à 95 % des performances natives du système de fichiers macOS
- **Gestion dynamique de la mémoire** : OrbStack ajuste automatiquement l'utilisation de la mémoire en fonction des besoins de vos conteneurs, libérant la mémoire inutilisée pour d'autres applications
- **Faible consommation de ressources** : Conçu pour être léger, OrbStack minimise l'utilisation du CPU et de la batterie
- **Démarrage plus rapide** : Temps de démarrage des conteneurs quasi instantanés par rapport à Docker Desktop

#### Installation

Installez OrbStack en utilisant Homebrew :

```bash
brew install orbstack
```

Ou téléchargez-le depuis le [site officiel](https://orbstack.dev).

Une fois installé, OrbStack remplace Docker Desktop et est compatible avec les commandes Docker existantes, facilitant ainsi la transition.

### Alternative Docker Desktop

Si vous préférez utiliser Docker Desktop :

- Allouez suffisamment de ressources dans les paramètres de Docker Desktop (Paramètres → Ressources)
- Assurez-vous d'avoir suffisamment de mémoire et de CPU alloués pour vos conteneurs de développement
- Envisagez d'augmenter la taille de l'image disque si vous travaillez avec de gros projets

## Permissions de fichiers

macOS gère les permissions de fichiers différemment de Linux. Si vous rencontrez des problèmes de permissions :

- Assurez-vous que votre utilisateur a les permissions de lecture/écriture sur les répertoires de projet
- Certaines opérations peuvent nécessiter des permissions élevées selon la configuration de votre système

Pour les problèmes de permissions généraux, consultez la page [Permissions](/docs/faq/permissions).

