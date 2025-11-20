# Personnalisation du Prompt

Personnalisez votre prompt pour afficher l'application DVS active.

## Vue d'ensemble

Lorsque vous définissez la variable d'environnement `DVS_ACTIVE_APP`, DVS ajoute automatiquement un indicateur à votre prompt affichant le nom de l'app active : `(dvs:nom-app)`.

Cet indicateur est compatible avec la plupart des configurations shell et prompts personnalisés (OhMyZsh, Starship, etc.).

## Intégration automatique du prompt

L'indicateur du prompt est automatiquement ajouté par le script DVS lorsque :

1. La variable d'environnement `DVS_ACTIVE_APP` est définie avec un nom d'application valide
2. La variable d'environnement `DVS_PROMPT_DISABLE` n'est pas définie à `1`

L'intégration utilise des hooks shell pour éviter de casser les prompts personnalisés :

- **Bash** : Utilise le hook `PROMPT_COMMAND`
- **Zsh** : Utilise le hook `precmd` via `add-zsh-hook`
- **Fish** : Enveloppe la fonction `fish_prompt`

## Désactiver l'indicateur du prompt

Pour désactiver l'indicateur automatique du prompt, définissez la variable d'environnement `DVS_PROMPT_DISABLE` :

```bash
export DVS_PROMPT_DISABLE=1
```

Pour le réactiver :

```bash
unset DVS_PROMPT_DISABLE
```

Vous pouvez également ajouter ceci à votre fichier de configuration shell pour le rendre permanent :

```bash
# Dans ~/.bashrc, ~/.zshrc, ou ~/.config/fish/config.fish
export DVS_PROMPT_DISABLE=1
```

## Intégration avec des prompts personnalisés

### Starship

Pour une expérience plus intégrée avec Starship, vous pouvez ajouter un module personnalisé dans votre `~/.config/starship.toml` :

```toml
[custom.dvs]
command = "echo $DVS_ACTIVE_APP"
when = "test -n \"$DVS_ACTIVE_APP\""
format = "[$symbol($output )]($style)"
symbol = "🅐 "
style = "bold green"
```

Cela affichera le nom de l'app active avec un symbole et un style personnalisés qui correspondent à votre thème Starship.

### OhMyZsh

Pour les thèmes OhMyZsh, vous pouvez personnaliser le prompt en ajoutant à votre `~/.zshrc` :

```bash
# Indicateur d'app DVS pour OhMyZsh
_dvs_prompt_app() {
    if [ -n "$DVS_ACTIVE_APP" ]; then
        echo "%F{green}(dvs:$DVS_ACTIVE_APP)%f "
    fi
}

# Ajouter à votre prompt de thème (exemple pour le thème robbyrussell)
# PROMPT='$(_dvs_prompt_app)'$PROMPT
```

Ou l'intégrer dans une fonction de thème personnalisée appelée par votre thème.

### Autres prompts personnalisés

Pour d'autres systèmes de prompts personnalisés, vous devez lire l'app active dynamiquement à chaque affichage du prompt. Voici des exemples pour différents shells :

**Bash :**

```bash
# Fonction pour obtenir l'app active (appelée avant chaque prompt)
_dvs_get_active_app() {
    if [ -n "$DVS_ACTIVE_APP" ]; then
        echo "(dvs:$DVS_ACTIVE_APP) "
    fi
}

# Ajouter à PROMPT_COMMAND pour mettre à jour le prompt dynamiquement
PROMPT_COMMAND='DVS_APP_INDICATOR=$(_dvs_get_active_app); '"$PROMPT_COMMAND"

# Utiliser dans votre prompt
PS1='$DVS_APP_INDICATOR'"$PS1"
```

**Zsh :**

```bash
# Fonction pour obtenir l'app active (appelée avant chaque prompt)
_dvs_get_active_app() {
    if [ -n "$DVS_ACTIVE_APP" ]; then
        echo "%F{green}(dvs:$DVS_ACTIVE_APP)%f "
    fi
}

# Ajouter au hook precmd
autoload -Uz add-zsh-hook
add-zsh-hook precmd _dvs_update_prompt
_dvs_update_prompt() {
    DVS_APP_INDICATOR=$(_dvs_get_active_app)
}

# Utiliser dans votre prompt
PROMPT='$DVS_APP_INDICATOR'"$PROMPT"
```

**Fish :**

```fish
# Fonction pour obtenir l'app active
function _dvs_get_active_app
    if test -n "$DVS_ACTIVE_APP"
        echo -n "(dvs:$DVS_ACTIVE_APP) "
    end
end

# Utiliser dans fish_prompt
function fish_prompt
    echo -n (_dvs_get_active_app)
    # ... reste de votre prompt
end
```

**Important :** La variable d'environnement `DVS_ACTIVE_APP` est lue directement depuis l'environnement de votre shell. L'indicateur se met à jour immédiatement lorsque vous définissez ou supprimez la variable.

## Variable d'environnement

### DVS_PROMPT_DISABLE

Contrôle si l'indicateur automatique du prompt est affiché.

- **Par défaut** : `0` (indicateur du prompt activé)
- **Valeurs** : 
  - `0` ou non défini : L'indicateur du prompt est affiché lorsqu'une app est active
  - `1` : L'indicateur du prompt est désactivé

**Exemple :**

```bash
# Désactiver l'indicateur du prompt
export DVS_PROMPT_DISABLE=1

# Réactiver l'indicateur du prompt
unset DVS_PROMPT_DISABLE
# ou
export DVS_PROMPT_DISABLE=0
```

## Mise à jour du prompt

Après avoir défini ou supprimé `DVS_ACTIVE_APP`, l'indicateur du prompt se met à jour automatiquement. Cependant, si vous ne voyez pas le changement :

1. **Redémarrez votre shell** (ouvrez un nouveau terminal)
2. **Ou rechargez le script wrapper :**
   ```bash
   source ~/.config/devspaces/helpers/wrapper.sh
   ```

## Voir aussi

- [Application Active](./active-app.md) - Contrôler l'application active via variable d'environnement

