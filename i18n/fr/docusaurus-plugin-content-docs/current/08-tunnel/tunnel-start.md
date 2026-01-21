# dvs tunnel start

Démarre un tunnel de partage pour une application, la rendant accessible depuis internet.

## Usage

```bash
dvs tunnel start
```

## Description

Cette commande crée un tunnel sécurisé qui expose votre application locale sur internet via une URL unique (ex: `https://abc123.share.zrok.io`).

Au démarrage du tunnel :
1. Un container tunnel est créé et démarré
2. Les hooks spécifiques à la recette sont exécutés (ex: configuration URL WordPress)
3. Les hooks utilisateur sont exécutés (si définis dans `/app/.dvs/hooks/`)
4. La configuration de l'application est mise à jour avec l'URL du tunnel

## Exemple

```bash
dvs tunnel start
```

## Sortie

```
[i] Starting tunnel container...
[i] Waiting for tunnel container to start...
[✓] tunnel container started

Tunnel created successfully!

myapp is now accessible at: https://abc123.share.zrok.io
```

## Dépannage

### Échec d'authentification au registry

Si vous voyez cette erreur, vos identifiants Docker ont expiré :

```
[!] Registry authentication failed
[w] Try one of these commands to fix:
[w]   dvs login  - reconnect to registry
[w]   dvs sync   - refresh credentials from server
```

### Problèmes de permissions

Si le container tunnel échoue à cause des permissions :

```bash
rm -rf ~/.dvs/apps/<app_name>/zrok
dvs tunnel start
```

## Voir aussi

- [tunnel stop](tunnel-stop) - Arrêter le tunnel
- [tunnel status](tunnel-status) - Voir les informations du tunnel
- [Hooks personnalisés](custom-hooks) - Exécuter des scripts personnalisés sur les événements tunnel
