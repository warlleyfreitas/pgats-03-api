const bcrypt = require('bcryptjs');

// In-memory user database
const users = [
  {
    username: 'julio', 
    password: bcrypt.hashSync('123456', 8), 
    favorecidos: [ 'warlley' ], 
    saldo: 10000
  },
  {
    username: 'warlley', 
    password: bcrypt.hashSync('123456', 8), 
    favorecidos: [ 'julio' ], 
    saldo: 10000
  }
];

module.exports = {
  users
};
