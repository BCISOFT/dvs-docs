# dvs login

Se connecter au registre DVS (docker login).

## Description

La commande `login` s'authentifie auprès du registre Docker (Harbor) configuré pour votre installation DevSpaces. Cela vous permet de télécharger et pousser des images Docker depuis le registre privé.

## Utilisation

```bash
dvs login
```

## Ce qu'elle fait

1. Charge votre configuration locale
2. Vérifie que la configuration du registre Harbor est présente
3. Exécute `docker login` avec vos identifiants de registre
4. Stocke l'authentification dans le credential store de Docker

## Prérequis

- Une installation valide doit exister (exécutez `dvs install` d'abord)
- Votre offre doit avoir accès au registre Docker
- La configuration Harbor doit être présente dans votre installation

## Exemples

```bash
# Se connecter au registre
dvs login
```

## Cas d'usage

- S'authentifier avant de télécharger des images privées
- S'authentifier avant de pousser des images vers le registre
- Actualiser des identifiants expirés

## Notes

- Cette commande utilise les identifiants stockés dans votre configuration DevSpaces.
- L'authentification est stockée dans le credential store de Docker et persiste entre les sessions.
- Si votre offre n'inclut pas l'accès au registre, cette commande échouera.

