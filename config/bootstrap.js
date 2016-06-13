module.exports.bootstrap = function (cb) {
  //Create default user
  User.findOne({email: 'admin@tp.com'}, function (err, user) {
    if (!user) {
      //noinspection JSUnresolvedVariable
      User.create({
        username: 'admin',
        password: 'password',
        email: 'admin@tp.com'
      }).exec(function (err, user) {
        console.log("Default user created");
        console.log("- username: " + user.email);
        console.log("- password: password");
      });
    } else {
      console.log('Default user already exists');
      console.log("- username: " + user.username);
      console.log("- password: password");
      console.log("- email: " + user.email);
    }
  });

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
