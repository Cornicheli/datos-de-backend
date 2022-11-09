let user = [
    {
        id: 'user1',
        name: 'Ignacio',
        lastName: 'Borraz',
        age: 25,
        password: 'borraz1234',
        code: '1a2b3c',
        verifed: 'true',
        logged: 'true'
    },
    {
    id: 'user2',
        name: 'Jose',
        lastName: 'Lopez',
        age: 30,
        password: 'lopez1234',
        code: '4d5c6e',
        verifed: 'true',
        logged: 'true'
    },
    {
        id: 'user3',
        name: 'Jose',
        lastName: 'Lopez',
        age: 30,
        password: 'lopez1234',
        code: '5f6h7i',
        verifed: 'true',
        logged: 'true'
    },
    {
        id: 'user4',
        name: 'Jose',
        lastName: 'Lopez',
        age: 30,
        password: 'lopez1234',
        code: 'j8k9l10',
        verifed: 'true',
        logged: 'true'
    },
]

require('dotenv').config()
require('../../config/database')
const User = require('../User')

user.forEach(elemento => {
    User.create({
        name: elemento.name,
        lastName: elemento.lastName,
        age: elemento.age,
        password: elemento.password,
        code: elemento.code,
        verifed: elemento.verifed,
        logged: elemento.logged,
        
    })
})