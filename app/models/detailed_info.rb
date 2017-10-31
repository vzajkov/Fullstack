class DetailedInfo < ApplicationRecord
    belongs_to :business,
      primary_key: :id,
      foreign_key: :business_id,
      class_name: 'Business'

  enum price: [:d, :dd, :ddd, :dddd]
end
