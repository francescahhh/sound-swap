class User < ApplicationRecord

    has_secure_password 

    has_many :songs
    has_many :playlists, through: :songs



    validates :username, presence: true, uniqueness: { case_sensitive: false }
    # validates :password, presence: true, length: { in: 6..20 }
end
