Rails.application.routes.draw do
  get '/social' => 'social#index'

  get '/gallery' => 'gallery#index'

  get '/contact' => 'contact#index'

  get '/accommodations' => 'accomodations#index'

  get '/events' => 'events#index'

  get '/rsvp' => 'rsvp#index'

  get '/weddingparty' => 'weddingparty#index'

  get '/welcome' => 'welcome#index'

  root 'welcome#index'

end
