Rails.application.routes.draw do
  get '/social' => 'social#index'

  get '/gallery' => 'gallery#index'

  get '/contact' => 'contact#index'

  get '/accomodations' => 'accomodations#index'

  get '/events' => 'events#index'

  get '/songrequests' => 'songrequests#index'

  get '/rsvp' => 'rsvp#index'

  get '/weddingparty' => 'weddingparty#index'

  get '/welcome' => 'welcome#index'

  post '/songrequests/create'

  get '/songrequests/list'

  root 'welcome#index'

end
