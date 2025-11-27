# Permissions

Cette page couvre les problèmes de permissions courants et comment les résoudre lors de l'utilisation de DevSpaces.

## Permissions utilisateur

DevSpaces nécessite que votre utilisateur ait les permissions nécessaires pour exécuter les commandes Docker.

### Ajouter l'utilisateur au groupe Docker

Sur les systèmes Linux (y compris WSL2), ajoutez votre utilisateur au groupe `docker` :

```bash
sudo usermod -aG docker $USER
```

Déconnectez-vous et reconnectez-vous pour que les modifications prennent effet.

## Accès au socket Docker

Si vous rencontrez des erreurs de permission avec Docker :

```bash
sudo chmod 666 /var/run/docker.sock
```

Pour une solution permanente, assurez-vous que votre utilisateur est dans le groupe `docker` (voir ci-dessus).

## Permissions de fichiers

### Considérations générales

- Assurez-vous d'avoir les permissions de lecture/écriture sur vos répertoires de projet
- Certaines opérations peuvent nécessiter des permissions élevées selon la configuration de votre système
- Vérifiez la propriété des fichiers si vous rencontrez des erreurs de permission :

```bash
ls -la /path/to/project
```

### Spécifique à WSL2

Lors de l'utilisation de WSL2, consultez la page [Windows WSL2](/docs/08-faq/windows-wsl2) pour les considérations spécifiques sur les permissions de fichiers lors de l'accès aux fichiers Windows.

