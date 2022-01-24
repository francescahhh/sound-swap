class SongsController < ApplicationController


    def create
        song = Song.create!(song_params)
        render json: song, status: :created
    end

    def destroy
        song = find_by_id
        song.destroy
    end

    private 

    def  song_params
        params.permit(:playlist_id, :title, :artist, :duration, :genre, :image, :album, :summary, :tag)
    end

    def find_by_id
        Song.find(params[:id])
      end

end
