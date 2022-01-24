Rails.application.routes.draw do
  
  resources :songs
  resources :playlists
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

  get "/auth", to: "users#show"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  post "/"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
