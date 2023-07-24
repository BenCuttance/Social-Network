const db = require('../config/connection');
const { User } = require('../models');

// Seeded data for demostration and testing
const users = [
    {
        username: "Ben",
        email: "Ben@gmail.com"
    },
    {
        username: "Jonh",
        email: "john@gmail.com"
    }, 
    {
        username: "Daniel",
        email: "Daniel@hotmail.com"
    }, {
        username: "Jess",
        email: "Jess@hotmail.com"
    },
]

const initSeeder = async () => {
await User.deleteMany()
await  User.insertMany(users)
db.close()
}

initSeeder();
  