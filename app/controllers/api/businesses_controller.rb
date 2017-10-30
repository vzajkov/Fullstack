 class Api::BusinessesController < ApplicationController

  def index
    @businesses = Business.all
    debugger
    @businesses = Business.joins(:detailed_info)
    @businesses = @businesses.where(:detailed_infos => {:takeout => params[:takeout]})
    debugger
    @businesses = @businesses.where(:detailed_infos => {:wifi => params[:wifi]})
    debugger
    @businesses = @businesses.where(:detailed_infos => {:parking => params[:parking]})
    debugger
    @businesses = @businesses.where(:detailed_infos => {:smoking => params[:smoking]})

    debugger
    render 'businesses/index'
  end

  def show
    @business = Business.find_by(id: params[:id])
  end


end
