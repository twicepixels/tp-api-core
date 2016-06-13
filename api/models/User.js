var bcrypt = require('bcrypt');
module.exports = {

  autoPK: false,
  tableName: 'tpuser',

  attributes: {
    id: {
      type: 'int',
      unique: true,
      primaryKey: true,
      columnName: 'userId'
    },
    username: {
      type: 'string',
      unique: true,
      required: true
    },

    email: {
      type: 'email',
      unique: true,
      required: true
    },

    password: {
      type: 'string',
      required: true,
      minLength: 8
    },

    firstName: {
      type: 'string'
    },

    lastName: {
      type: 'string'
    },

    location: {
      type: 'string'
    },

    createdAt: {
      type: 'date'
    },

    verifiedAt: {
      type: 'date'
    },

    toJSON: function () {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    }
  },

  beforeCreate: function (user, next) {
    user.createdAt = new Date();
    if (user.hasOwnProperty('password')) {
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(user.password, salt, function (err, hash) {
          if (err) {
            console.log(err);
            next(err);
          } else {
            user.password = hash;
            next(null, user);
          }
        });
      });
    } else {
      next(null, user);
    }
  },

  beforeUpdate: function (user, next) {
    if (user.hasOwnProperty('password')) {
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(user.password, salt, function (err, hash) {
          if (err) {
            console.log(err);
            next(err);
          } else {
            user.password = hash;
            next(null, user);
          }
        });
      });
    } else {
      next(null, user);
    }
  }
};
