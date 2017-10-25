class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      debugger
      render '/users/show'
    else
      render json: ["Unable to sign up"], status: 422
    end
  end

  def show
    render '/users/show'
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
