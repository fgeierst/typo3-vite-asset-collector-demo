# Playground TYPO3 12 TYPO3 repository

- TYPO3 12.2
- PHP 8.1
- MySQL 8 (DDEV Local: MariaDB 10.3)

## 🔧 Requirements

* DDEV
* ...

## 🚀 Quick Installation Guide

[ We use multiple shell blocks to make them clickable in PHPStorm ]
```bash
git clone git@bitbucket.org:pluswerk/dummy-project.git
cd dummy-project
```

```bash
ddev start
ddev auth ssh
ddev composer install
ddev npm install
ddev npm run build

...
```

[ Add `--no-fs` if fileadmin is too big ]
```bash
ddev phpsu sync s
```

```bash
ddev typo3cms database:updateschema safe
```

## 🗃️ Download Database and Files

Make sure that you have SSH access to the server via pubkey   
Add `--no-fs` for only database or `--no-db` for fileadmin sync

**From staging**
```bash
ddev phpsu sync s
```

**From production**
```bash
ddev phpsu sync p
```

## 🍱 Assets

### CSS

Source: `packages/example_package/Resources/Private/Scss`   
Compiled files: `packages/example_package/Resources/Public/Css`

[In case of scss is compiled in TYPO3 write this information here]

**Compile all files**
```bash
ddev npm run build
```

**Watch files for changes**
```bash
ddev npm run watch
```

### JavaScript

Source: `packages/example_package/Resources/Private/Javascript`   
Compiled files: `packages/example_package/Resources/Public/Javascript`

```bash
ddev npm run build
```

### SVG Sprites

```bash
ddev npm run sprites
```

### [Add any other additional asset related information here]

## 🧪 Testing

### Execute all GrumPHP tasks

```bash
ddev grumphp run 
```

**Run phpstan alone**
```bash
ddev grumphp run --tasks phpstan
```

### Unit testing

**Run unit tests**
```bash
ddev phpunit
```

**Run functional tests**
```bash
ddev phpunit -c phpunit_functional.xml
```

### Linting with ESLint and Stylelint

**Lint both JS and CSS**
```bash
ddev npm run lint
```

**Lint only JS**
```bash
ddev npm run lint:js
```

**Lint only CSS**
```bash
ddev npm run lint:css
```

**Automatically fix problems reported by rules, where possible**
```bash
ddev npm run lint:js -- --fix
```

```bash
ddev npm run lint:css -- --fix
```

## 📝 MISC

Add here:
* More detailed information for development
* Newly introduced with this project and needs description
