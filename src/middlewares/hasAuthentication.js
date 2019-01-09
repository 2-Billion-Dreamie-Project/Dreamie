export default function hasAuthentication(req, res, next) {
  if (!req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/');
  }
}
