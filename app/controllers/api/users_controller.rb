class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)


    if @user.save
      debugger
      login(@user)
      # redirect_to reviews_url
    else
      flash.now[:errors] = @user.errors.full_messages
    end
  end

  def show

  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
