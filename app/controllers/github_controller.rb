class GithubController < ApplicationController
  def pull_request
    Rails.logger.info 'PR HOOK RECEIVED'
  end
end
