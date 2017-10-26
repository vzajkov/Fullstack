class Api::BusinessesController < ApplicationController

  def index
    @businesses = Business.all
    render 'businesses/index'
  end

  def show
    @business = Business.find_by(id: params[:id])
  end
end
