# Recipes

## Description

Recipes are ready-to-use Docker images containing a set of features tailored to the target application. A recipe image can be based on another recipe and automatically inherits the associated features. For example, the `Prestashop` recipe is built on top of the `LAMP` recipe, so all `LAMP` commands are accessible in the `Prestashop` recipe.
A recipe's documentation only lists specific commands; refer to the base recipe for more information on additional commands.

## Recipes

- **[lamp](lamp)** - Generic LAMP application
- **[lamp-framework](lamp-framework)** - LAMP application based on a framework
- **[prestashop](prestashop)** - Prestashop application
- **[wordpress](wordpress)** - WordPress application
