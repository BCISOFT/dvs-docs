# img-proxy

La fonctionnalité de proxy d'images permet de rediriger les requêtes d'images vers un domaine distant (généralement la production) via un proxy inverse Apache. C'est utile pour les environnements de développement où vous souhaitez utiliser les images de production sans les télécharger localement.

## Fonctionnement

Lorsqu'il est activé, Apache intercepte les requêtes d'images correspondant à des motifs spécifiques et les redirige vers le domaine distant configuré. Les types d'images suivants sont proxifiés :

- URLs d'images directes : `/img/*` (jpg, jpeg, png, gif, webp, avif)
- URLs SEO produits : URLs conviviales PrestaShop pour les produits (1 à 7 chiffres)
- URLs SEO catégories : Images de catégories avec différents motifs d'URL
- Images Fancybox : images `/images_ie/*`

Les fichiers locaux ont la priorité : si une image existe localement, elle est servie directement sans proxy.

## Commandes

### Status

Afficher la configuration actuelle du proxy d'images :

```bash
dvs img-proxy status
```

Affiche :
- Domaine actuel (si défini)
- Mode proxy d'images (activé/désactivé)

### Set domain

Configurer le domaine distant depuis lequel proxifier les images :

```bash
dvs img-proxy set-domain <domain>
```

Exemple :
```bash
dvs img-proxy set-domain shop.example.com
```

Si le proxy est déjà activé, Apache sera rechargé automatiquement après la définition du domaine.

### Enable

Activer le mode proxy d'images. Nécessite qu'un domaine soit défini au préalable :

```bash
dvs img-proxy enable
```

Si aucun domaine n'est configuré, vous serez invité à en définir un avec `set-domain`.

### Disable

Désactiver le mode proxy d'images :

```bash
dvs img-proxy disable
```

### Toggle

Basculer le mode proxy d'images activé/désactivé :

```bash
dvs img-proxy toggle
```

Si l'activation est demandée et qu'aucun domaine n'est défini, vous serez invité à en configurer un d'abord.

## Exemple d'utilisation

```bash
# Vérifier l'état actuel
dvs img-proxy status

# Configurer le domaine distant
dvs img-proxy set-domain production.example.com

# Activer le proxy
dvs img-proxy enable

# Plus tard, le désactiver
dvs img-proxy disable
```

## Détails techniques

- Apache est rechargé automatiquement lors de l'activation/désactivation ou du changement de domaine
- Le proxy utilise SSL/TLS pour se connecter au domaine distant
- Seules les requêtes d'images sont proxifiées ; les fichiers locaux (CSS, JS, images de thème) sont servis normalement
