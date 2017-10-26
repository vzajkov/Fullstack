class Business < ApplicationRecord

  has_one :address,
    primary_key: :id,
    foreign_key: :business_id,
    class_name: 'Address' 
end
