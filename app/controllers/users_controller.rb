class UsersController < ApplicationController

    skip_before_action :authenticate_user, only: [:create, :show]

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    def index
        user = User.all
        render json: user
    end

    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created 
    end

    def show 
        if current_user 
            render json: current_user, status: :ok 
        else 
            render json: "No one is logged in", status: :unauthorized
        end
    end

    def destroy 
        user = User.find(params[:id])
        user.destroy 
        head :no_content 
    rescue ActiveRecord::RecordNotFound => error 
       render json: {error: error.message}, status: :not_found
    end

    private 

    def user_params
        params.permit(:username, :password) 
    end

    def render_unprocessable_entity(invalid)
        render json:{error: invalid.record.errors}, status: :unprocessable_entity
    end

end
