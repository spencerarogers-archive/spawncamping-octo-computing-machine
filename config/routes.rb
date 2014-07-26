Rails.application.routes.draw do
  root to: 'backdoor#secrets'

  get  'dom-ination', to: 'challenges#dom'
  get  'secrets', to: 'backdoor#secrets'
  get  'access_denied', to: 'application#access_denied', as: :access_denied
  get  'encryption', to: 'encryption#new', as: :new_encryption
  post 'encryption', to: 'encryption#create', as: :encryption
  post 'github/pull_request', to: 'github#pull_request', as: :pull_request

  resources :completions
end
