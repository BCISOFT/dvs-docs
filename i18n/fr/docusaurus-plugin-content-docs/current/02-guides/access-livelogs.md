# Accéder à Live Logs

Ce guide explique comment utiliser Live Logs pour visualiser en temps réel les logs des containers de vos applications et services DevSpaces.

## Vue d'ensemble

Live Logs fournit une interface web centralisée pour surveiller tous les logs des containers Docker en temps réel. C'est extrêmement utile pour le débogage, le suivi du comportement des applications et l'identification rapide des problèmes sur plusieurs containers.

Propulsé par [Dozzle](https://dozzle.dev/), il offre un streaming des logs en temps réel, une recherche et une vue multi-containers.

## Installation du service Live Logs

Installez le service livelogs :

```bash
dvs service install livelogs
```

Une fois installé, l'interface web est accessible à :

```
https://livelogs.svc.dvs.sh
```

## Fonctionnalités

### Streaming des logs en temps réel

- Les logs sont diffusés en temps réel via Server-Sent Events (SSE)
- Pas besoin de rafraîchir la page - les nouveaux logs apparaissent automatiquement
- Utilisation minimale des ressources (~4 Mo de mémoire)

### Vue multi-containers

- Visualisez les logs de tous les containers dans une seule interface
- Containers regroupés par type : Apps, Database, Tools
- Mode écran partagé pour comparer les logs de plusieurs containers
- Changement rapide de container via la barre latérale

### Recherche et filtrage

- Recherche floue sur les noms de containers
- Recherche regex dans les logs
- Filtrage par niveau de log ou contenu

### Statistiques des containers

- Utilisation CPU et mémoire en temps réel par container
- Aperçu rapide de l'état de santé

## Cas d'utilisation

### Débogage des erreurs d'application

Lorsque votre application génère une erreur :

1. Ouvrez Live Logs
2. Sélectionnez le container de votre application
3. Recherchez les messages d'erreur ou les traces de pile
4. Visualisez les logs avant et après l'erreur pour comprendre le contexte

### Surveillance de plusieurs services

Lorsque vous exécutez une stack complexe (app + base de données + cache) :

1. Utilisez le mode écran partagé pour voir plusieurs containers
2. Corrélez les événements entre les services
3. Identifiez les défaillances en cascade

### Inspection rapide des containers

Au lieu d'exécuter `docker logs` ou `dvs logs` de manière répétée :

1. Gardez Live Logs ouvert dans un onglet du navigateur
2. Passez d'un container à l'autre instantanément
3. Utilisez la recherche pour trouver des événements spécifiques

## Limitations

- **Pas de persistance des logs** : Les logs ne sont pas stockés, visualisation en temps réel uniquement
- **stdout/stderr uniquement** : Impossible d'accéder aux fichiers de logs à l'intérieur des containers
- **Pas de recherche hors ligne** : Impossible de rechercher dans les logs historiques

Pour une analyse persistante des logs, exportez-les avec `docker logs > fichier.log`.

## Dépannage

### L'interface ne se charge pas

Si l'interface Live Logs ne se charge pas :

1. Vérifiez que le service est en cours d'exécution : `dvs status`
2. Démarrez le service si nécessaire : `dvs service start livelogs`
3. Vérifiez les avertissements de certificat SSL du navigateur

### Les containers n'apparaissent pas

Si certains containers n'apparaissent pas :

1. Vérifiez que les containers sont en cours d'exécution : `docker ps`
2. Vérifiez que les containers sont sur le réseau DevSpaces

### Streaming des logs lent

Si les logs apparaissent avec du retard :

1. Vérifiez si vous êtes derrière un reverse proxy qui met en tampon les SSE
2. Réduisez le nombre d'onglets de containers ouverts

## Prochaines étapes

- Apprenez à [accéder à HTTP Log](/docs/guides/access-httplog) pour le débogage des API
- Apprenez à [accéder à Mailpit](/docs/guides/access-mailpit) pour les tests d'email
- Apprenez à [utiliser phpMyAdmin](/docs/guides/use-phpmyadmin) pour la gestion des bases de données
