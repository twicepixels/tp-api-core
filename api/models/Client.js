var bcrypt = require('bcrypt');
module.exports = {

  attributes: {
    name: {
      type: 'string'
    },

    organization: {
      type: 'string'
    },

    email: {
      type: 'string'
    },

    client_id: {
      type: 'string',
      required: true,
      unique: true
    },

    client_secret: {
      type: 'string',
      required: true
    },

    trust_level: {
      type: 'string'
    },

    redirect_uri: {
      type: 'string',
      urlish: true
    },

    date_registered: {
      type: 'string'

    },
    date_verified: {
      type: 'string'
    },

    toJSON: function () {
      var obj = this.toObject();
      delete obj.client_secret;
      return obj;
    }
  },

  beforeCreate: function (client, next) {
    if (client.hasOwnProperty('client_secret')) {
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(client.client_secret, salt, function (err, hash) {
          if (err) {
            console.log(err);
            next(err);
          } else {
            client.clientSecret = hash;
            next(null, client);
          }
        });
      });
    } else {
      next(null, client);
    }
  },

  beforeUpdate: function (client, next) {
    if (client.hasOwnProperty('client_secret')) {
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(client.client_secret, salt, function (err, hash) {
          if (err) {
            console.log(err);
            next(err);
          } else {
            client.clientSecret = hash;
            next(null, client);
          }
        });
      });
    } else {
      next(null, client);
    }
  }
};
