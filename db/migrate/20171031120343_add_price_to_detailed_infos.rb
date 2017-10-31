class AddPriceToDetailedInfos < ActiveRecord::Migration[5.1]
  def change
    add_column :detailed_infos, :price, :float, null: false
  end
end
