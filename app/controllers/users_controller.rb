class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create, :show]
    def index
        users = User.all
        render json: users, status: :ok
    end
    def show   
        user = find_user
        render json: user, status: :ok
        #render json: current_user, status: :ok
    end

    def find_current_user
        current_user = User.find(session[:user_id])
        render json: current_user, status: :ok
    end

    def create
        user = User.create!(user_params)
        if user.valid?
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        user = find_user
        user.destroy!
        head :no_content
    end

    def update
        user = find_user
        user.update!(user_params)
        render json: user, status: :accepted
    end


    private
    
    def find_user
        User.find_by!(id: params[:id])
    end

    def user_params
        params.permit(:name, :username, :email, :password, :password_confirmation)
    end

end
