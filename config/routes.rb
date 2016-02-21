Rails.application.routes.draw do
  get '/social' => 'social#index'

  get '/gallery' => 'gallery#index'

  get '/contact' => 'contact#index'

  get '/accomodations' => 'accomodations#index'

  get '/events' => 'events#index'

  get '/rsvp' => 'rsvp#index'

  get '/rsvp/user' => 'rsvp#show'

  post '/rsvp/update' => 'rsvp#update'

  get '/weddingparty' => 'weddingparty#index'

  get '/welcome' => 'welcome#index'

  root 'welcome#index'

end
