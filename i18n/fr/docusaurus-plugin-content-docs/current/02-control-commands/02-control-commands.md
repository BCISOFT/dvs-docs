# Commandes de gestion

`dvs` fournit des commandes pour gérer votre installation et configuration DevSpaces.

## Commandes de contrôle isponibles

- **[install](install)** - Installer et activer une licence DVS
- **[sync](sync)** - Synchroniser la configuration avec le serveur
- **[login](login)** - Se connecter au registre DVS (docker login)
- **[remove](remove)** - Désinstaller et libérer la licence
- **[clean](clean)** - Supprimer la configuration locale (sans appeler l'API)
- **[version](version)** - Afficher la version
- **[app-folder](app-folder)** - Obtenir le chemin du dossier de l'application
- **[generate-wrapper](generate-wrapper)** - Générer le fichier wrapper.sh
- **[completion](completion)** - Générer les scripts de complétion shell
- **[install-completion](install-completion)** - Installer la complétion pour le shell actuel
- **[upgrade](upgrade)** - Mettre à jour vers la dernière version
- **[check-upgrade](check-upgrade)** - Vérifie si une mise à jour est disponible

## Utilisation

Toutes les commandes sont accessibles via la commande `dvs` :

```bash
dvs <commande>
```

Pour les commandes applicatives (admin, services, applications, recettes), utilisez :

```bash
dvs help
```

