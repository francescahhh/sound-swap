class Playlist < ApplicationRecord
    has_many :songs
    has_many :users, through: :songs
end
