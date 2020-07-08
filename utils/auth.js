const withAuth = (req, res, next) => {
   console.log('/n/n/nUSER_ID INFORMATION/n/n/n', req.session.user_id);
   if (!req.session.user_id) {
      res.redirect('/login');
   } else {
      next();
   }
};

module.exports = withAuth;