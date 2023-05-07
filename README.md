# TYPO3 Vite AssetCollector Demo

This project demonstrates the use of the [Vite AssetCollector extension](https://github.com/s2b/vite-asset-collector).

- TYPO3 12
- PHP 8.1
- MariaDB 10.3

## Requirements

- DDEV

## Quick Installation Guide

```bash
git clone [...].git
cd typo3-vite-asset-collector-demo
```

```bash
ddev start
ddev composer install
ddev exec cp .env.example .env
ddev snapshot restore --latest
```

## Test the production build

```bash
ddev pnpm build
```

Switch applicationContext to production in _.env_ (or in .ddev/config.yaml under web_environment)

```
# TYPO3_CONTEXT="Development"
TYPO3_CONTEXT="Production"
```