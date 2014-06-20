Rails.application.routes.draw do
  root to: 'application#secrets'
  get 'secrets', to: 'application#secrets'
  get 'access_denied', to: 'application#access_denied', as: :access_denied
end
