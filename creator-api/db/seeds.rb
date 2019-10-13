# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

luke = User.create(name: "Luke Skywalker", ship: "X-Wing")
bob = User.create(name: "Bobtastic", ship: "Y-Wing")
vader = User.create(name: "Darth Vader", ship: "Tie Fighter")
han = User.create(name: "Han Solo", ship: "Falcon")