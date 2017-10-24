class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def login(user)
    debugger
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logout
    session[:session_token] = nil
    @current_user.reset_session_token!
  end

  def logged_in?
    !!@current_user
  end

  def current_user
    @current_user ||= User.find_by(session_token: params[:session_token])
  end

  def ensure_logged_in
    redirect_to new_session_url unless logged_in?
  end

end
