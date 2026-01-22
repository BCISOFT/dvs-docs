# Scripts & Intégration IA

Cette page explique comment utiliser DevSpaces dans des contextes non-interactifs comme les scripts, les pipelines CI/CD ou les outils de développement assistés par IA.

## Le problème

Lors de l'exécution de commandes DVS dans un contexte non-interactif (scripts, tâches cron, assistants IA comme Cursor ou Claude Code), vous pouvez rencontrer cette erreur :

```
the input device is not a TTY
```

Cela se produit car les commandes DVS tentent d'allouer un pseudo-TTY pour les fonctionnalités interactives, mais aucun TTY n'est disponible dans ces contextes.

## Solution : DVS_NO_TTY

Définissez la variable d'environnement `DVS_NO_TTY` pour désactiver l'allocation TTY :

```bash
DVS_NO_TTY=1 dvs php bin/console cache:clear
```

### Ce que ça fait

Quand `DVS_NO_TTY` est défini (n'importe quelle valeur non vide) :
- Désactive les flags `-it` sur les commandes Docker exec (pas d'allocation TTY)
- Définit `INTERACTIVE=0` (désactive les prompts interactifs)
- Désactive l'affichage du footer

### Priorité de détection

DVS détecte automatiquement le contexte d'exécution :

| Contexte | TTY disponible | `DVS_NO_TTY` | Résultat |
|----------|----------------|--------------|----------|
| Terminal interactif | Oui | Non défini | Mode interactif complet |
| Script/pipe | Non | Non défini | Auto non-interactif |
| Tout contexte | Quelconque | Défini | Non-interactif forcé |

## Configuration des alias

Pour plus de commodité, créez des alias dans votre configuration shell (`~/.bashrc`, `~/.zshrc`) :

```bash
# DVS standard (interactif)
alias dvs='dvs'

# DVS pour scripts et outils IA (non-interactif)
alias dvs-script='DVS_NO_TTY=1 dvs'
alias dvs-ai='DVS_NO_TTY=1 dvs'
```

Puis rechargez votre shell :

```bash
source ~/.zshrc  # ou ~/.bashrc
```

### Exemples d'utilisation

```bash
# Utilisation interactive (par défaut)
dvs shell
dvs php bin/console

# Utilisation script/IA (non-interactive)
dvs-script php bin/console cache:clear
dvs-ai composer install
```

## Outils de développement IA

### Cursor / Claude Code

Lors de l'utilisation d'assistants IA avec des capacités terminal limitées :

```bash
# Dans le terminal de votre outil IA
DVS_NO_TTY=1 dvs php bin/console cache:clear
DVS_NO_TTY=1 dvs exec npm run build
```

### Pipelines CI/CD

Pour les pipelines automatisés, utilisez `DVS_NO_TTY` :

```yaml
# Exemple GitHub Actions
- name: Clear cache
  run: DVS_NO_TTY=1 dvs php bin/console cache:clear

# Exemple GitLab CI
deploy:
  script:
    - DVS_NO_TTY=1 dvs composer install --no-dev
```

## Bonnes pratiques

1. **Utilisez `--force` ou `--yes`** pour les commandes DVS nécessitant une confirmation
2. **Vérifiez les codes de sortie** dans les scripts pour détecter les échecs
3. **Utilisez la sortie `--json`** lors de l'analyse programmatique de la sortie DVS

```bash
# Obtenir les infos app en JSON
DVS_NO_TTY=1 dvs info --json | jq '.name'
```

### Flags des outils externes

Certains outils exécutés via DVS ont leurs propres flags non-interactifs. Ce ne sont **pas des flags DVS** mais des flags passés à l'outil sous-jacent :

```bash
# Flag --no-interaction de Composer
DVS_NO_TTY=1 dvs composer install --no-interaction

# Flag --no-interaction de Symfony Console
DVS_NO_TTY=1 dvs php bin/console doctrine:migrations:migrate --no-interaction

# Flag --force d'Artisan
DVS_NO_TTY=1 dvs php artisan migrate --force
```

## Dépannage

### La commande se bloque ?

La commande attend peut-être une entrée de l'outil sous-jacent. Ajoutez le flag non-interactif approprié pour cet outil :

```bash
# Composer
DVS_NO_TTY=1 dvs composer install --no-interaction

# Console Symfony/PrestaShop
DVS_NO_TTY=1 dvs console cache:clear --no-interaction

# WP-CLI (généralement non-interactif par défaut)
DVS_NO_TTY=1 dvs wp plugin list
```

### Besoin de couleurs dans la sortie ?

Quand `DVS_NO_TTY` est défini, les couleurs sont désactivées. Si vous avez besoin de couleurs dans un contexte de script où un vrai TTY est disponible, ne définissez pas `DVS_NO_TTY` et laissez DVS auto-détecter.
