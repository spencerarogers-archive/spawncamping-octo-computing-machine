class ApplicationController < ActionController::Base
  has_mobile_fu false

  def access_denied
    render status: :unauthorized
  end

  def secrets
    redirect_to access_denied_path unless is_mobile_device?
  end
end
