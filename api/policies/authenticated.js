/**
 * Allow any authenticated user.
 */
module.exports = function (req, res, next) {
  // User is allowed, proceed to controller
  var is_auth = req.isAuthenticated();
  if (is_auth) return next();
  // User is not allowed
  return res.send(401);
};
