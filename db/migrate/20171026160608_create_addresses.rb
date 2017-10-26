class CreateAddresses < ActiveRecord::Migration[5.1]
  def change
    create_table :addresses do |t|
      t.string :street, null: false
      t.string :town, null: false
      t.string :state, null: false
      t.string :country, null: false
      t.timestamps
    end
  end
end
