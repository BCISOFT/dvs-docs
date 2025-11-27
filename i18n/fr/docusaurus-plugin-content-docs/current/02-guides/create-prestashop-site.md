# Créer un site PrestaShop

Ce guide explique comment créer rapidement un site de développement PrestaShop en utilisant la commande `dvs create prestashop`.

## Vue d'ensemble

La commande `dvs create prestashop` vous permet de configurer un environnement PrestaShop complet avec une seule commande. Vous pouvez utiliser du code source existant ou laisser DevSpaces télécharger et installer une version spécifique de PrestaShop.

## Utilisation de base

Naviguez vers votre répertoire de projet et exécutez :

```bash
dvs create prestashop -i <version>
```

L'option `-i` (ou `--install`) est requise pour spécifier la version de PrestaShop à installer.

<!-- TODO: Ajouter une capture d'écran de la commande create prestashop -->

Pour voir toutes les versions PrestaShop disponibles et leurs versions PHP compatibles, utilisez :

```bash
dvs help create prestashop
```

Ou :

```bash
dvs create prestashop --help
```

Cela affichera une matrice montrant les versions PrestaShop et leurs versions PHP recommandées.

<!-- TODO: Ajouter une capture d'écran de la sortie d'aide montrant la matrice des versions -->

## Installation rapide avec options

Pour une configuration plus rapide, vous pouvez spécifier les options directement :

```bash
dvs create prestashop -w 'www' -i 8.2.2 -p 8.1 -l fr -c FR
```

Cette commande va :
- `-w 'www'` : Définir la racine web sur le dossier `www`
- `-i 8.2.2` : Installer PrestaShop version 8.2.2
- `-p 8.1` : Utiliser PHP 8.1
- `-l fr` : Définir la langue par défaut en français
- `-c FR` : Définir le pays par défaut en France

<!-- TODO: Ajouter une capture d'écran de la sortie de la commande pendant l'installation -->

## Options disponibles

### Nom de l'application

Par défaut, le nom de l'application est automatiquement construit à partir du nom du répertoire courant. Vous pouvez remplacer cela en spécifiant un nom personnalisé :

```bash
dvs create prestashop -i 8.2.2 -n mon-prestashop
```

Options :
- `-n, --name` : Nom de l'application (par défaut : nom du répertoire courant)

Le nom de l'application est utilisé pour :
- L'URL du site : `https://<nom-app>.dvs.sh`
- Le nom de la base de données (si non spécifié avec `-D`)
- Le nom d'utilisateur de la base de données (si non spécifié avec `-U`)
- Les noms des conteneurs et configurations

### Racine web

Spécifiez le dossier contenant votre code source PrestaShop :

```bash
dvs create prestashop -i 8.2.2 -w 'www'
```

Options :
- `-w, --web-root` : Dossier contenant le code source, doit être relatif au répertoire actuel (par défaut : `./`)
- Le dossier doit exister. Par défaut, c'est `./`.

### Version PHP

Choisissez la version PHP compatible avec votre version PrestaShop :

```bash
dvs create prestashop -i 8.2.2 -p 8.1
```

Si vous ne spécifiez pas de version PHP avec `-p`, DevSpaces sélectionnera automatiquement la version PHP la plus élevée compatible avec la version PrestaShop que vous installez :
- Par défaut : PHP 7.2 pour PrestaShop 1.7.x
- Par défaut : PHP 8.1 pour PrestaShop 8.x

**Exemples de compatibilité des versions PrestaShop :**
- PrestaShop 1.7.7.x : PHP 7.1, 7.2, 7.3
- PrestaShop 1.7.8.x : PHP 7.1, 7.2, 7.3, 7.4
- PrestaShop 8.0.x : PHP 7.2, 7.3, 7.4, 8.0, 8.1
- PrestaShop 8.1.x : PHP 7.2, 7.3, 7.4, 8.0, 8.1
- PrestaShop 8.2.x : PHP 7.2, 7.3, 7.4, 8.0, 8.1

Pour voir la matrice de compatibilité complète pour toutes les versions, utilisez `dvs help create prestashop`.

### Version PrestaShop

Installez automatiquement une version spécifique de PrestaShop :

```bash
dvs create prestashop -i 8.2.2
```

L'option `-i` (ou `--install`) est requise lors de la création d'une nouvelle installation PrestaShop. Pour voir toutes les versions disponibles et leur compatibilité PHP :

```bash
dvs help create prestashop
```

Ou :

```bash
dvs create prestashop --help
```

<!-- TODO: Ajouter une capture d'écran de la liste des versions disponibles -->

### Langue et pays

Définissez la langue et le pays par défaut pour l'installation :

```bash
dvs create prestashop -i 8.2.2 -l fr -c FR
```

Options :
- `-l, --lang` : Changer la langue par défaut installée avec PrestaShop (par défaut : `en`)
- `-c, --country` : Changer le pays par défaut installé avec PrestaShop (par défaut : `GB`)

### Configuration de la base de données

Par défaut, DevSpaces va :
- Utiliser le premier service SQL installé (ou `mysql` si aucun n'est installé)
- Créer une base de données avec le nom de l'application
- Créer un utilisateur avec le nom de l'application
- Générer le mot de passe automatiquement

Vous pouvez remplacer ces valeurs par défaut :

```bash
dvs create prestashop -i 8.2.2 -H mysql -D ma_base -U mon_utilisateur -P mon_mot_de_passe
```

Options :
- `-H, --sql-host` : Nom du service SQL à utiliser (par défaut : premier service SQL trouvé, ou `mysql`)
- `-D, --sql-dbname` : Nom de la base de données MySQL (par défaut : nom de l'application)
- `-U, --sql-user` : Nom d'utilisateur MySQL (par défaut : nom de l'application)
- `-P, --sql-pass` : Mot de passe MySQL (par défaut : généré automatiquement)

## Après la création

Une fois le site créé, la commande affichera les informations d'accès au panneau d'administration, incluant :
- URL du panneau d'administration : `https://<nom-app>.dvs.sh/adminXXXX`
- Identifiants du compte administrateur (email et mot de passe)

<!-- TODO: Ajouter une capture d'écran de la sortie de la commande montrant les identifiants admin -->

Vous pouvez ensuite :

- Accéder à votre site à `https://<nom-app>.dvs.sh`
- Accéder au panneau d'administration en utilisant les identifiants affichés
- Voir les informations de l'application avec `dvs info`

<!-- TODO: Ajouter une capture d'écran de la sortie de dvs info -->

### Gérer les comptes administrateurs

Pour gérer les comptes employés/administrateurs :

- **Lister tous les employés** : Utilisez `dvs employee-list` pour voir tous les comptes employés enregistrés
- **Changer le mot de passe d'un employé** : Utilisez `dvs employee-password <email|id> <mot-de-passe>` pour mettre à jour le mot de passe d'un employé

Pour plus de détails, consultez la documentation des commandes [employee-list](/docs/recipes/prestashop/employee-list) et [employee-password](/docs/recipes/prestashop/employee-password).

## Prochaines étapes

- Apprenez à [configurer le proxy d'image](/docs/guides/setup-prestashop-image-proxy)
- Apprenez à [accéder à Mailpit](/docs/guides/access-mailpit) pour voir les emails
- Apprenez à [utiliser phpMyAdmin](/docs/guides/use-phpmyadmin) pour gérer votre base de données

