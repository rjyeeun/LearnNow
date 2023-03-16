Rails.application.routes.draw do

  resources :instructor_courses
  resources :reviews
  resources :enrolled_courses
  resources :user_liked_courses
  resources :lessons
  resources :users
  resources :courses, only: [:index, :show, :create, :update, :destroy]

  get '/courses/:id/lessons', to: 'lessons#show_all'
  get '/courses/:id/lessons/:id', to: 'lessons#show'
  post '/courses/:id/lessons', to: 'lessons#create'
  patch '/courses/:id/lessons/:id', to: 'lessons#update'
  delete '/courses/:id/lessons/:id', to: 'lessons#destroy'

  get '/courses/:id/reviews', to: 'reviews#show_all'
  post '/courses/:id/reviews', to: 'reviews#create'
  
end
