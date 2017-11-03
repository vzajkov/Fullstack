 class Api::BusinessesController < ApplicationController

  def index

    @businesses = Business.all

    @businesses = Business.joins(:detailed_info)
    
    if params[:name] && params[:name] != ""
      @businesses = @businesses.search_for(params[:name])
    end

    if params[:takeout] == "true"
      @businesses = @businesses.where(:detailed_infos => {:takeout => params[:takeout]})
    end

    if params[:wifi] == "true"
      @businesses = @businesses.where(:detailed_infos => {:wifi => params[:wifi]})
    end

    if params[:parking] == "true"
      @businesses = @businesses.where(:detailed_infos => {:parking => params[:parking]})
    end

    if params[:smoking] == "true"
      @businesses = @businesses.where(:detailed_infos => {:smoking => params[:smoking]})
    end

    if params.values_at(:smoking, :wifi, :parking, :takeout).all? {|v| v.nil?}
      @businesses = Business.all
    end

    price_params = params.keys.select {|k| params[k] == "true" && ["d","dd","ddd","dddd"].include?(k)}
    if !price_params.empty?
      @businesses = @businesses.where(:detailed_infos => {:price => price_params})
    end

    render 'businesses/index'
  end

  def show
    @business = Business.find_by(id: params[:id])
  end


end
