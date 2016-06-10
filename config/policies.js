module.exports.policies = {
  '*': true,
  UserController: {
    '*': 'authenticated',
    create: true
  }
};
