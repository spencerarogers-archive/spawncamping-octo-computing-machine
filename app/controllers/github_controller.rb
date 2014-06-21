class GithubController < ApplicationController
  def pull_request
    if pr_is_open?(params)
      encrypted_email = params[:pull_request][:title].strip
      email = Encryption.decrypt(encrypted_email)
      Rails.logger.info "Sending email to #{email}"
      PullRequestMailer.pr_received(email).deliver if email.match(/.+@.+/)
    end

    render nothing: true
  end

  private
    def pr_is_open?(params)
      params[:pull_request][:state] == 'open'
    end
end
