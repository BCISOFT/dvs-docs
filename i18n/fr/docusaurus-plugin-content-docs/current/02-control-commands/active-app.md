# Application Active

Contrôlez quel contexte d'application est utilisé pour les commandes `dvs` en utilisant la variable d'environnement `DVS_ACTIVE_APP`.

## Description

La variable d'environnement `DVS_ACTIVE_APP` détermine quel répertoire racine d'application (`APP_ROOT`) est monté comme `/app` dans le conteneur lors de l'exécution des commandes `dvs`. Cela vous permet d'exécuter des commandes dans un contexte d'application spécifique, indépendamment de votre répertoire de travail actuel.

Lorsque `DVS_ACTIVE_APP` est définie, le nom de l'application active est également affiché dans votre prompt shell sous la forme `(dvs:nom-app)` (sauf si désactivé avec `DVS_PROMPT_DISABLE`).

## Utilisation

Définissez la variable d'environnement avant d'exécuter les commandes `dvs` :

```bash
export DVS_ACTIVE_APP=myapp
dvs start
dvs rebuild
```

Pour désactiver l'application active :

```bash
unset DVS_ACTIVE_APP
```

## Fonctionnement

Lorsque `DVS_ACTIVE_APP` est définie avec un nom d'application valide :

1. DVS valide que l'application existe dans votre configuration
2. Toutes les commandes `dvs` s'exécutent dans le contexte de cette application

Si `DVS_ACTIVE_APP` n'est pas définie ou définie avec un nom d'application invalide, DVS utilise votre répertoire de travail actuel comme point de montage.

## Exemples

### Activer une application pour une session

```bash
# Définir l'application active
export DVS_ACTIVE_APP=myapp

# Exécuter des commandes dans le contexte de l'app
dvs start
dvs logs
dvs rebuild

# Le prompt affiche : (dvs:myapp) user@host:~/path$
```

### Rendre la configuration persistante dans votre shell

Ajoutez à votre `~/.bashrc`, `~/.zshrc`, ou `~/.config/fish/config.fish` :

```bash
# Bash/Zsh
export DVS_ACTIVE_APP=myapp

# Fish
set -gx DVS_ACTIVE_APP myapp
```

### Basculer entre applications

```bash
# Travailler sur app1
export DVS_ACTIVE_APP=app1
dvs start

# Basculer vers app2
export DVS_ACTIVE_APP=app2
dvs start
```

### Désactiver pour utiliser le répertoire actuel

```bash
unset DVS_ACTIVE_APP
# Maintenant les commandes dvs utilisent votre répertoire de travail actuel
```

## Comportement

- **Variable d'environnement** : `DVS_ACTIVE_APP` est lue depuis l'environnement de votre shell
- **Validation** : DVS valide que l'application existe et a un `APP_ROOT` valide avant de l'utiliser
- **Fallback** : Si la validation échoue, DVS utilise votre répertoire de travail actuel
- **Indicateur de prompt** : Le nom de l'application active apparaît dans votre prompt sous la forme `(dvs:nom-app)` lorsqu'elle est définie

## Notes

- La variable est spécifique à la session par défaut. Pour la rendre persistante, ajoutez-la à votre fichier de configuration shell
- Une seule application peut être active à la fois (celle définie dans `DVS_ACTIVE_APP`)
- L'application doit exister dans votre configuration DVS
- Utilisez `dvs app-folder <nom>` pour obtenir le chemin du dossier d'une application

## Voir aussi

- [dvs app-folder](./app-folder.md) - Obtenir le chemin du dossier d'une application
- [Personnalisation du Prompt](./prompt-customization.md) - Personnaliser votre prompt shell

