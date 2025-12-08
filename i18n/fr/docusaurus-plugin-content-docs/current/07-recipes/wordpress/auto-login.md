# auto-login

## Description

Génère une URL à usage unique pour accéder instantanément à l'admin WordPress sans saisir d'identifiants.

## Utilisation

```bash
dvs auto-login [user_id]
```

## Arguments

| Argument | Description |
|----------|-------------|
| `user_id` | Optionnel. ID utilisateur WordPress. Par défaut : dernier ID utilisé ou 1. |

## Exemples

```bash
# Génère une URL pour l'utilisateur par défaut
dvs auto-login

# Génère une URL pour l'utilisateur ID 2
dvs auto-login 2
```

## Sortie

```
[✔] Auto-login URL generated for user ID 1
https://mysite.dvs.sh/wp-admin/?dvs_autologin=abc123...
```

## Sécurité

- Le token est à usage unique (supprimé après connexion réussie)
- Le token fait 64 caractères (256 bits) cryptographiquement aléatoires
- Comparaison temporellement sûre pour prévenir les attaques de timing

## Notes

- L'ID utilisateur est mémorisé pour les appels suivants
- Fonctionne avec DVS UI pour un accès graphique
- L'application doit être démarrée

