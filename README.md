<h1 align="center">grasch/magento-2-checkout-login-step</h1>

<div align="center">
  <img src="https://img.shields.io/badge/magento-2.X-brightgreen.svg?logo=magento&longCache=true" alt="Supported Magento Versions" />
  <a href="https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity" target="_blank"><img src="https://img.shields.io/badge/maintained%3F-yes-brightgreen.svg" alt="Maintained - Yes" /></a>
</div>

## Highlight features for module
- <h3>You can add the login step on the checkout page.</h3>
 <img alt="Settings" src="docs/img/login-step.png" width="60%">

## How to install module?

### ✓ Install via composer (recommend)

Run the following commands in Magento 2 root folder:

```
composer require grasch/module-checkout-login-step
php bin/magento setup:upgrade
php bin/magento setup:static-content:deploy
```
### ✓ Install via downloading

Download and copy files into `app/code/Grasch/CheckoutLoginStep` and run the following commands:
```
php bin/magento setup:upgrade
php bin/magento setup:static-content:deploy
```

## How to configure?
- Go to Stores -> Configuration -> Sales -> Checkout -> Checkout Options -> Login Step Config.
- Enable the module.

## The MIT License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

