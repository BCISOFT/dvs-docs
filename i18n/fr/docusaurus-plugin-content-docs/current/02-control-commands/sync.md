# dvs sync

Synchroniser la configuration avec le serveur.

## Description

La commande `sync` synchronise votre configuration locale avec le serveur. Elle récupère la dernière configuration, incluant les certificats SSL, et met à jour votre installation locale.

## Utilisation

```bash
dvs sync
```

## Ce qu'elle fait

1. Vérifie qu'une configuration existe (au minimum la clé API)
2. Charge les clés de chiffrement pour le déchiffrement
3. Appelle l'API serveur pour récupérer le dernier payload scellé
4. Déchiffre le payload avec votre clé privée
5. Met à jour les fichiers de configuration locale
6. Télécharge et installe les certificats SSL
7. Met à jour les identifiants de connexion au registre Docker si nécessaire

## Prérequis

- Une installation valide doit exister (exécutez `dvs install` d'abord)
- Une clé API doit être présente dans la configuration
- L'installation doit être active sur le serveur

## Exemples

```bash
# Synchroniser la configuration
dvs sync
```

## Cas d'usage

- Renouveler les certificats SSL
- Mettre à jour la configuration après des changements sur le serveur
- Corriger les problèmes de validation de licence
- Récupérer après une corruption de configuration

## Notes

- Cette commande nécessite une connexion internet active vers le serveur DevSpaces.
- Si la synchronisation échoue, votre configuration locale reste inchangée.

