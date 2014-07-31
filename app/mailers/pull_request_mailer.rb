class PullRequestMailer < ActionMailer::Base
  def pr_received(email)
    mail(
      subject: 'CTF: Pull Request Received',
      to:      email,
      from:    'github+capture-the-flag@flatironschool.com'
    )
  end
end
