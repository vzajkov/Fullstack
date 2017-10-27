class CreateDetailedInfos < ActiveRecord::Migration[5.1]
  def change
    create_table :detailed_infos do |t|
      t.boolean :wifi, null: false
      t.boolean :parking, null: false
      t.boolean :smoking, null: false
      t.boolean :takeout, null: false
      t.integer :business_id, null: false
      t.timestamps
    end
  end
end
