class Api::DetailedInfoController < ApplicationController

  def create
  end

  def update
    @detailed_info = DetailedInfo.find(detailed_info_params)

    if @detailed_info.update_attributes(detailed_info_params)
      render @detailed_info
    else
      render json: ["Cannot update detailed info"]
    end
  end

  private

  def detailed_info_params
    params.permit(:detailed_info).require(:wifi, :parking, :takeout, :smoking)
  end
end
