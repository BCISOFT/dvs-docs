# Configurer le proxy d'image PrestaShop

Ce guide explique comment configurer et utiliser la fonctionnalité de proxy d'image pour PrestaShop, qui vous permet de servir des images depuis un domaine distant via votre environnement de développement local.

## Vue d'ensemble

La fonctionnalité de proxy d'image dans PrestaShop vous permet de proxyfier les images depuis un serveur de production ou de staging vers votre environnement de développement local. C'est utile lorsque vous voulez travailler avec de vraies images de produits sans toutes les télécharger localement.

## Prérequis

- Une application PrestaShop créée avec DevSpaces
- Accès au domaine distant contenant les images que vous souhaitez proxyfier

## Vérifier le statut du proxy d'image

D'abord, vérifiez le statut actuel du proxy d'image :

```bash
dvs img-proxy status
```

Cela affichera si le proxy d'image est activé ou désactivé.

<!-- TODO: Ajouter une capture d'écran de la sortie de img-proxy status -->

## Activer le proxy d'image

### Étape 1 : Définir le domaine

Avant d'activer le proxy d'image, vous devez spécifier le domaine distant :

```bash
dvs img-proxy set-domain example.com
```

Remplacez `example.com` par le domaine de votre serveur de production ou de staging.

<!-- TODO: Ajouter une capture d'écran de la commande set-domain -->

### Étape 2 : Activer le proxy

Activez le proxy d'image :

```bash
dvs img-proxy enable
```

Cela va :
- Configurer Apache pour proxyfier les requêtes d'images
- Recharger la configuration Apache
- Démarrer le proxy des images depuis le domaine spécifié

<!-- TODO: Ajouter une capture d'écran de la sortie de la commande enable -->

## Désactiver le proxy d'image

Pour désactiver le proxy d'image :

```bash
dvs img-proxy disable
```

Cela arrêtera le proxy des images et servira uniquement les images locales.

<!-- TODO: Ajouter une capture d'écran de la sortie de la commande disable -->

## Basculer le proxy d'image

Vous pouvez rapidement basculer le proxy d'image activé/désactivé :

```bash
dvs img-proxy toggle
```

Cela basculera entre les états activé et désactivé.

<!-- TODO: Ajouter une capture d'écran de la sortie de la commande toggle -->

## Changer le domaine

Pour changer le domaine du proxy, utilisez à nouveau la commande `set-domain` :

```bash
dvs img-proxy set-domain newdomain.com
```

La configuration est automatiquement rechargée après la modification du domaine. La modification est appliquée immédiatement.

## Comment ça fonctionne

Lorsque le proxy d'image est activé :

1. Les requêtes pour les images depuis le répertoire `/img/` sont interceptées
2. La requête est transférée vers le domaine distant que vous avez spécifié
3. L'image est récupérée et servie à votre site local
4. Les requêtes suivantes peuvent être mises en cache localement

Cela vous permet de :
- Travailler avec des images de production sans les télécharger
- Tester avec de vraies images de produits
- Réduire les besoins de stockage local

## Vérifier la configuration

Après activation, vérifiez que les images sont proxyfiées :

1. Vérifiez le statut : `dvs img-proxy status`
2. Visitez votre site PrestaShop et visualisez les images de produits
3. Vérifiez l'onglet réseau du navigateur pour voir si les images sont chargées depuis le proxy
4. Vérifiez les logs du proxy : `dvs logs` pour voir l'activité du proxy

<!-- TODO: Ajouter une capture d'écran de l'onglet réseau du navigateur montrant les images proxyfiées -->

## Dépannage

### Les images ne se chargent pas

Si les images ne se chargent pas après activation du proxy :

1. Vérifiez que le domaine est correct : `dvs img-proxy status`
2. Vérifiez que le domaine distant est accessible
3. Vérifiez que la configuration Apache a été rechargée
4. Vérifiez les logs de l'application : `dvs logs`

### Domaine non défini

Si vous essayez d'activer sans définir de domaine :

```bash
dvs img-proxy enable
# Erreur : domaine non fourni et non défini
```

Vous devez d'abord définir le domaine :

```bash
dvs img-proxy set-domain example.com
dvs img-proxy enable
```

### Configuration non appliquée

Si les modifications ne semblent pas s'appliquer :

1. Vérifiez le statut : `dvs img-proxy status`
2. Forcez un rafraîchissement du navigateur (Ctrl+Shift+R ou Cmd+Shift+R) pour vider le cache des images
3. Essayez de basculer : `dvs img-proxy toggle`
4. Vérifiez les logs Apache : `dvs logs`
5. Redémarrez l'application : `dvs restart`

## Bonnes pratiques

- Utilisez le proxy d'image uniquement lorsque nécessaire (développement/test)
- Désactivez-le lorsque vous travaillez avec des images locales
- Définissez le domaine pour correspondre à votre environnement de staging/production
- Testez le chargement des images après activation du proxy

## Prochaines étapes

- Apprenez à [créer un site PrestaShop](/docs/guides/create-prestashop-site)
- Apprenez à [accéder à Mailpit](/docs/guides/access-mailpit)
- Apprenez à [utiliser phpMyAdmin](/docs/guides/use-phpmyadmin)

