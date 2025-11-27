# Windows WSL2

Cette page couvre les considérations spécifiques lors de l'utilisation de DevSpaces sur Windows avec WSL2.

## Performance

### Performance du système de fichiers

Lorsque vous travaillez avec WSL2, les performances du système de fichiers peuvent être impactées lors de l'accès aux fichiers Windows depuis WSL2. Pour des performances optimales :

- **Stockez vos fichiers de projet dans le système de fichiers WSL2** (`/home/username/projects/`) plutôt que dans le système de fichiers Windows (`/mnt/c/...`)
- Le système de fichiers WSL2 (`ext4`) offre des performances I/O nettement meilleures que l'accès aux fichiers Windows via `/mnt/c/`
- Les volumes Docker doivent également être stockés dans le système de fichiers WSL2 lorsque c'est possible

### Allocation mémoire et CPU

WSL2 utilise une machine virtuelle avec des ressources configurables :

- Éditez `.wslconfig` dans votre répertoire utilisateur Windows (`C:\Users\<username>\.wslconfig`)
- Configurez les limites de mémoire et de CPU :

```ini
[wsl2]
memory=8GB
processors=4
```

Redémarrez WSL2 après avoir effectué les modifications :

```bash
wsl --shutdown
```

### Paramètres Docker Desktop

Si vous utilisez Docker Desktop sur Windows :

- Assurez-vous que l'intégration WSL2 est activée dans les paramètres de Docker Desktop
- Allouez suffisamment de ressources à Docker Desktop (Paramètres → Ressources)
- Envisagez d'utiliser Docker directement dans WSL2 au lieu de Docker Desktop pour de meilleures performances

## Droits

### Permissions de fichiers

Lors de l'accès aux fichiers depuis Windows (`/mnt/c/...`), notez que :

- Les permissions de fichiers peuvent différer des fichiers Linux natifs
- Certaines opérations peuvent nécessiter des permissions élevées
- Il est recommandé de travailler dans le système de fichiers WSL2 (`/home/...`) pour éviter les problèmes de permissions

Pour les problèmes de permissions généraux, consultez la page [Permissions](/docs/08-faq/permissions).

### Pare-feu Windows et antivirus

Windows Defender ou d'autres logiciels antivirus peuvent interférer avec le réseau WSL2 :

- Ajoutez les interfaces réseau WSL2 aux exceptions du pare-feu si nécessaire
- Envisagez d'exclure les répertoires WSL2 de l'analyse en temps réel de l'antivirus pour de meilleures performances

## Git

### Changements de mode de fichiers

Lorsque vous travaillez avec des dépôts Git dans WSL2 qui sont également accessibles depuis Windows, vous pouvez rencontrer des changements de mode de fichiers dans Git :

```
old mode 100755
new mode 100644
```

Cela se produit car Windows et WSL2 gèrent les permissions de fichiers différemment. Pour empêcher Git de suivre ces changements de permissions, désactivez le suivi du mode de fichiers :

```bash
git config core.filemode false
```

Ce paramètre s'applique au dépôt actuel. Pour le définir globalement pour tous les dépôts :

```bash
git config --global core.filemode false
```

