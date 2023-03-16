Rails.application.routes.draw do
  get 'current_user/index'
  resources :instructor_courses
  devise_for :users, path: '', path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  },
  controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  resources :enrolled_courses
  resources :courses, only: [:index, :show, :create, :update, :destroy]
  resources :orders, only: [:index, :show]
  resources :users, only: [:index]

  get '/courses/:id/lessons', to: 'lessons#show_all'
  get '/courses/:id/lessons/:id', to: 'lessons#show'
  post '/courses/:id/lessons', to: 'lessons#create'
  patch '/courses/:id/lessons/:id', to: 'lessons#update'
  delete '/courses/:id/lessons/:id', to: 'lessons#destroy'

  get '/courses/:id/reviews', to: 'reviews#show_all'
  post '/courses/:id/reviews', to: 'reviews#create'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/hello', to: 'application#hello_world'
end
