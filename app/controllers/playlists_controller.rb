class PlaylistsController < ApplicationController

    before_action :set_playlist, only: [:show, :update, :destroy]
    before_action :is_authorized, only: [:update, :destroy]

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        playlist = Playlist.all
        render json: playlist
        end

        def create
            @playlist = Playlist.create!(playlist_params)
            render json: @playlist, status: :created
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
            if @playlist
                @playlist.destroy
                head :no_content
            else
                render json: {error: "this item does not exist"}, status: :not_found
            end
        end

        def show
            if @playlist
                render json: @playlist
            else
                render json: {error: "Playlist not found"}, status: :not_found
            end
        end
    
        private

        def is_authorized 
            permitted = current_user.admin? || @playlist.user == current_user
            render json: {error: "Accessibility is not permitted"}, status: :forbidden unless permitted
        end


        def find_by_id
            Playlist.find(params[:id])
        end

        def set_playlist
            @playlist = Playlist.find_by_id(params[:id])
        end




        def playlist_params
            params.permit(:song_id, :user_id, :title, :duration, :image)
        end

        def render_unprocessable_entity_response(exception)
            render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
          end


end
