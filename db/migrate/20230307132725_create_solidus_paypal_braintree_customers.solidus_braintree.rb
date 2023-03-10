# This migration comes from solidus_braintree (originally 20160906201711)
class CreateSolidusPaypalBraintreeCustomers < SolidusSupport::Migration[4.2]
  def change
    create_table :solidus_paypal_braintree_customers do |t|
      t.references :user
      t.string :braintree_customer_id

      t.timestamps
    end

    add_index :solidus_paypal_braintree_customers, :user_id, unique: true, name: "index_braintree_customers_on_user_id"
    add_index :solidus_paypal_braintree_customers, :braintree_customer_id, unique: true, name: "index_braintree_customers_on_braintree_customer_id" # rubocop:disable Layout/LineLength
  end
end
