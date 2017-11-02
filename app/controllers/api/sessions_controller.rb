class Api::SessionsController < ApplicationController

  def create
    debugger
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    debugger
    if @user
      login(@user)
      render 'users/show'
    else
      render json: ["Incorrect credentials"], status: 422
    end
  end

  def destroy
    logout
  end

end
