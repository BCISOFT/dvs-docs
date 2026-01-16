---
sidebar_position: 2
---

# dvs remote wizard

Assistant interactif pour la configuration automatique des remotes. Détecte la recette, les credentials MySQL, l'URL publique et le workflow optimal depuis un serveur distant.

## Utilisation

```bash
dvs remote wizard [nom] [options]
```

## Arguments

| Argument | Description |
|----------|-------------|
| `[nom]` | Nom de la configuration remote (ex: `prod`, `staging`). Utilisé comme nom de fichier pour `.dvs/remotes/<nom>.conf` |

## Options

| Option | Description |
|--------|-------------|
| `--host <host>` | Nom d'hôte SSH (demandé si non fourni) |
| `--user <user>` | Utilisateur SSH (défaut: www-data) |
| `--port <port>` | Port SSH (défaut: 22) |
| `--pull` | Exécuter le pull après la configuration |

## Recettes supportées

Le wizard est compatible uniquement avec :
- **PrestaShop**
- **WordPress**

L'exécution sur d'autres recettes affichera une erreur.

## Description

Le wizard automatise la création de la configuration remote en :

1. **Détection de recette** : Identifie WordPress ou PrestaShop
2. **Chemin d'installation** : Trouve les installations sur le serveur distant
3. **Credentials MySQL** : Extrait la configuration base de données depuis les fichiers de config
4. **Détection moteur DB** : Détecte MariaDB vs MySQL et gère les incompatibilités
5. **Version application** : Détecte la version PrestaShop/WordPress
6. **Version PHP** : Recommande la version PHP compatible selon la version de l'app
7. **URL publique** : Détecte l'URL publique du site depuis la base de données ou la config
8. **Sélection du workflow** : Recommande le workflow de déploiement optimal
9. **Configuration dumps** : Configuration optionnelle des dumps SQL de backup

## Exemples

### Utilisation basique

```bash
dvs remote wizard
```

Le wizard demandera :
- Nom de l'application (si pas encore configurée)
- Type de recette (si pas encore configurée)
- Hôte SSH
- Utilisateur SSH
- Port SSH

### Avec options SSH

```bash
dvs remote wizard prod --host example.com --user deploy
```

### Avec pull automatique

```bash
dvs remote wizard prod --host example.com --pull
```

## Configuration depuis un dossier vierge

Le wizard peut être exécuté dans un dossier vide pour créer une nouvelle application :

1. Crée le fichier de configuration `.devspaces`
2. Crée la config de l'application dans `/config/apps/<nom>/`
3. Configure le dossier web root
4. Configure la connexion remote
5. Optionnellement, récupère les données (pull)

## Informations détectées

### Pour PrestaShop

- Fichier de config : `app/config/parameters.php` (1.7+) ou `config/settings.inc.php` (1.6)
- Base de données : host, user, password, name, préfixe des tables
- URL publique : depuis la table `ps_shop_url`
- Version : depuis `defines.inc.php`, `AppKernel.php`, ou `composer.json`

### Pour WordPress

- Fichier de config : `wp-config.php`
- Base de données : DB_HOST, DB_USER, DB_PASSWORD, DB_NAME
- URL publique : depuis WP_HOME, WP_SITEURL, ou la table wp_options
- Version : depuis `wp-includes/version.php`

## Gestion du moteur de base de données

Le wizard détecte le moteur de base de données distant (MariaDB ou MySQL) et le compare avec les services installés localement.

En cas d'incompatibilité :
1. **Installer le service recommandé** : Installe le service DB correspondant
2. **Utiliser le service installé** : Utilise un service correspondant déjà installé
3. **Continuer quand même** : Procéder avec compatibilité cross-engine (peut avoir des problèmes)

Quand plusieurs services DB sont installés, le wizard sélectionne automatiquement celui correspondant au moteur distant.

## Configuration des dumps SQL

Si des dumps de backup SQL sont disponibles sur le serveur distant, le wizard peut configurer la section `[dumps]` :

1. **Sélection du chemin** : Parcourir le système de fichiers distant pour sélectionner le dossier des dumps
2. **Pattern** : Pattern de fichier pour matcher les dumps (défaut: `*/*.sql*` pour les sous-dossiers)
3. **Stratégie** : `latest` (sélection auto du plus récent) ou `interactive` (choisir à chaque fois)

## Prérequis

- Accès SSH au serveur distant (authentification par clé ou mot de passe)
- La recette doit être `prestashop` ou `wordpress`

## Voir aussi

- [Configuration Remote](./configuration.md) - Référence de configuration manuelle
- [Commande Configure](./configure.md) - Configuration interactive (manuelle)
- [Commande Pull](../pull.md) - Récupérer les données depuis le remote
