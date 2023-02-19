Rails.application.routes.draw do
  devise_for :users,
             controllers: {
                 sessions: 'sessions',
                 registrations: 'registrations'
             }
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root 'referrals#index'

  namespace :api do
    namespace :v1 do
      resources :referrals
    end
  end
end
