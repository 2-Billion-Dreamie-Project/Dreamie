export default function isAuthentication(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    req.flash('unAuthentication', 'Bạn không có quyền truy cập');
    res.redirect('/auth/login');
  }
}
