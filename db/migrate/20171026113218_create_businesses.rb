class CreateBusinesses < ActiveRecord::Migration[5.1]
  def change
    create_table :businesses do |t|
      t.float :rating
      t.string :name, null: false
      t.timestamps
    end
  end
end
