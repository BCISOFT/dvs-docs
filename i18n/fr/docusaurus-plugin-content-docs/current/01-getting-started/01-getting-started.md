# Démarrage

DevSpaces est une solution qui simplifie la gestion de vos environnements de développement locaux avec Docker.

## Prérequis

- **Docker** installé et fonctionnel (version 24.0 ou supérieure)
- **Système** : Linux, macOS ou Windows avec WSL2
- **Accès Internet** pour télécharger les images Docker

## Installation rapide

L'installation de DevSpaces se fait via un script bash :

```bash
curl -fsSL https://devspaces.cloud/setup.sh | bash
```

Le script installe et configure automatiquement :

- un réseau docker isolé
- la commande `dvs` permettant d'interagir avec les outils
- un téléchargement sécurisé de vos paramètre via une procédure d'onboarding
- un accès au dépôt DVS selon votre offre

## Configuration initiale

Après l'installation, une procédure sera déclenchée pour associer cette installation à votre compte DevSpaces. Dans le cas où vous n'auriez pas de compte devspaces, vous pourrez en créer un gratuitement.

Votre accès doit être validé dans les 30 minutes, dans le cas où ce délai ne serait pas suffisant, vous pouvez relancer la procédure avec:

```bash
dvs install
```

## Vérification de l'installation

Vérifiez que tout est correctement installé :

```bash
dvs version
dvs help
```

Vous devriez voir la version de DevSpaces et la liste des commandes disponibles.

## Premiers pas

Une fois installé, vous pouvez créer votre premier environnement, pour cela positionnez votre shell dans le dossier de votre projet et exécutez  :

```bash
dvs init
```

Cette commande vous guide pour créer votre premier projet de développement.

Vous pouvez aussi installer un environnement complet de démo avec la commande:
```bash
dvs create <recette>
```

Une aide détaillée est affichée avec la commande `help`, par exemple:
```bash
dvs help create prestashop
```

Par exemple vous pouvez créer un projet de démo prestashop 8.2.1 français avec php 7.2 avec la commande:
```bash
dvs create prestashop -w 'www' -i 8.2.2 -p 7.2 -l fr -c FR
```

## Commandes dvsctl

Pour une documentation détaillée sur toutes les commandes `dvsctl` disponibles, consultez la [Référence des commandes dvsctl](/docs/control-commands/).

## Résolution de problèmes

### Docker n'est pas installé

Installez Docker depuis [docker.com](https://www.docker.com/get-started).

### Erreur de permissions

Sur Linux, vous devrez peut-être ajouter votre utilisateur au groupe docker :

```bash
sudo usermod -aG docker $USER
```

Déconnectez-vous et reconnectez-vous pour que les changements prennent effet.

### Problème de certificats SSL

Si vous rencontrez des problèmes avec les certificats SSL :

```bash
dvs sync
```

