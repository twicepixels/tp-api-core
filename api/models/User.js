var bcrypt = require('bcrypt');
module.exports = {

  // connection: 'twiceMysqlServer',
  // tableName: 'client',


  attributes: {
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
      columnName: 'encrypted_password',
      minLength: 8
    },

    first_name: {
      type: 'string'
    },

    last_name: {
      type: 'string'
    },

    location: {
      type: 'string'
    },

    date_registered: {
      type: 'date'
    },

    date_verified: {
      type: 'date'
    },

    toJSON: function () {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    }
  },

  beforeCreate: function (user, next) {
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
