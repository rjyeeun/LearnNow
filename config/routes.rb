Rails.application.routes.draw do
  resources :instructor_courses
  resources :reviews
  resources :enrolled_courses
  resources :user_liked_courses
  resources :lessons
  resources :courses
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/hello', to: 'application#hello_world'
end
