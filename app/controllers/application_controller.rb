class ApplicationController < ActionController::Base
  def access_denied
    render status: :unauthorized
  end
end
