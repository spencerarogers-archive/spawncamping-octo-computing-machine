Rails.application.routes.draw do
  root to: 'application#secrets'

  get 'secrets', to: 'application#secrets'
  get 'access_denied', to: 'application#access_denied', as: :access_denied
  get 'github/pull_request', to: 'github#pull_request', as: :pull_request
end
