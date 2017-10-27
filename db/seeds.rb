# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create!([{ username: 'Valery', password: 'starwars'}, {username: 'mrkrabs', password: 'moneymoneymoney'} ])


business1 = Business.create!({ name: 'krustykrab', rating: 4.2 })
business2 = Business.create!({ name: 'chumbucket', rating: 1.3 })
business3 = Business.create!({ name: 'bobs burgers', rating: 4.2 })
business4 = Business.create!({ name: 'harrys hotdogs', rating: 1.3 })
business5 = Business.create!({ name: 'petes pizzas', rating: 4.2 })
business6 = Business.create!({ name: 'karls knishes', rating: 1.3 })

address1 = Address.create!({ street: '11 Fake Lane', town: 'San Francisco', state: 'California', country:'US', business_id: business1.id})
address2 = Address.create!({ street: '2 NotReal Avenue', town: 'New York', state: 'New York', country:'US', business_id: business2.id})
address3 = Address.create!({ street: '55 Super Fake Lane', town: 'San Francisco', state: 'California', country:'US', business_id: business3.id})
address4 = Address.create!({ street: '873 NotReal Avenue', town: 'Philadelphia', state: 'Pennsylvania', country:'US', business_id: business4.id})
address5 = Address.create!({ street: '8019 Fake Lane', town: 'Miami', state: 'Florida', country:'US', business_id: business5.id})
address6 = Address.create!({ street: '43 NotReal Avenue', town: 'New York', state: 'New York', country:'US', business_id: business6.id})

detailedinfo1 = DetailedInfo.create!({ business_id: business1.id, wifi: false, parking: false, takeout: false, smoking: false})
detailedinfo2 = DetailedInfo.create!({ business_id: business2.id, wifi: false, parking: false, takeout: false, smoking: false})
detailedinfo3 = DetailedInfo.create!({ business_id: business3.id, wifi: false, parking: false, takeout: false, smoking: false})
detailedinfo4 = DetailedInfo.create!({ business_id: business4.id, wifi: false, parking: false, takeout: false, smoking: false})
detailedinfo5 = DetailedInfo.create!({ business_id: business5.id, wifi: false, parking: false, takeout: false, smoking: false})
detailedinfo6 = DetailedInfo.create!({ business_id: business6.id, wifi: false, parking: false, takeout: false, smoking: false})
