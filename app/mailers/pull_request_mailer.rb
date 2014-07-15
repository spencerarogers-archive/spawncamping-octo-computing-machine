class PullRequestMailer < ActionMailer::Base
  def pr_received(email)
    mail(
      subject: 'Tech Challenge: Pull Request Received',
      to:      email,
      from:    'github+tech-challenge@flatironschool.com'
    )
  end
end
