# auto-login

## Description

Génère une URL à usage unique pour accéder instantanément au back-office PrestaShop sans saisir d'identifiants.

## Utilisation

```bash
dvs auto-login [employee_id]
```

## Arguments

| Argument | Description |
|----------|-------------|
| `employee_id` | Optionnel. ID employé PrestaShop. Par défaut : dernier ID utilisé ou 1. |

## Exemples

```bash
# Génère une URL pour l'employé par défaut
dvs auto-login

# Génère une URL pour l'employé ID 2
dvs auto-login 2
```

## Sortie

```
[✔] Auto-login URL generated for employee ID 1
https://mysite.dvs.sh/adminXXX/?dvs_autologin=abc123...
```

## Sécurité

- Le token est à usage unique (supprimé après connexion réussie)
- Le token fait 64 caractères (256 bits) cryptographiquement aléatoires
- Comparaison temporellement sûre pour prévenir les attaques de timing

## Notes

- L'ID employé est mémorisé pour les appels suivants
- Fonctionne avec DVS UI pour un accès graphique
- L'application doit être démarrée

