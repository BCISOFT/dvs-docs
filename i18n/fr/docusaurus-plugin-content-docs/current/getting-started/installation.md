# Installation

DevSpaces est une solution CLI qui simplifie la gestion de vos environnements de développement locaux avec Docker.

## Prérequis

- **Docker** installé et fonctionnel (version 24.0 ou supérieure)
- **Système** : Linux, macOS ou Windows avec WSL2
- **Accès Internet** pour télécharger les images Docker

## Installation rapide

L'installation de DevSpaces se fait via un script bash :

```bash
curl -fsSL https://devspaces.cloud/setup.sh | bash
```

Le script installe automatiquement :

- La CLI `ds` (alias Docker pour lancer les environnements)
- Les outils d'onboarding `dvsctl`
- Les recettes d'environnements de développement

## Configuration initiale

Après l'installation, connectez-vous à votre compte DevSpaces :

```bash
ds login
```

Cette commande va :

1. Vous demander vos identifiants DevSpaces
2. Télécharger les certificats SSL pour vos services locaux
3. Configurer votre environnement local

## Vérification de l'installation

Vérifiez que tout est correctement installé :

```bash
ds version
ds help
```

Vous devriez voir la version de DevSpaces et la liste des commandes disponibles.

## Premiers pas

Une fois installé, vous pouvez créer votre premier environnement :

```bash
ds init
```

Cette commande vous guide pour créer votre premier projet de développement.

Consultez le reste de la documentation pour plus de détails.

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
dvsctl certificates --renew
```

Cela force le renouvellement des certificats SSL.

