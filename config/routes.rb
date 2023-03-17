Rails.application.routes.draw do

  resources :courses, only: [:index, :show, :create, :destroy]
  resources :users, except: [:new, :edit]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get '/courses/:course_id/lessons', to: 'lessons#show_all'
  get '/courses/:course_id/lessons/:id', to: 'lessons#show'
  post '/courses/:course_id/lessons', to: 'lessons#create'
  patch '/courses/:course_id/lessons/:id', to: 'lessons#update'
  delete '/courses/:course_id/lessons/:id', to: 'lessons#destroy'

  get '/courses/:course_id/reviews', to: 'reviews#index'
  post '/courses/:course_id/reviews', to: 'reviews#create'
  delete '/courses/:course_id/reviews/:id', to: 'reviews#destroy'
  # post '/login', to: 'sessions#create'
  # delete '/logout', to: 'sessions#destroy'
  # get '/authorized', to: 'users#show'
  # Defines the root path route ("/")
  # root "articles#index"
end
