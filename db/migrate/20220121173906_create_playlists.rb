class CreatePlaylists < ActiveRecord::Migration[6.1]
  def change
    create_table :playlists do |t|
      t.string :title
      t.string :duration, default: 0
      t.string :image

      t.timestamps
    end
  end
end
