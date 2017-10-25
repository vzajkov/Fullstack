class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by(username: params[:user][:username])

    if @user
      login(@user)
      render json: ["Logged In"]
    else
      render json: ["Incorrect credentials"], status: 422
    end
  end

  def destroy
    logout
    # redirect_to new_session_url
  end

end
