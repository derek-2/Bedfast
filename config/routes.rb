Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :destroy, :show, :index]
    resource :session, only: [:create, :destroy]
    resources :listings, only: [:create, :update, :destroy, :index, :show]
    get 'users/:id/listings', :to => 'listings#user_listings'
    resources :bookings
    get 'users/:id/bookings', :to => 'bookings#user_bookings'
  end

end
