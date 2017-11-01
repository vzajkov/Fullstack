class Review < ApplicationRecord
  belongs_to :business,
    primary_key: :id,
    foreign_key: :business_id,
    class_name: 'Business'

  belongs_to :user,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User'

end
