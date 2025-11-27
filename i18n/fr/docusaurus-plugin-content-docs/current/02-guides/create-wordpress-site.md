# Créer un site WordPress

Ce guide explique comment créer rapidement un site de développement WordPress en utilisant la commande `dvs create wordpress`.

## Vue d'ensemble

La commande `dvs create wordpress` vous permet de configurer un environnement WordPress complet avec une seule commande. Vous pouvez utiliser du code source existant ou laisser DevSpaces télécharger et installer une version spécifique de WordPress.

## Utilisation de base

Naviguez vers votre répertoire de projet et exécutez :

```bash
dvs create wordpress -i <version>
```

L'option `-i` (ou `--install`) est requise pour spécifier la version de WordPress à installer.

<!-- TODO: Ajouter une capture d'écran de la commande create wordpress -->

Pour voir toutes les versions WordPress disponibles et leurs versions PHP compatibles, utilisez :

```bash
dvs help create wordpress
```

Ou :

```bash
dvs create wordpress --help
```

Cela affichera une matrice montrant les versions WordPress et leurs versions PHP recommandées.

<!-- TODO: Ajouter une capture d'écran de la sortie d'aide montrant la matrice des versions -->

## Installation rapide avec options

Pour une configuration plus rapide, vous pouvez spécifier les options directement :

```bash
dvs create wordpress -w 'www' -i 6.4 -p 8.1 -l fr_FR
```

Cette commande va :
- `-w 'www'` : Définir la racine web sur le dossier `www`
- `-i 6.4` : Installer WordPress version 6.4
- `-p 8.1` : Utiliser PHP 8.1
- `-l fr_FR` : Définir la locale en français

<!-- TODO: Ajouter une capture d'écran de la sortie de la commande pendant l'installation -->

## Options disponibles

### Nom de l'application

Par défaut, le nom de l'application est automatiquement construit à partir du nom du répertoire courant. Vous pouvez remplacer cela en spécifiant un nom personnalisé :

```bash
dvs create wordpress -i 6.4 -n mon-wordpress
```

Options :
- `-n, --name` : Nom de l'application (par défaut : nom du répertoire courant)

Le nom de l'application est utilisé pour :
- L'URL du site : `https://<nom-app>.dvs.sh`
- Le nom de la base de données (si non spécifié avec `-D`)
- Le nom d'utilisateur de la base de données (si non spécifié avec `-U`)
- Les noms des conteneurs et configurations

### Racine web

Spécifiez le dossier contenant votre code source WordPress :

```bash
dvs create wordpress -i 6.4 -w 'www'
```

Options :
- `-w, --web-root` : Dossier contenant le code source, doit être relatif au répertoire actuel (par défaut : `./`)
- Le dossier doit exister. Par défaut, c'est `./`.

### Version PHP

Choisissez la version PHP compatible avec votre version WordPress :

```bash
dvs create wordpress -i 6.4 -p 8.1
```

Si vous ne spécifiez pas de version PHP avec `-p`, DevSpaces sélectionnera automatiquement la version PHP la plus élevée compatible avec la version WordPress que vous installez.

WordPress fonctionne généralement avec PHP 7.4 et supérieur. Pour voir la matrice de compatibilité complète pour toutes les versions, utilisez `dvs help create wordpress`.

### Version WordPress

Installez automatiquement une version spécifique de WordPress :

```bash
dvs create wordpress -i 6.4
```

L'option `-i` (ou `--install`) est requise lors de la création d'une nouvelle installation WordPress. Pour voir toutes les versions disponibles et leur compatibilité PHP :

```bash
dvs help create wordpress
```

Ou :

```bash
dvs create wordpress --help
```

<!-- TODO: Ajouter une capture d'écran de la liste des versions disponibles -->

### Locale

Définissez la locale pour l'installation WordPress :

```bash
dvs create wordpress -i 6.4 -l fr_FR
```

Options :
- `-l, --locale` : Changer la locale par défaut installée (par défaut : `en_US`)

Locales courantes :
- `en_US` - Anglais (États-Unis)
- `fr_FR` - Français
- `de_DE` - Allemand
- `es_ES` - Espagnol

### Configuration de la base de données

Par défaut, DevSpaces va :
- Utiliser le premier service SQL installé (ou `mysql` si aucun n'est installé)
- Créer une base de données avec le nom de l'application
- Créer un utilisateur avec le nom de l'application
- Générer le mot de passe automatiquement

Vous pouvez remplacer ces valeurs par défaut :

```bash
dvs create wordpress -i 6.4 -H mysql -D ma_base -U mon_utilisateur -P mon_mot_de_passe
```

Options :
- `-H, --sql-host` : Nom du service SQL à utiliser (par défaut : premier service SQL trouvé, ou `mysql`)
- `-D, --sql-dbname` : Nom de la base de données MySQL (par défaut : nom de l'application)
- `-U, --sql-user` : Nom d'utilisateur MySQL (par défaut : nom de l'application)
- `-P, --sql-pass` : Mot de passe MySQL (par défaut : généré automatiquement)

## Installation automatique

Lorsque vous spécifiez l'option `-i` avec un numéro de version, DevSpaces va :

1. Télécharger la version WordPress spécifiée
2. L'extraire dans le répertoire racine web
3. Créer le fichier `wp-config.php`
4. Exécuter l'installation WordPress
5. Créer un utilisateur administrateur avec des identifiants

Après l'installation, vous verrez les identifiants administrateur :

```
https://<nom-app>.dvs.sh/wp-admin
  user: <nom-app>@<domaine>
  pass: <mot-de-passe-généré>
```

<!-- TODO: Ajouter une capture d'écran de la fin de l'installation avec les identifiants -->

## Après la création

Une fois le site créé, la commande affichera les informations d'accès au panneau d'administration, incluant :
- URL du panneau d'administration : `https://<nom-app>.dvs.sh/wp-admin`
- Identifiants du compte administrateur (email et mot de passe)

<!-- TODO: Ajouter une capture d'écran de la sortie de la commande montrant les identifiants admin -->

Vous pouvez ensuite :

- Accéder à votre site à `https://<nom-app>.dvs.sh`
- Accéder au panneau d'administration en utilisant les identifiants affichés
- Voir les informations de l'application avec `dvs info`

<!-- TODO: Ajouter une capture d'écran de la sortie de dvs info -->

### Gérer les comptes utilisateurs

Pour gérer les comptes utilisateurs/administrateurs :

- **Lister tous les utilisateurs** : Utilisez `dvs user-list` pour voir tous les comptes utilisateurs enregistrés
- **Changer le mot de passe d'un utilisateur** : Utilisez `dvs user-password <email|id> <mot-de-passe>` pour mettre à jour le mot de passe d'un utilisateur

Pour plus de détails, consultez la documentation des commandes [user-list](/docs/recipes/wordpress/user-list) et [user-password](/docs/recipes/wordpress/user-password).

## Utiliser WP-CLI

DevSpaces fournit un raccourci pour les commandes WP-CLI :

```bash
dvs wp <commande>
```

Par exemple :

```bash
# Lister tous les plugins
dvs wp plugin list

# Installer un plugin
dvs wp plugin install akismet

# Mettre à jour le cœur WordPress
dvs wp core update
```

<!-- TODO: Ajouter une capture d'écran de la sortie de la commande wp-cli -->

## Prochaines étapes

- Apprenez à [accéder à Mailpit](/docs/guides/access-mailpit) pour voir les emails
- Apprenez à [utiliser phpMyAdmin](/docs/guides/use-phpmyadmin) pour gérer votre base de données
- Apprenez à [créer un tunnel partagé](/docs/guides/create-shared-tunnel) pour partager votre site

