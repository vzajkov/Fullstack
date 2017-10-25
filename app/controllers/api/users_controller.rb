class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      debugger
      render json: ["Signed up!"]
    else
      render json: ["Unable to sign up"]
    end
  end

  def show

  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
