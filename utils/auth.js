// middleware to verify user loggied in
const withAuth = (req, res, next) => {
    if (!req.session.userId) {
      res.redirect("/dashboard");
    } else {
      next();
    }
  };

  module.exports = withAuth;