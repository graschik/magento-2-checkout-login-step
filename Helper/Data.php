<?php
declare(strict_types=1);

namespace Grasch\CheckoutLoginStep\Helper;

use Magento\Framework\App\Helper\AbstractHelper;
use Magento\Store\Model\ScopeInterface;

class Data extends AbstractHelper
{
    public const IS_LOGIN_STEP_ENABLED = 'checkout/options/login_step/is_enabled';

    /**
     * Check if module is enabled
     *
     * @return bool
     */
    public function isEnabled(): bool
    {
        return $this->scopeConfig->isSetFlag(
            self::IS_LOGIN_STEP_ENABLED,
            ScopeInterface::SCOPE_STORES
        );
    }
}
