# dvs activate

Activer une application pour les commandes dvs.

## Description

La commande `activate` définit une application comme active. Lorsqu'une app est activée, toutes les commandes `dvs` s'exécutent dans le contexte du répertoire racine de cette application (`APP_ROOT`), indépendamment de votre répertoire de travail actuel.

Cela est particulièrement utile lorsque vous devez exécuter des commandes qui nécessitent d'être dans un sous-répertoire spécifique.

L'application active est également affichée dans votre prompt shell (sauf si désactivé avec `DVS_PROMPT_DISABLE`).

## Utilisation

```bash
dvs activate <nom-app>
```

## Arguments

- `<nom-app>` - Le nom de l'application à activer

## Exemples

```bash
# Activer une application
dvs activate myapp

# Après activation, les commandes s'exécutent dans le contexte de l'app
dvs app start
dvs app rebuild
```

## Comportement

Lorsqu'une app est activée :

- Le prompt shell affiche `(dvs:nom-app)` pour indiquer l'app active
- Toutes les commandes `dvs` s'exécutent dans le contexte du répertoire racine de l'app

## Notes

- Une seule app peut être active à la fois. Activer une nouvelle app remplace la précédente.
- Utilisez `dvs deactivate` pour désactiver l'app actuelle et revenir au comportement normal.

## Voir aussi

- [dvs deactivate](./deactivate.md) - Désactiver l'app active
- [dvs app-folder](./app-folder.md) - Obtenir le chemin du dossier d'une app
- [Personnalisation du Prompt](prompt-customization)
