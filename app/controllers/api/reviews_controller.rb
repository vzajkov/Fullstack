class Api::ReviewsController < ApplicationController

  def create
    @review = Review.new(review_params)
    if @review.save
      # render '/businesses/show'
    else
      render json: ["Unable to post review!"], status: 422
    end
  end

  def destroy
    review = Review.find(params[:id])
    review.destroy!
  end

  def update
    @review = Review.find(params[:review][:id])
    if @review.update_attributes(review_params)
    else
      render json: ["could not update review!"], status: 422
    end
  end

  private

  def review_params
    params.require(:review).permit(:author_id, :rating, :body, :business_id, :username)
  end
end
