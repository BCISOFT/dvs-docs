# Créer un tunnel partagé

Ce guide explique comment créer un tunnel partagé pour exposer votre site de développement local sur Internet, et comment le supprimer lorsqu'il n'est plus nécessaire.

## Vue d'ensemble

Les tunnels partagés vous permettent de partager votre environnement de développement local avec d'autres personnes ou d'y accéder depuis n'importe où. DevSpaces crée des tunnels publics sécurisés pour vos applications.

## Prérequis

- Un compte DevSpaces actif avec accès aux tunnels (Abonnement requis)
- Une application déjà créée et en cours d'exécution
- L'application doit être démarrée : `dvs start`

## Créer un tunnel

### Étape 1 : Naviguer vers votre application

Assurez-vous d'être dans le répertoire de votre application :

```bash
cd /chemin/vers/votre/app
```

### Étape 2 : Démarrer le tunnel

Démarrez un tunnel partagé pour votre application :

```bash
dvs tunnel start
```

<!-- TODO: Ajouter une capture d'écran de la sortie de la commande tunnel start -->

La commande va :
- Créer un tunnel vers votre application
- Reconfigurer automatiquement l'application pour fonctionner avec le tunnel
- Générer une URL publique
- Afficher les informations du tunnel

**Note** : Lors du démarrage d'un tunnel, DevSpaces reconfigure automatiquement votre application. Votre navigateur peut garder l'ancienne version en cache, il peut donc être nécessaire de forcer un rafraîchissement (Ctrl+Shift+R ou Cmd+Shift+R) pour voir la configuration mise à jour.

### Étape 3 : Accéder à votre URL partagée

Après la création du tunnel, vous recevrez une URL publique qui ressemble à :

```
https://<id-unique>.share.dvsapp.sh
```

Cette URL est accessible depuis n'importe où sur Internet.

Vous pouvez également voir l'URL du tunnel en utilisant :

```bash
dvs info
```

L'URL du tunnel est affichée dans la section "Links" de la sortie.

<!-- TODO: Ajouter une capture d'écran montrant l'URL publique -->

## Voir le statut du tunnel

Vérifiez le statut de votre tunnel :

```bash
dvs tunnel status
```

Exemple de sortie :

```
Tunnel active for <app>
Public URL: https://f17tttfb1hhf.share.dvsapp.sh
Mode: public
```

Cela affichera :
- Le statut du tunnel (actif, arrêté, erreur)
- L'URL publique
- Le nom de l'application
- Le mode (public)

Vous pouvez également voir l'URL du tunnel dans les informations de l'application :

```bash
dvs info
```

L'URL du tunnel apparaît dans la section "Links" :

```
Links
    Application  https://<app>.dvs.sh
    Backoffice   https://<app>.dvs.sh/adminQkoog8tsEr
    Tunnel       https://f17tttfb1hhf.share.dvsapp.sh
    PHP INFO     https://<app>.dvs.sh/phpinfo
    phpMyAdmin   https://phpmyadmin.svc.dvs.sh
    mailpit      https://mailpit.svc.dvs.sh
```

<!-- TODO: Ajouter une capture d'écran de la sortie du statut du tunnel -->

## Lister tous les tunnels

Voir tous les tunnels actifs :

```bash
dvs tunnel list
```

<!-- TODO: Ajouter une capture d'écran de la sortie de la liste des tunnels -->

## Arrêter un tunnel

Lorsque vous n'avez plus besoin du tunnel, arrêtez-le :

```bash
dvs tunnel stop
```

Cela va :
- Arrêter le tunnel
- Supprimer l'URL publique
- Nettoyer les ressources du tunnel

<!-- TODO: Ajouter une capture d'écran de la commande tunnel stop -->

**Note** : L'arrêt du tunnel n'affecte pas votre application locale - elle continuera à fonctionner localement.

## Supprimer un tunnel

Si vous devez supprimer complètement un tunnel (par exemple, s'il est dans un état d'erreur) :

La commande `dvs tunnel stop` supprime complètement le tunnel. Si vous devez forcer la suppression, vous pouvez également utiliser :

```bash
dvs tunnel stop
```

Cela supprimera le tunnel à la fois de votre système local et du serveur DevSpaces.

<!-- TODO: Ajouter une capture d'écran de la suppression du tunnel -->

## Dépannage

### Échec de la création du tunnel

Si la création du tunnel échoue :

1. Vérifiez que votre compte a accès aux tunnels (Abonnement requis)
2. Vérifiez que votre application est en cours d'exécution : `dvs start`
3. Vérifiez la connectivité réseau
4. Vérifiez les limites de tunnels dans votre compte

### Tunnel non accessible

Si l'URL publique ne fonctionne pas :

1. Vérifiez le statut du tunnel : `dvs tunnel status`
2. Vérifiez que l'application est en cours d'exécution localement
3. Vérifiez les logs de l'application : `dvs logs`
4. Assurez-vous que le tunnel est en statut "actif"

### Plusieurs tunnels

Vous pouvez avoir plusieurs tunnels actifs en même temps, mais un seul tunnel par application.

## Considérations de sécurité

- Les tunnels partagés sont publics - toute personne avec l'URL peut accéder à votre site
- Utilisez les tunnels uniquement pour le développement et les tests
- Ne partagez pas les URLs de tunnel publiquement si votre site contient des données sensibles
- Arrêtez les tunnels lorsqu'ils ne sont pas utilisés

## Prochaines étapes

- Apprenez à [créer un site PrestaShop](/docs/guides/create-prestashop-site)
- Apprenez à [créer un site WordPress](/docs/guides/create-wordpress-site)
- Apprenez à [accéder à Mailpit](/docs/guides/access-mailpit)

