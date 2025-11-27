# Utiliser phpMyAdmin

Ce guide explique comment accéder et utiliser phpMyAdmin pour gérer vos bases de données, y compris comment basculer entre plusieurs serveurs SQL.

## Vue d'ensemble

phpMyAdmin est un outil d'administration MySQL basé sur le web qui vous permet de gérer les bases de données, les tables et les données via une interface intuitive. Lorsqu'il est installé, il détecte automatiquement tous les services SQL installés (MySQL, MariaDB) et vous permet de basculer entre eux.

## Accéder à phpMyAdmin

Une fois phpMyAdmin installé, il est accessible à :

```
https://phpmyadmin.svc.dvs.sh
```

Ou en utilisant votre domaine configuré :

```
https://phpmyadmin.svc.<votre-domaine>
```

<!-- TODO: Ajouter une capture d'écran de la page de connexion phpMyAdmin -->

## Connexion

phpMyAdmin utilisera automatiquement les identifiants de vos services SQL installés. Vous n'avez généralement pas besoin d'entrer les identifiants manuellement - DevSpaces gère l'authentification automatiquement.

<!-- TODO: Ajouter une capture d'écran de l'interface principale phpMyAdmin après connexion -->

## Basculer entre les serveurs SQL

Si vous avez plusieurs services SQL installés (par exemple, MySQL et MariaDB), phpMyAdmin vous permet de basculer entre eux.

### Utiliser le menu déroulant de sélection de serveur

1. Cherchez le menu déroulant de sélection de serveur en haut à gauche ou en haut à droite de l'interface phpMyAdmin
2. Cliquez dessus pour voir tous les serveurs SQL disponibles
3. Sélectionnez le serveur que vous souhaitez utiliser

<!-- TODO: Ajouter une capture d'écran du menu déroulant de sélection de serveur -->

### Serveurs disponibles

phpMyAdmin détecte automatiquement :
- Tous les services MySQL installés (mysql-8.0, etc.)
- Tous les services MariaDB installés (mariadb-10.5, etc.)

Chaque serveur est listé avec son nom de service et sa version.

<!-- TODO: Ajouter une capture d'écran montrant plusieurs serveurs dans la liste -->

## Gérer les bases de données

### Voir les bases de données

La barre latérale gauche affiche toutes les bases de données disponibles sur le serveur sélectionné. Cliquez sur un nom de base de données pour l'étendre et voir ses tables.

<!-- TODO: Ajouter une capture d'écran de la liste des bases de données -->

### Créer une base de données

1. Cliquez sur "Nouveau" dans la barre latérale gauche
2. Entrez un nom de base de données
3. Choisissez le classement (optionnel)
4. Cliquez sur "Créer"

<!-- TODO: Ajouter une capture d'écran du formulaire de création de base de données -->

### Parcourir les tables

Cliquez sur n'importe quelle base de données pour voir ses tables. Vous pouvez ensuite :
- Parcourir les données des tables
- Modifier les enregistrements
- Exécuter des requêtes SQL
- Exporter/importer des données

<!-- TODO: Ajouter une capture d'écran de la vue des tables -->

## Exécuter des requêtes SQL

### Onglet SQL

1. Sélectionnez une base de données dans la barre latérale gauche
2. Cliquez sur l'onglet "SQL" en haut
3. Entrez votre requête SQL
4. Cliquez sur "Exécuter" pour l'exécuter

<!-- TODO: Ajouter une capture d'écran de l'interface de requête SQL -->

### Résultats des requêtes

Les résultats sont affichés dans un format de tableau. Vous pouvez :
- Modifier les résultats directement (si activé)
- Exporter les résultats
- Voir le temps d'exécution et les lignes affectées

<!-- TODO: Ajouter une capture d'écran des résultats de requête -->

## Tâches courantes

### Voir les données de l'application

Pour voir les données de vos applications :

1. Sélectionnez le serveur SQL approprié
2. Trouvez la base de données nommée d'après votre application
3. Parcourez les tables pour voir la structure des données

<!-- TODO: Ajouter une capture d'écran de la base de données de l'application -->

### Exporter des données

1. Sélectionnez une base de données
2. Cliquez sur l'onglet "Exporter"
3. Choisissez la méthode d'exportation (Rapide ou Personnalisé)
4. Sélectionnez les tables à exporter
5. Cliquez sur "Exécuter" pour télécharger

<!-- TODO: Ajouter une capture d'écran de l'interface d'exportation -->

### Importer des données

1. Sélectionnez une base de données
2. Cliquez sur l'onglet "Importer"
3. Choisissez votre fichier SQL
4. Cliquez sur "Exécuter" pour importer

<!-- TODO: Ajouter une capture d'écran de l'interface d'importation -->

## Dépannage

### Impossible d'accéder à phpMyAdmin

Si vous ne pouvez pas accéder à phpMyAdmin :

1. Vérifiez que le service est installé : `dvs service list`
2. Vérifiez le statut du service : `docker ps | grep phpmyadmin`
3. Vérifiez que l'URL correspond à votre domaine configuré

### Serveur non listé

Si un serveur SQL n'apparaît pas dans la liste :

1. Assurez-vous que le service SQL est installé : `dvs service install mysql` (ou mariadb)
2. Vérifiez le statut du service : `dvs status`
3. Actualisez la page phpMyAdmin

### Erreurs de connexion

Si vous voyez des erreurs de connexion :

1. Vérifiez que le service SQL est en cours d'exécution
2. Vérifiez que les identifiants sont corrects (généralement gérés automatiquement par DevSpaces)
3. Vérifiez les logs de l'application : `dvs logs`

## Prochaines étapes

- Apprenez à [accéder à Mailpit](/docs/guides/access-mailpit) pour les tests d'email
- Apprenez à [créer un site PrestaShop](/docs/guides/create-prestashop-site)
- Apprenez à [créer un site WordPress](/docs/guides/create-wordpress-site)

