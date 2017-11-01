class Api::ReviewsController < ApplicationController

  def create
    @review = Review.new(review_params)
    if @review.save
      render '/businesses/show'
    else
      render json: ["Unable to post review!"], status: 422
    end
  end

  def destroy
    review = Review.find(params[:id])
    review.destroy!
  end

  def edit
    review = Review.find(params[:id])
  end

  private

  def review_params
    params.require(:review).permit(:rating, :body)
  end
end
