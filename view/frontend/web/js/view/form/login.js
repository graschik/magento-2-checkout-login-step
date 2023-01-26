define([
    'jquery',
    'uiComponent',
    'ko',
    'Magento_Customer/js/action/login',
    'Magento_Checkout/js/model/full-screen-loader',
    'mage/validation'
], function ($, Component, ko, loginAction, fullScreenLoader) {
    'use strict';

    return Component.extend({
        defaults: {
            isLoading: false,
            isPasswordVisible: false,
            listens: {
                emailFocused: 'validateEmail'
            },
            ignoreTmpls: {
                email: true
            }
        },
        forgotPasswordUrl: window.checkoutConfig.forgotPasswordUrl,

        /**
         * Initializes observable properties of instance
         *
         * @returns {Object} Chainable.
         */
        initObservable: function () {
            this._super()
                .observe(['email', 'emailFocused']);

            return this;
        },

        /**
         * Local email validation.
         *
         * @param {Boolean} focused - input focus.
         * @returns {Boolean} - validation result.
         */
        validateEmail: function (focused) {
            var loginFormSelector = 'form[data-role=email-with-login]',
                usernameSelector = loginFormSelector + ' input[name=username]',
                loginForm = $(loginFormSelector),
                validator,
                valid;

            loginForm.validation();

            if (focused === false && !!this.email()) {
                valid = !!$(usernameSelector).valid();

                if (valid) {
                    $(usernameSelector).removeAttr('aria-invalid aria-describedby');
                }

                return valid;
            }

            validator = loginForm.validate();

            return validator.check(usernameSelector);
        },

        /**
         * Log in form submitting callback.
         *
         * @param {HTMLElement} loginForm - form element.
         */
        login: function (loginForm) {
            var loginData = {},
                formDataArray = $(loginForm).serializeArray();

            formDataArray.forEach(function (entry) {
                loginData[entry.name] = entry.value;
            });

            if ($(loginForm).validation() && $(loginForm).validation('isValid')) {
                fullScreenLoader.startLoader();
                loginAction(loginData, window.location.href.split("#")[0]).always(function () {
                    fullScreenLoader.stopLoader();
                });
            }
        }
    });
});
