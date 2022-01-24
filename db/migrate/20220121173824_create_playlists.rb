class CreatePlaylists < ActiveRecord::Migration[6.1]
  def change
    create_table :playlists do |t|
      t.string :title
      t.string :duration
      t.string :image
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :song, null: false, foreign_key: true

      t.timestamps
    end
  end
end
