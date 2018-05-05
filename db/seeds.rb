# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Create categories
puts "Creating categories..."
["Laravel", "Ruby on Rails", "Django"].each do |category|
  Category.create name: category
  puts "#{category} created."
end

# Create posts
puts "Creating posts..."
category_ids = Category.pluck :id
(1..10).each do |_|
  faker = Faker::Lorem
  post_title = faker.sentence

  Post.create title: post_title, description: faker.sentence(15), content: faker.paragraph(rand(100..200)),
    category_id: category_ids.sample
  puts "Post [#{post_title}] created."
end
