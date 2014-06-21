class GithubController < ApplicationController
  def pull_request
    Rails.logger.info 'PR HOOK RECEIVED'

    render nothing: true
  end
end
