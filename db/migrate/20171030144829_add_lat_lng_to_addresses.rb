class AddLatLngToAddresses < ActiveRecord::Migration[5.1]
  def change
    add_column :addresses, :lat, :float, null: false
    add_column :addresses, :lng, :float, null: false
  end
end
