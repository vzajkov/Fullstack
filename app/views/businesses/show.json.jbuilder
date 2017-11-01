
json.set! @business.id do
  json.set! @business.name
  json.set! @business.address
  json.set! @business.rating
  json.set! @business.id
  json.set! @business.detailed_info
  json.set! @business.img_url
  json.set! @business.reviews
  # json.array! @business.reviews, :id do
  #   json.review_ids business.reviews.pluck(:id)
  # end
end

# json.reviews do
#   @business.reviews.each do |review|
#     json.set! review.id review
#   end
# end
