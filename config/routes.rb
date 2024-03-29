Rails.application.routes.draw do
  
  resources :songs
  resources :playlists
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

  get '/me', to: "users#show"
  post '/login', to: "sessions#login"
  delete '/logout', to: "sessions#logout"

  # post "/"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
