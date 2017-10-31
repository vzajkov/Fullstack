# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create!([{ username: 'Valery', password: 'starwars'}, {username: 'mrkrabs', password: 'moneymoneymoney'} ])


business1 = Business.create!({ name: 'krusty krab', rating: 4.2 , img_url: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"})
business2 = Business.create!({ name: 'chumbucket', rating: 1.3 , img_url: "https://images.pexels.com/photos/262918/pexels-photo-262918.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"})
business3 = Business.create!({ name: 'bobs burgers', rating: 4.2 , img_url: "https://images.pexels.com/photos/225448/pexels-photo-225448.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"})
business4 = Business.create!({ name: 'harrys hotdogs', rating: 1.3 , img_url: "https://images.pexels.com/photos/51115/restaurant-wine-glasses-served-51115.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"})
business5 = Business.create!({ name: 'petes pizzas', rating: 4.2 , img_url: "https://images.pexels.com/photos/239975/pexels-photo-239975.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"})
business6 = Business.create!({ name: 'karls knishes', rating: 2.7 , img_url: "https://images.pexels.com/photos/3498/italian-pizza-restaurant-italy.jpg?w=1260&h=750&auto=compress&cs=tinysrgb"})
business7 = Business.create!({ name: 'cynthias coffee', rating: 5.0 , img_url: "https://images.pexels.com/photos/64208/pexels-photo-64208.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"})
business8 = Business.create!({ name: 'billys breakfasts', rating: 1.0 , img_url: "https://images.pexels.com/photos/5249/bread-food-restaurant-people.jpg?w=1260&h=750&auto=compress&cs=tinysrgb"})
business9 = Business.create!({ name: 'daves diner', rating: 3.2 , img_url: "https://images.pexels.com/photos/66640/pexels-photo-66640.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"})
business10 = Business.create!({ name: 'arthurs apple pies', rating: 2.9 , img_url: "https://images.pexels.com/photos/6270/woman-flowers-holidays-girl-6270.jpg?w=1260&h=750&auto=compress&cs=tinysrgb"})
business11 = Business.create!({ name: 'randys rutabagas', rating: 4.7 , img_url: "https://images.pexels.com/photos/331107/pexels-photo-331107.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"})

address1 = Address.create!({ street: '11 Fake Lane', town: 'San Francisco', state: 'California', country:'US', business_id: business1.id,
    lat: 37.8228 , lng: -122.465 })
address2 = Address.create!({ street: '2 NotReal Avenue', town: 'New York', state: 'New York', country:'US', business_id: business2.id,
    lat: 40.7128, lng: -74.0060 })
address3 = Address.create!({ street: '55 Super Fake Lane', town: 'San Francisco', state: 'California', country:'US', business_id: business3.id,
    lat: 37.7758 , lng: -122.435})
address4 = Address.create!({ street: '873 NotReal Avenue', town: 'Philadelphia', state: 'Pennsylvania', country:'US', business_id: business4.id,
    lat: 39.9526, lng: -75.1652 })
address5 = Address.create!({ street: '8019 Fake Lane', town: 'Miami', state: 'Florida', country:'US', business_id: business5.id,
    lat: 25.7617, lng: -80.1918})
address6 = Address.create!({ street: '76 NotReal Avenue', town: 'New York', state: 'New York', country:'US', business_id: business6.id,
    lat:  40.743474, lng: -73.997223  })
address7 = Address.create!({ street: '89 NotReal Street', town: 'New York', state: 'New York', country:'US', business_id: business7.id,
    lat:  40.7998, lng: -73.9860  })
address8 = Address.create!({ street: '425 NotReal Alley', town: 'New York', state: 'New York', country:'US', business_id: business8.id,
    lat:  40.742893, lng: -73.986638  })
address9 = Address.create!({ street: '643 NotReal Path', town: 'New York', state: 'New York', country:'US', business_id: business9.id,
    lat:  40.728342, lng: -73.981900  })
address10 = Address.create!({ street: '143 NotReal Road', town: 'New York', state: 'New York', country:'US', business_id: business10.id,
    lat:  40.706796, lng: -74.006854  })
address11 = Address.create!({ street: '2203 NotReal Center', town: 'New York', state: 'New York', country:'US', business_id: business11.id,
    lat:  40.709285, lng: -74.011907  })

detailedinfo1 = DetailedInfo.create!({ business_id: business1.id, wifi: false, parking: false, takeout: false, smoking: true, price: 0})
detailedinfo2 = DetailedInfo.create!({ business_id: business2.id, wifi: false, parking: false, takeout: false, smoking: false, price: 1})
detailedinfo3 = DetailedInfo.create!({ business_id: business3.id, wifi: true, parking: false, takeout: true, smoking: false, price: 2})
detailedinfo4 = DetailedInfo.create!({ business_id: business4.id, wifi: false, parking: false, takeout: false, smoking: false, price: 3})
detailedinfo5 = DetailedInfo.create!({ business_id: business5.id, wifi: false, parking: false, takeout: true, smoking: false, price: 2})
detailedinfo6 = DetailedInfo.create!({ business_id: business6.id, wifi: true, parking: true, takeout: true, smoking: true, price: 3})
detailedinfo7 = DetailedInfo.create!({ business_id: business7.id, wifi: false, parking: false, takeout: false, smoking: true, price: 0})
detailedinfo8 = DetailedInfo.create!({ business_id: business8.id, wifi: false, parking: false, takeout: false, smoking: false, price: 1})
detailedinfo9 = DetailedInfo.create!({ business_id: business9.id, wifi: false, parking: true, takeout: true, smoking: false, price: 2})
detailedinfo10 = DetailedInfo.create!({ business_id: business10.id, wifi: false, parking: false, takeout: false, smoking: false, price: 3})
detailedinfo11 = DetailedInfo.create!({ business_id: business11.id, wifi: false, parking: false, takeout: true, smoking: true, price: 0})
