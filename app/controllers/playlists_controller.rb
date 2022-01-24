class PlaylistsController < ApplicationController

    before_action :set_item, only: [:show, :update, :destroy]
    before_action :is_authorized, only: [:update, :destroy]

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        playlist = Playlist.all
        render json: playlist
        end

        def create
            playlist = Playlist.create!(playlist_params)
            render json: playlist, status: :created
        end

        def update 
            if @playlist
                if @playlist.update(playlist_params)
                render json: @playlist, status: :ok
                else 
                    render json: {error: @playlist.errors.full_messages}
                end 
            else  
                render json: {error: "This playlist does not exist"}, status: :not_found
            end
        end

        def destroy
            playlist = find_by_id
            playlist.destroy
        end

        def show
            playlist = find_by_id
            render json: playlist
        end
    
        private

        def is_authorized 
            # going to check if the current_user is the seller of the item that is being modified, or if the current user is an admin
            permitted = current_user.admin? || @playlist == current_user 
            render json: {error: "Accessibility is not permitted"}, status: :forbidden unless permitted
        end


        def find_by_id
            Playlist.find(params[:id])
          end

        def playlist_params
            params.permit(:song_id, :user_id, :title, :duration, :image)
        end

        def render_unprocessable_entity_response(exception)
            render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
          end


end
