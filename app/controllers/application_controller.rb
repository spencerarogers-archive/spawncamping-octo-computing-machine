class ApplicationController < ActionController::Base
  def access_denied
    render status: :unauthorized
  end

  def secrets
    redirect_to access_denied_path unless params[:testing_mode] == 'true'
  end
end
