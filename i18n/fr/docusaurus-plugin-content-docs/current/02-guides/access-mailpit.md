# Accéder à Mailpit

Ce guide explique comment accéder et utiliser Mailpit pour voir les emails envoyés par vos applications.

## Vue d'ensemble

Mailpit est un outil de test d'email qui intercepte tous les emails envoyés par vos applications. C'est extrêmement utile pendant le développement car vous pouvez voir tous les emails sortants sans avoir besoin de configurer un vrai serveur SMTP.

## Accéder à Mailpit

Une fois Mailpit installé, il est accessible via l'interface web à :

```
https://mailpit.svc.dvs.sh
```

<!-- TODO: Ajouter une capture d'écran de l'interface web Mailpit -->

## Voir les emails

### Liste des emails

L'interface principale de Mailpit affiche une liste de tous les emails interceptés, affichant :
- L'adresse de l'expéditeur
- L'adresse du destinataire
- Le sujet
- L'horodatage

<!-- TODO: Ajouter une capture d'écran de la liste des emails -->

### Détails de l'email

Cliquez sur n'importe quel email pour voir son contenu complet :
- En-têtes (De, À, Sujet, etc.)
- Contenu HTML
- Contenu texte brut
- Pièces jointes (le cas échéant)

<!-- TODO: Ajouter une capture d'écran de la vue des détails de l'email -->

## Fonctionnalités

### Recherche et filtrage

Mailpit fournit une fonctionnalité de recherche pour trouver des emails spécifiques :
- Rechercher par expéditeur, destinataire ou sujet
- Filtrer par plage de dates

<!-- TODO: Ajouter une capture d'écran de la fonctionnalité de recherche -->

### Actions sur les emails

- **Voir HTML** : Voir l'email HTML rendu
- **Voir brut** : Voir le code source brut de l'email
- **Télécharger** : Télécharger l'email en fichier `.eml`
- **Supprimer** : Retirer l'email de la liste

## Configuration automatique

Lorsque Mailpit est installé, DevSpaces configure automatiquement vos applications pour envoyer les emails via Mailpit. Aucune configuration supplémentaire n'est nécessaire.

## Tester la fonctionnalité d'email

Pour tester que les emails sont capturés :

1. Déclenchez un email depuis votre application (réinitialisation de mot de passe, confirmation de commande, etc.)
2. Vérifiez Mailpit - l'email devrait apparaître en quelques secondes

<!-- TODO: Ajouter une capture d'écran d'un email de test dans Mailpit -->

## Dépannage

### Les emails n'apparaissent pas

Si les emails n'apparaissent pas dans Mailpit :

1. Vérifiez que Mailpit est en cours d'exécution : `dvs status`
2. Vérifiez les logs de l'application : `dvs logs`
3. Assurez-vous que le service Mailpit est installé : `dvs service install mailpit`

### Problèmes d'accès

Si vous ne pouvez pas accéder à l'interface web :

1. Vérifiez le statut du service : `dvs status`
2. Vérifiez la console du navigateur pour les erreurs de certificat SSL

## Prochaines étapes

- Apprenez à [utiliser phpMyAdmin](/docs/guides/use-phpmyadmin) pour la gestion des bases de données
- Apprenez à [créer un site PrestaShop](/docs/guides/create-prestashop-site)
- Apprenez à [créer un site WordPress](/docs/guides/create-wordpress-site)

