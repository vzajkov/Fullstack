class EditAddresses < ActiveRecord::Migration[5.1]
  def change
    add_column :addresses, :business_id, :integer, null: false
  end
end
