# json.businesses do
  @businesses.each do |business|
    json.set! business.id do
      json.set! :name, business.name
      json.set! :rating, business.rating
      json.set! :id, business.id
      json.set! :address, business.address
      json.set! :detailed_info, business.detailed_info
      json.set! :img_url, business.img_url
      # json.review_ids business.reviews.pluck(:id)
      json.set! :reviews, business.reviews
    end
  end
# end

# json.reviews do
#   @businesses.each do |business|
#     business.reviews.each do |review|
#       json.set! review.id, review
#     end
#   end
# end
