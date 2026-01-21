# dvs tunnel stop

Arrête et supprime un tunnel de partage pour une application.

## Usage

```bash
dvs tunnel stop
```

## Description

Cette commande arrête le tunnel et restaure l'application en accès local uniquement.

À l'arrêt du tunnel :
1. Les hooks utilisateur sont exécutés (si définis dans `/app/.dvs/hooks/`)
2. Les hooks spécifiques à la recette sont exécutés
3. La configuration de l'application est restaurée vers l'URL locale
4. Le container tunnel est arrêté et supprimé

## Exemple

```bash
dvs tunnel stop
```

## Sortie

```
[i] Deleting tunnel for app: myapp
[i] Deleting tunnel from server...
[✓] Tunnel deleted from server
[i] Cleaning up local resources...
[i]   - Stopping and removing tunnel container...
[i]   - Removing tunnel directory...
[i]   - Removing docker-compose file...
[i]   - Removing tunnel config...
[✓] Tunnel configuration successfully deleted
[i] Updating app configuration...

Tunnel stopped for app: myapp
```

## Notes

- L'URL du tunnel devient immédiatement inaccessible après l'arrêt
- L'application reste accessible localement via son domaine `.dvs.sh`
- Les données du tunnel sont nettoyées automatiquement

## Voir aussi

- [tunnel start](tunnel-start) - Démarrer un tunnel
- [tunnel status](tunnel-status) - Voir les informations du tunnel
- [Hooks personnalisés](custom-hooks) - Exécuter des scripts personnalisés sur les événements tunnel
