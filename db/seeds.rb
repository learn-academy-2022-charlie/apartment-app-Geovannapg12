# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')
apartments_array = [
    {
        street: "243 Drury Lane",
        city: "San Diego",
        state:"CA",
        manager:"Muffy Men",
        email:"muffy.apartment@.com",
        price:"10,00",
        bedrooms: 3,
        bathrooms: 3,
        pets:"yes",
        image:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1296&q=60"
    },

    {
    street: "4 Privet Drive",
    city: "San Diego",
    state:"CA",
    manager:"Bill Weasley",
    email:"bill.apartment@.com",
    price:"10,00",
    bedrooms: 4,
    bathrooms: 3,
    pets:"yes",
    image:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1296&q=60"
    }
]

apartments_array.each do |each_apartment|
    user.apartments.create each_apartment
  end

