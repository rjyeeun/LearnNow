require 'net/http'

class WelcomeController < ApplicationController
    skip_before_action :authorized
    def index
      if Rails.env.production?
        serve_production_files
      else
        proxy_to_development_server
      end
    end
  
    private
  
    def serve_production_files
      send_file Rails.root.join('client', 'build', 'index.html')
    end
  
    def proxy_to_development_server
      uri = URI.parse("http://frontend:4000#{request.fullpath}")
      response = Net::HTTP.get_response(uri)
  
      render plain: response.body, status: response.code.to_i, content_type: response.content_type
    end
  end
  