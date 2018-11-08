export default function isAuthentication(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    req.flash('info', 'Sai');
    res.redirect('/login');
  }
}
