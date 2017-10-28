class Api::BusinessesController < ApplicationController

  def index
    @businesses = Business.all

    if params[:smoking_bool]
      # @businesses = @businesses.where(detailed_info.smoking: params[:smoking_bool])
    end

    if params[:wifi_bool]
      # @businesses = @businesses.where(detailed_info.wifi: params[:wifi_bool])
    end

    if params[:parking_bool]
      # @businesses = @businesses.where(detailed_info.parking: params[:parking_bool])
    end

    if params[:takeout_bool]
      # @businesses = @businesses.where(detailed_info.takeout: params[takeout_bool])
    end

    render 'businesses/index'
  end

  def show
    @business = Business.find_by(id: params[:id])
  end

  private



end
