# Accéder à HTTP Log

Ce guide explique comment utiliser HTTP Log pour inspecter les requêtes HTTP/HTTPS sortantes de vos applications.

## Présentation

HTTP Log est un outil de développement qui intercepte et affiche toutes les requêtes HTTP/HTTPS sortantes effectuées par vos applications. C'est extrêmement utile pour débugger les appels API, les webhooks et les intégrations avec des services externes.

Propulsé par [mitmproxy](https://mitmproxy.org/), il fournit une interface web en temps réel pour surveiller tout le trafic sortant.

## Installation du service HTTP Log

Installez d'abord le service httplog :

```bash
dvs service install httplog
```

Une fois installé, l'interface web est accessible à :

```
https://httplog.svc.dvs.sh
```

## Activer HTTP Log pour une application

Le logging HTTP doit être activé par application :

```bash
cd ~/projects/mon-app
dvs httplog enable
```

Cela va :
1. Configurer l'application pour router le trafic HTTP via le proxy
2. Installer le certificat CA de mitmproxy pour l'interception HTTPS
3. Redémarrer le conteneur de l'application

## Désactiver HTTP Log

Pour désactiver le logging HTTP pour une application :

```bash
dvs httplog disable
```

## Visualiser le trafic HTTP

### Liste des requêtes

L'interface web de mitmproxy affiche toutes les requêtes interceptées :
- Méthode de requête (GET, POST, etc.)
- URL
- Code de statut de la réponse
- Taille de la réponse
- Durée

### Détails d'une requête

Cliquez sur une requête pour voir :
- Headers complets de la requête
- Corps de la requête (pour POST/PUT)
- Headers de la réponse
- Corps de la réponse
- Informations de timing

## Référence des commandes

| Commande | Description |
|----------|-------------|
| `dvs httplog enable` | Activer le logging HTTP pour l'app courante |
| `dvs httplog disable` | Désactiver le logging HTTP pour l'app courante |
| `dvs httplog status` | Afficher le statut du logging HTTP pour l'app courante |
| `dvs httplog list` | Lister toutes les apps avec leur statut HTTP logging |
| `dvs httplog tail` | Suivre les logs HTTP en temps réel dans le terminal |

## Cas d'utilisation

### Débugger les intégrations API

Quand votre application fait des appels vers des API externes (Stripe, PayPal, transporteurs, etc.), vous pouvez voir :
- Le payload exact envoyé
- La réponse reçue
- Les erreurs ou réponses inattendues

### Vérification des webhooks

Lors de tests de webhooks, vérifiez que votre application envoie le bon payload aux services externes.

### Analyse de performance

Identifiez les appels API externes lents qui pourraient affecter les performances de votre application.

## Scénario Frontend + Backend

Si vous avez plusieurs applications (ex: frontend et backend), vous pouvez activer le logging HTTP uniquement sur le backend pour réduire le bruit :

```bash
cd ~/projects/backend
dvs httplog enable

# Le frontend reste sans HTTP logging
cd ~/projects/frontend
# (pas besoin de httplog enable)
```

## Dépannage

### Les requêtes n'apparaissent pas

Si les requêtes HTTP n'apparaissent pas dans l'interface :

1. Vérifiez que le service httplog tourne : `dvs status`
2. Vérifiez que le logging HTTP est activé pour votre app : `dvs httplog status`
3. Redémarrez votre application : `dvs restart`

### Erreurs de certificat SSL

Si votre application signale des erreurs de certificat SSL quand le logging HTTP est activé :

1. Assurez-vous que le conteneur de l'application a été redémarré après l'activation
2. Vérifiez que le CA mitmproxy a été correctement installé

### Service indisponible

Si le service httplog s'arrête, les applications avec le logging HTTP activé ne pourront plus faire de requêtes sortantes. Pour corriger :

```bash
dvs service start httplog
```

Ou désactivez le logging HTTP pour les apps affectées :

```bash
dvs httplog disable
```

## Étapes suivantes

- Apprenez à [accéder à Mailpit](/docs/guides/access-mailpit) pour tester les emails
- Apprenez à [utiliser phpMyAdmin](/docs/guides/use-phpmyadmin) pour la gestion de base de données
