define([
    'jquery',
    'underscore',
    'uiComponent',
    'ko',
    'Magento_Checkout/js/model/step-navigator',
    'Magento_Customer/js/model/customer',
    'mage/translate'
], function (
    $,
    _,
    Component,
    ko,
    stepNavigator,
    customer,
    $t
) {
    'use strict';

    return Component.extend({
        isVisible: ko.observable(false),

        /** @inheritdoc */
        initialize: function () {
            this._super();

            stepNavigator.registerStep(
                'login',
                null,
                $t('Customer Login'),
                this.isVisible,
                _.bind(this.navigate, this),
                this.sortOrder
            );

            this.isVisible.subscribe(function (isVisible) {
                if (isVisible) {
                    $('#checkout').addClass('login-step-active');
                } else {
                    $('#checkout').removeClass('login-step-active');
                }
            });

            return this;
        },

        /**
         * Navigator change hash handler.
         *
         * @param {Object} step - navigation step
         */
        navigate: function (step) {
            step && step.isVisible(true);
        },

        /**
         * Navigate to the next step
         */
        proceedWithoutLogin: function () {
            stepNavigator.next();
        }
    });
});
