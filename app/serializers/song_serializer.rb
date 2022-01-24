class SongSerializer < ActiveModel::Serializer
  attributes :id, :title, :artist, :duration, :genre, :image, :album, :summary, :tag
end
