# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
puts "🍕 Seeding data..."

10.times do
    User.create(
      username: Faker::Name.first_name,
      password: '123',
    )
  end
  
  100.times do
    Song.create(
      title: Faker::Book.title,
      artist: Faker::Music.band,
      duration: Faker::Number.decimal(l_digits: 2),
      genre: Faker::Music.genre,
      image: Faker::Avatar.image,
      album: Faker::Music.album,
      summary: Faker::Quote.famous_last_words,
      tag: Faker::Music.genre
    )
  end

  10.times do
    Playlist.create(
        title: Faker::App.name,
        duration: Faker::Number.decimal(l_digits: 2),
        image: Faker::Avatar.image
    )
  end



    puts "🍕 Done seeding!"