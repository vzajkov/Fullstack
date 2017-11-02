class AddHoursToDetailedInfo < ActiveRecord::Migration[5.1]
  def change
    add_column :detailed_infos, :sunday_hours, :text, null: false
    add_column :detailed_infos, :monday_hours, :text, null: false
    add_column :detailed_infos, :tuesday_hours, :text, null: false
    add_column :detailed_infos, :wednesday_hours, :text, null: false
    add_column :detailed_infos, :thursday_hours, :text, null: false
    add_column :detailed_infos, :friday_hours, :text, null: false
    add_column :detailed_infos, :saturday_hours, :text, null: false
  end
end
