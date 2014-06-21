class GithubController < ApplicationController
  def pull_request
    if ['opened', 'reopened', 'synchronize'].include?(pr_state(params))
      encrypted_email = params[:pull_request][:title].strip
      email = Encryption.decrypt(encrypted_email)
      PullRequestMailer.pr_received(email).deliver if email.match(/.+@.+/)
    end

    render nothing: true
  end

  private
    def pr_state(params)
      params[:pull_request][:state]
    end
end
