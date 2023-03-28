Rails.application.routes.draw do

  resources :courses, only: [:index, :show, :create, :destroy]
  

  get '/featured_courses', to: 'courses#featured'

  resources :users, except: [:new, :edit]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get '/courses/:course_id/lessons', to: 'lessons#show_all'
  get '/courses/:course_id/lessons/:id', to: 'lessons#show'
  post '/courses/:course_id/lessons', to: 'lessons#create'
  patch '/courses/:course_id/lessons/:id', to: 'lessons#update'
  delete '/courses/:course_id/lessons/:id', to: 'lessons#destroy'

  get '/users/:user_id/instructor_courses', to: 'instructor_courses#show_all'

  get '/users/:user_id/enrolled_courses', to: 'enrolled_courses#show_all'
  post '/users/:user_id/enrolled_courses', to: 'enrolled_courses#create'
  delete '/users/:user_id/enrolled_courses/:id', to: 'enrolled_courses#destroy'

  get '/courses/:course_id/reviews', to: 'reviews#index'
  post '/courses/:course_id/reviews', to: 'reviews#create'
  delete '/courses/:course_id/reviews/:id', to: 'reviews#destroy'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  
  get '/auth', to: 'users#find_current_user'
  # get '/authorized', to: 'users#show'
  # Defines the root path route ("/")
  # root "articles#index"
end
