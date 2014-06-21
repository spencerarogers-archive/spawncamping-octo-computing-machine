class GithubController < ApplicationController
  def pull_request
    if ['opened', 'reopened'].includes?(params[:action])
      email = params[:pull_request][:title].strip
      PullRequestMailer.pr_received(email).deliver if email.match(/.+@.+/)
    end

    render nothing: true
  end
end
