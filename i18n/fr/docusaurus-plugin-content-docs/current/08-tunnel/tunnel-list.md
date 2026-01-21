# dvs tunnel list

Liste tous les tunnels actifs sur cette installation DVS.

## Usage

```bash
dvs tunnel list
```

## Description

Affiche un tableau de tous les tunnels actuellement actifs sur toutes les applications, montrant :
- Nom de l'application
- URL du tunnel
- Statut

## Exemple

```bash
dvs tunnel list
```

## Sortie

```
Tunnels:

  App: myshop
  URL: https://abc123.share.zrok.io
  Status: active
  Mode: public

  App: blog
  URL: https://def456.share.zrok.io
  Status: active
  Mode: public
```

Si aucun tunnel n'est actif :

```
Tunnels:

No tunnels
```

## Voir aussi

- [tunnel start](tunnel-start) - Démarrer un tunnel
- [tunnel stop](tunnel-stop) - Arrêter un tunnel
- [tunnel status](tunnel-status) - Voir les détails du tunnel pour l'app active
