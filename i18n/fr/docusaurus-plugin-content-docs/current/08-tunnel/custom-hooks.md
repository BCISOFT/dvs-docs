# Hooks personnalisés Tunnel

Les hooks personnalisés permettent d'exécuter des scripts automatiquement au démarrage ou à l'arrêt d'un tunnel.

## Emplacement des hooks

Créez vos hooks personnalisés dans le dossier `.dvs/hooks/` de votre application :

```
/app/.dvs/hooks/
├── tunnel.after_start.sh
└── tunnel.after_stop.sh
```

:::info Contexte d'exécution
Les hooks s'exécutent dans le conteneur DVS où `/app/` est monté vers le répertoire de votre application sur l'hôte. Tous les chemins de fichiers dans les hooks doivent utiliser `/app/` comme chemin de base.
:::

## Fonctions des hooks

Chaque fichier hook doit définir une fonction spécifique :

### tunnel.after_start.sh

```bash
#!/bin/bash
# Hook exécuté après le démarrage du tunnel
# Reçoit l'URL du tunnel en premier argument

hook.tunnel.after_start() {
    local tunnel_url="$1"
    
    # Votre code personnalisé ici
    echo "Tunnel démarré sur : $tunnel_url"
}
```

### tunnel.after_stop.sh

```bash
#!/bin/bash
# Hook exécuté après l'arrêt du tunnel

hook.tunnel.after_stop() {
    # Votre code personnalisé ici
    echo "Tunnel arrêté"
}
```

## Variables disponibles

Dans vos hooks, vous avez accès aux variables d'environnement DVS :

| Variable | Description |
|----------|-------------|
| `$APP_NAME` | Nom de l'application |
| `$APP_RECIPE` | Type de recette (wordpress, prestashop, lamp...) |
| `$APP_ROOT` | Chemin racine de l'application sur l'hôte |
| `$DVS_DOMAIN` | Domaine DVS (ex: `dvs.sh`) |

Le domaine local de l'application est `$APP_NAME.$DVS_DOMAIN`.

Pour `tunnel.after_start`, l'URL du tunnel est passée en premier argument (`$1`).

## Cas d'utilisation

### Notifier un canal Slack

```bash
hook.tunnel.after_start() {
    local tunnel_url="$1"
    curl -X POST -H 'Content-type: application/json' \
        --data "{\"text\":\"Tunnel disponible : $tunnel_url\"}" \
        "$SLACK_WEBHOOK_URL"
}
```

### Mettre à jour une configuration externe

```bash
hook.tunnel.after_start() {
    local tunnel_url="$1"
    # Mettre à jour le fichier .env avec l'URL du tunnel
    sed -i "s|APP_URL=.*|APP_URL=$tunnel_url|" /app/.env
}

hook.tunnel.after_stop() {
    # Restaurer l'URL locale
    sed -i "s|APP_URL=.*|APP_URL=https://$APP_NAME.$DVS_DOMAIN|" /app/.env
}
```

### Vider le cache après changement de tunnel

```bash
hook.tunnel.after_start() {
    # Vider le cache de l'application
    php /app/bin/console cache:clear 2>/dev/null || true
}

hook.tunnel.after_stop() {
    php /app/bin/console cache:clear 2>/dev/null || true
}
```

## Ordre d'exécution

Au démarrage d'un tunnel :
1. Le container tunnel démarre
2. Le hook de recette s'exécute (si défini)
3. Le hook utilisateur s'exécute (`tunnel.after_start`)
4. `app.update_config()` est appelé

À l'arrêt d'un tunnel :
1. Le hook utilisateur s'exécute (`tunnel.after_stop`)
2. Le hook de recette s'exécute (si défini)
3. `app.update_config()` est appelé
4. Le container tunnel s'arrête

## Notes

- Les hooks sont optionnels - si le fichier n'existe pas, il est ignoré silencieusement
- Les hooks fournis par la recette s'exécutent avant les hooks utilisateur au démarrage, après à l'arrêt
- Utilisez `set -e` avec précaution car cela peut interrompre le processus tunnel en cas d'erreur
