 class Api::BusinessesController < ApplicationController

  def index
    @businesses = Business.all
    @businesses = Business.joins(:detailed_info)

    if params[:takeout] == "true"
      debugger
      @businesses = @businesses.where(:detailed_infos => {:takeout => params[:takeout]})
    end

    if params[:wifi] == "true"
      debugger
      @businesses = @businesses.where(:detailed_infos => {:wifi => params[:wifi]})
    end

    if params[:parking] == "true"
      debugger
      @businesses = @businesses.where(:detailed_infos => {:parking => params[:parking]})
    end

    if params[:smoking] == "true"
      debugger
      @businesses = @businesses.where(:detailed_infos => {:smoking => params[:smoking]})
    end

    if params.values_at(:smoking, :wifi, :parking, :takeout).all? {|v| v.nil?}
      @businesses = Business.all
    end

    debugger
    price_params = params.keys.select {|k| params[k] == "true" && ["d","dd","ddd","dddd"].include?(k)}
    if !price_params.empty?
      @businesses = @businesses.where(:detailed_infos => {:price => price_params})
    end
    debugger
    # if params[:d] == "true" && params.values_at(:dd, :ddd, :dddd).all? {|v| v == "false"}
    #   debugger
    #   @businesses = @businesses.where(:detailed_infos => {:price => [0]})
    # elsif params[:dd] == "true" && params.values_at(:d, :ddd, :dddd).all? {|v| v == "false"}
    #   debugger
    #   @businesses = @businesses.where(:detailed_infos => {:price => [1]})
    # elsif params[:ddd] == "true" && params.values_at(:d,:dd, :dddd).all? {|v| v == "false"}
    #   debugger
    #   @businesses = @businesses.where(:detailed_infos => {:price => [2]})
    # elsif params[:dddd] == "true" && params.values_at(:ddd, :dd, :d).all? {|v| v == "false"}
    #   debugger
    #   @businesses = @businesses.where(:detailed_infos => {:price => [3]})
    # end

    render 'businesses/index'
  end

  def show
    @business = Business.find_by(id: params[:id])
  end


end
