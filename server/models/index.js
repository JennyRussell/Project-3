const User = require('./User');
const Person = require('./Person');


User.hasMany(Person, {
  foreignKey: 'id',
  onDelete: 'CASCADE'
});

Person.belongsTo(User, {
    foreignKey: {
      name: 'user_id'
    }
  });


module.exports = { User, Person };