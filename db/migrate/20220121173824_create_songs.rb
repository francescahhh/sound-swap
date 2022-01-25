class CreateSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :songs do |t|
      t.string :title
      t.string :artist
      t.string :duration
      t.string :genre
      t.string :image
      t.string :album
      t.string :summary
      t.string :tag

      t.timestamps
    end
  end
end
