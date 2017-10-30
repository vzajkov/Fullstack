class AddImgUrlToBusinesses < ActiveRecord::Migration[5.1]
  def change
    add_column :businesses, :img_url, :string, null: false
  end
end
