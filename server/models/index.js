const User = require('./User');
const Person = require('./Person');


User.hasMany(Person, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Person.belongsTo(User, {
  foreignKey: 'user_id',
  });


module.exports = { User, Person };