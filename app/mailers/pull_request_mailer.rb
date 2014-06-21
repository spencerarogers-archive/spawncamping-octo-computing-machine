class PullRequestMailer < ActionMailer::Base
  def pr_received(email)
    mail(
      subject: 'VfA Tech Challenge: Pull Request Received',
      to:      email,
      from:    'github+vfa@flatironschool.com'
    )
  end
end
