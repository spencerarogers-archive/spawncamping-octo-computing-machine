class GithubController < ApplicationController
  def pull_request
    Rails.logger.info "[[#{params[:action].upcase} PULL REQUEST EVENT RECEIVED]]"
    if ['opened', 'reopened'].include?(params[:action])
      email = params[:pull_request][:title].strip
      Rails.logger.info "[[PULL REQUEST FROM #{email}]]"
      PullRequestMailer.pr_received(email).deliver if email.match(/.+@.+/)
    end

    render nothing: true
  end
end
