# dvs tunnel status

Affiche les informations détaillées du tunnel pour l'application active.

## Usage

```bash
dvs tunnel status
```

## Description

Affiche les informations détaillées sur le tunnel pour l'application active :
- URL du tunnel
- Statut du container
- Heure de création

Ces informations sont également affichées dans `dvs info` quand un tunnel est actif.

## Exemple

```bash
dvs tunnel status
```

## Sortie

Quand le tunnel est actif :

```
Tunnel active for myshop
Public URL: https://abc123.share.zrok.io
Mode: public
```

Quand aucun tunnel n'est configuré :

```
No tunnel configured for myshop
```

Quand le tunnel est inactif :

```
Tunnel inactive for myshop
```

## Voir aussi

- [tunnel start](tunnel-start) - Démarrer un tunnel
- [tunnel stop](tunnel-stop) - Arrêter un tunnel
- [tunnel list](tunnel-list) - Lister tous les tunnels actifs
