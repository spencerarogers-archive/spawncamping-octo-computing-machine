class BackdoorController < ApplicationController
  has_mobile_fu
  has_mobile_fu_for :secrets

  def secrets
    redirect_to access_denied_path unless is_mobile_device?
  end
end
