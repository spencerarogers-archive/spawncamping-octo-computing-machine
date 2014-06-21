class GithubController < ApplicationController
  def pull_request
    email = 'spencer1248@gmail.com'
    PullRequestMailer.pr_received(email).deliver

    render nothing: true
  end
end
