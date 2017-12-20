 class Api::BusinessesController < ApplicationController

  def index

    # @businesses = Business.all

    @businesses = Business.includes(:detailed_info, :address, :reviews)
    #Template referenced from "Implementing Full Text Search in Rails with Postgres", by Ryan Stenberg
    if params[:name] && params[:name] != ""
      @businesses = @businesses.search_for(params[:name])
    end
    #End of template reference


    if params[:takeout] == "true"
      @businesses = @businesses.where(:detailed_infos => {:takeout => params[:takeout]}).includes(:detailed_info, :address, :reviews)
    end

    if params[:wifi] == "true"
      @businesses = @businesses.where(:detailed_infos => {:wifi => params[:wifi]}).includes(:detailed_info, :address, :reviews)
    end

    if params[:parking] == "true"
      @businesses = @businesses.where(:detailed_infos => {:parking => params[:parking]}).includes(:detailed_info, :address, :reviews)
    end

    if params[:smoking] == "true"
      @businesses = @businesses.where(:detailed_infos => {:smoking => params[:smoking]}).includes(:detailed_info, :address, :reviews)
    end

    if params.values_at(:smoking, :wifi, :parking, :takeout).all? {|v| v.nil?}
      @businesses = Business.all.includes(:detailed_info, :address, :reviews)
    end

    price_params = params.keys.select {|k| params[k] == "true" && ["d","dd","ddd","dddd"].include?(k)}
    if !price_params.empty?
      @businesses = @businesses.where(:detailed_infos => {:price => price_params}).includes(:detailed_info, :address, :reviews)
    end

    render 'businesses/index'
  end

  def show
    @business = Business.find_by(id: params[:id])
  end

end
