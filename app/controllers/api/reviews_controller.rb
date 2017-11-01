class Api::ReviewsController < ApplicationController

  def create
    debugger
    @review = Review.new(review_params)
    debugger
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
    review = Review.find(params[:id])
  end

  private

  def review_params
    params.require(:review).permit(:author_id, :rating, :body, :business_id,)
  end
end
