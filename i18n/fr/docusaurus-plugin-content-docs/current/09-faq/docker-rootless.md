# Docker Rootless

## État actuel

DevSpaces **n'est actuellement pas testé** avec le mode Docker rootless.

## Qu'est-ce que Docker Rootless ?

Le mode Docker rootless permet d'exécuter le démon Docker et les conteneurs en tant qu'utilisateur non root, offrant une sécurité renforcée en évitant le besoin de privilèges root.

## Compatibilité

Bien que DevSpaces puisse fonctionner avec Docker rootless dans certains scénarios, il n'a pas été testé ou validé dans cette configuration. Vous pouvez rencontrer :

- Des problèmes de permissions avec l'accès au socket Docker
- Des problèmes de configuration réseau
- Des problèmes de montage de volumes
- Des échecs de démarrage de services

## Recommandations

Pour la meilleure expérience et le meilleur support, nous recommandons d'utiliser Docker en mode standard (root). Si vous avez besoin de Docker rootless pour des raisons de sécurité, veuillez noter que :

- Le fonctionnement de DevSpaces n'est pas garanti
- Les problèmes rencontrés peuvent ne pas être pris en charge
- Certaines fonctionnalités peuvent ne pas fonctionner comme prévu

## Support futur

Le support du mode Docker rootless peut être ajouté dans les versions futures. Si vous avez besoin de cette fonctionnalité, veuillez contacter notre équipe de support.

