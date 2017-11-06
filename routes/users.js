const db = require('./dbserver');

console.log(db)
module.exports = db.defineModule('users', {
  email: {
    type: db.STRING(100),
    unique: true
  },
  passwd: db.STRING(100),
  name: db.STRING(100),
  gender: db.BOOLEAN
});
