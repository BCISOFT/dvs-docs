# dvs install

Installer et activer une licence DVS.

## Description

La commande `install` configure DevSpaces sur votre machine locale. Elle effectue les étapes suivantes :

1. Crée le répertoire de configuration (`~/.config/devspaces/`)
2. Génère le fichier `wrapper.sh` et l'intègre dans votre configuration shell
3. Installe les scripts de complétion shell
4. Vérifie et assure la version correcte de l'image admin
5. Configure l'environnement Docker (crée le réseau, configure les helpers, etc.)
6. Lance la procédure d'onboarding si aucune configuration n'existe

## Utilisation

```bash
dvs install
```

## Processus d'onboarding

Si aucune configuration n'est trouvée, la commande lancera une procédure d'onboarding :

1. Génère une paire de clés x25519
2. Initialise une session bootstrap sur le serveur
3. Affiche une URL et un code de claim
4. **Attend jusqu'à 28 minutes** qu'un manager réclame le device
5. Récupère et déchiffre le payload scellé
6. Sauvegarde la configuration dans `~/.config/devspaces/`

**Temps d'attente :**
- Polling toutes les 3 secondes
- Maximum 28 minutes d'attente
- La session serveur reste valide 30 minutes
- Vous pouvez quitter (Ctrl+C) et relancer si le claim est fait entre temps

## Variables d'environnement

- `DVS_API_URL` - URL de l'API DevSpaces (par défaut : `https://devspaces.cloud`)

## Exemples

```bash
# Installation standard
dvs install

# Installation avec API locale
DVS_API_URL=http://localhost:8000 dvs install
```

## Notes

- Si l'onboarding est annulé, la configuration Docker est toujours complète. Vous pouvez relancer `dvs install` pour terminer l'onboarding.
- La commande nettoie automatiquement les anciennes images dvsctl après l'installation.

