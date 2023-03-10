# This migration comes from solidus_braintree (originally 20170203191030)
class AddCreditCardToBraintreeConfiguration < SolidusSupport::Migration[4.2]
  def change
    add_column :solidus_paypal_braintree_configurations, :credit_card,
      :boolean, null: false, default: false
  end
end
