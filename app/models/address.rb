class Address < ApplicationRecord

  belongs_to :business,
    primary_key: :id,
    foreign_key: :business_id,
    class_name: 'Business'
end
