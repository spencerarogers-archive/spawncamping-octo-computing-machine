class ApplicationController < ActionController::Base
  has_mobile_fu
  has_mobile_fu_for :secrets

  def access_denied
    render status: :unauthorized
  end

  def secrets
    redirect_to access_denied_path unless browser.mobile?
  end
end
