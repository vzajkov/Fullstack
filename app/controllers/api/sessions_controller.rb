class Api::SessionsController < ApplicationController

  def create
    debugger
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      debugger
      login(@user)
      render json: ["Logged In"]
    else
      debugger
      render json: ["Incorrect credentials"], status: 422
    end
  end

  def destroy
    logout
  end

end
