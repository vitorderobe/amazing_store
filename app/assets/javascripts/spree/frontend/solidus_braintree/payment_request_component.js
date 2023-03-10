//= require spree/frontend/solidus_braintree/constants

/**
 * Constructor for PaymentRequestComponent button object
 * @constructor
 * @param {object} element - The DOM element of your PaymentRequestComponent button
 */
SolidusBraintree.PaymentRequestComponent = function (
  element,
  paymentRequestComponentOptions
) {
  this._element = element;
  this._client = null;
  this._paymentRequestComponentOptions = paymentRequestComponentOptions || {};

  if (!this._element) {
    throw new Error(
      "Element for the PaymentRequestComponent button must be present on the page"
    );
  }
};

/**
 * Creates the PaymentRequestComponent session using the provided options and enables the button
 *
 * @param {object} options - The options passed to tokenize when constructing
 *                           the PaymentRequestComponent instance
 *
 * See {@link https://braintree.github.io/braintree-web/current/module-braintree-web_payment-request.html#.create}
 */
SolidusBraintree.PaymentRequestComponent.prototype.initialize = function () {
  this._client = new SolidusBraintree.createClient({});

  return this._client.initialize().then(this.initializeCallback.bind(this));
};

SolidusBraintree.PaymentRequestComponent.prototype.initializeCallback = function () {
  this._paymentRequestComponentInstance = this._client.getPaymentRequestComponentInstance();
  this._element.classList.add("visible");
  var paymentDetails = {
    displayItems: [{
      label: 'Anvil L/S Crew Neck - Grey M x1',
      amount: { currency: 'USD', value: '10.00' }
    }],
    total: {
      label: 'Total',
      amount: {
        currency: 'USD',
        value: '10.00',
      }
    }
  };
  this._element.addEventListener(
    "click",
    function (event) {
      event.preventDefault();
      this._element.disabled = true;
      // this._paymentRequestComponentInstance.canMakePayment({details: paymentDetails}).then(function (result) {
      //   if (result) x{
      //     console.log('result', result);
      //   } else {
      //     console.log('can make paymment', result)
      //   }
      // })
      this._paymentRequestComponentInstance.tokenize({details: paymentDetails})
    }.bind(this),
    false
  );
};

function handleSuccess(payload) {
  console.log('success', payload);
  // var $paymentForm = $("#checkout_form_payment");
  // var $nonceField = $("#payment-request-component-nonce", $paymentForm);

  // // Disable hostedFields' and enable Venmo's inputs as they use the same fields.
  // // Otherwise, they will clash. (Disabled inputs are not used on form submission)
  // $(".hosted-fields input").each(function (_index, input) {
  //   input.disabled = true;
  // });
  // $(".venmo-fields input").each(function (_index, input) {
  //   input.removeAttribute("disabled");
  // });

  // // remove hostedFields submit listener, otherwise empty credit card errors occur
  // $paymentForm.off("submit");

  // $nonceField.val(payload.nonce);
  // $paymentForm.submit();
}

function handleError(error) {
  console.log('error', error);
  SolidusBraintree.config.braintreeErrorHandle(error);
}
