class GithubController < ApplicationController
  def pull_request
    email = params[:pull_request][:title].strip
    Rails.logger.info "[[PULL REQUEST FROM #{email}]]"
    PullRequestMailer.pr_received(email).deliver if email.match(/.+@.+/)

    render nothing: true
  end
end
