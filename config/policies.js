module.exports.policies = {
  '*': 'authenticated',
  AuthController: {
    login: true
  }
};
