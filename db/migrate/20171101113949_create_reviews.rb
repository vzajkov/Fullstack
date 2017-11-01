class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.integer :rating, null:false
      t.text :body, null:false
      t.integer :author_id, null:false
      t.integer :business_id, null:false
      t.timestamps
    end
  end
end
