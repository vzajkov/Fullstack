class SessionsController < ApplicationController

  def create
    @user = User.find_by(username: params[:user][:username])

    if @user
      login(@user)
      redirect_to reviews_url
    else
      flash.now[:errors] = ["Incorrect credentials"]
    end
  end

  def destroy
    logout
    redirect_to new_session_url
  end

end
