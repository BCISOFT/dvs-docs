# dvs generate-wrapper

Générer le fichier wrapper.sh.

## Description

La commande `generate-wrapper` génère le fichier `wrapper.sh` qui fournit l'alias de commande `dvs` et intègre DevSpaces dans votre environnement shell.

## Utilisation

```bash
dvs generate-wrapper
```

## Ce qu'elle fait

1. Génère le fichier `wrapper.sh` dans le répertoire de configuration
2. Le wrapper fournit la commande `dvs` qui fait un proxy vers le binaire dvsctl
3. Le wrapper est automatiquement intégré dans votre configuration shell lors de `dvs install`

## Prérequis

- Le répertoire de configuration doit exister ou être créable

## Exemples

```bash
# Générer le wrapper
dvs generate-wrapper
```

## Cas d'usage

- Régénérer le wrapper après des modifications manuelles
- Corriger une corruption du wrapper
- Mettre à jour le wrapper après des changements système

## Notes

- Le wrapper est automatiquement généré lors de `dvs install`.
- Le wrapper est automatiquement mis à jour lors de `dvs upgrade`.
- La régénération manuelle est rarement nécessaire.

