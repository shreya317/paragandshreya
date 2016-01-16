Rails.application.routes.draw do
  get 'social/index'

  get 'gallery/index'

  get 'contact/index'

  get 'accomodations/index'

  get 'events/index'

  get 'rsvp/index'

  get 'weddingparty/index'

  get 'welcome/index'

  root 'welcome#index'

end
