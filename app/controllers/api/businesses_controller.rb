 class Api::BusinessesController < ApplicationController

  def index
    @businesses = Business.all
    @businesses = Business.joins(:detailed_info)
    @businesses = @businesses.where(:detailed_infos => {:takeout => params[:takeout]})
    @businesses = @businesses.where(:detailed_infos => {:wifi => params[:wifi]})
    @businesses = @businesses.where(:detailed_infos => {:parking => params[:parking]})
    @businesses = @businesses.where(:detailed_infos => {:smoking => params[:smoking]})

    if params.values_at(:smoking, :wifi, :parking, :takeout).all? {|v| v.nil?}
      @businesses = Business.all
    end

    render 'businesses/index'
  end

  def show
    @business = Business.find_by(id: params[:id])
  end


end
