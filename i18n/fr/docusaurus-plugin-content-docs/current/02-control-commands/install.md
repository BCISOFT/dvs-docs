# dvs install

Installer et activer une licence DVS.

## Description

La commande `install` configure DevSpaces sur votre machine locale. Elle effectue les étapes suivantes :

1. Crée le répertoire de configuration
2. Génère le fichier `wrapper.sh` et l'intègre dans votre configuration shell
3. Installe les scripts de complétion shell
4. Configure l'environnement Docker (crée le réseau, configure les helpers, etc.)
5. Lance la procédure d'onboarding si l'installation est incomplète

## Utilisation

```bash
dvs install
```

## Processus d'onboarding

Si aucune configuration n'est trouvée, la commande lancera une procédure d'onboarding :

1. Génère une paire de clés x25519
2. Initialise une session bootstrap sur le serveur
3. Affiche une URL et un code de claim
4. **Attend jusqu'à 28 minutes** clique sur le lien et se connecte à son compte
5. Récupère et déchiffre les informations de configuration
6. Finalise et active l'installation sur le poste

**Temps d'attente :**
- La session serveur reste valide 30 minutes
- Vous pouvez quitter (Ctrl+C) et relancer si le claim est fait entre temps

## Notes

- Si l'onboarding est annulé, la configuration Docker est toujours complète. Vous pouvez relancer `dvs install` pour terminer l'onboarding.
- La commande nettoie automatiquement les anciennes images dvs après l'installation.

