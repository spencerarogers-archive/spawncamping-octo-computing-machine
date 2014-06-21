require 'openssl'
require 'base64'
class GithubController < ApplicationController
  def pull_request
    encrypted_email = params[:pull_request][:title].strip
    email = Encryption.decrypt(encrypted_email)
    PullRequestMailer.pr_received(email).deliver if email.match(/.+@.+/)

    render nothing: true
  end
end
