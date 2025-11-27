# Installation des services de base

Ce guide explique comment installer rapidement les services essentiels nécessaires au développement : un moteur SQL, Mailpit pour les tests d'email, et phpMyAdmin pour la gestion des bases de données.

## Vue d'ensemble

Les services de base sont des outils partagés qui peuvent être utilisés par plusieurs applications. Les principaux services dont vous aurez besoin sont :

- **Moteur SQL** : MySQL ou MariaDB pour stocker les données des applications
- **Mailpit** : Outil de test d'email qui intercepte tous les emails sortants
- **phpMyAdmin** : Outil d'administration MySQL basé sur le web

## Installation des services

### Étape 1 : Installer un moteur SQL

Tout d'abord, vous devez choisir et installer un moteur SQL. DevSpaces prend en charge MySQL et MariaDB.

```bash
dvs service install mysql
```

Ou pour MariaDB :

```bash
dvs service install mariadb
```

<!-- TODO: Ajouter une capture d'écran de la sortie de la commande service install -->

Le processus d'installation va :
- Télécharger l'image Docker
- Créer le conteneur du service
- Configurer le serveur de base de données
- Configurer les identifiants par défaut

**Note** : Si vous ne spécifiez pas de nom de service, DevSpaces affichera un menu interactif pour choisir parmi les services disponibles.

<!-- TODO: Ajouter une capture d'écran du menu de sélection de service interactif -->

### Étape 2 : Installer Mailpit

Mailpit est automatiquement configuré pour intercepter les emails envoyés par vos applications. Installez-le avec :

```bash
dvs service install mailpit
```

<!-- TODO: Ajouter une capture d'écran de l'installation de mailpit -->

Une fois installé, Mailpit sera disponible à l'adresse `https://mailpit.svc.dvs.sh`.

### Étape 3 : Installer phpMyAdmin

phpMyAdmin vous permet de gérer vos bases de données via une interface web. Installez-le avec :

```bash
dvs service install phpmyadmin
```

**Note** : phpMyAdmin détectera automatiquement les services SQL installés et vous permettra de basculer entre eux.

<!-- TODO: Ajouter une capture d'écran de l'installation de phpMyAdmin -->

phpMyAdmin sera disponible à l'adresse `https://phpmyadmin.svc.dvs.sh`.

## Vérification de l'installation

Vérifiez que tous les services sont installés et en cours d'exécution :

```bash
dvs service list
```

<!-- TODO: Ajouter une capture d'écran de la sortie de la liste des services -->

## Service SQL par défaut

Lors de la création d'applications, DevSpaces utilisera automatiquement le premier service SQL installé comme serveur de base de données par défaut. Si vous avez plusieurs services SQL installés, vous pouvez spécifier lequel utiliser lors de la création d'une application.

## Prochaines étapes

- Apprenez à [créer un site PrestaShop](/docs/guides/create-prestashop-site)
- Apprenez à [créer un site WordPress](/docs/guides/create-wordpress-site)
- Apprenez à [accéder à Mailpit](/docs/guides/access-mailpit)
- Apprenez à [utiliser phpMyAdmin](/docs/guides/use-phpmyadmin)

