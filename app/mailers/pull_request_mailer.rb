class PullRequestMailer < ActionMailer::Base
  def pr_received(email)
    mail(
      subject: 'VfA Tech Challenge: Pull Request Received',
      to:      email,
      from:    'no-reply@flatironschool.com'
    )
  end
end
