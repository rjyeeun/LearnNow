class WelcomeController < ApplicationController
    def index
      if Rails.env.production?
        serve_production_files
      else
        proxy_to_development_server
      end
    end
  
    private
  
    def serve_production_files
      send_file Rails.root.join('build', 'index.html')
    end
  
    def proxy_to_development_server
      redirect_to 'http://frontend:4000'
    end
  end
  