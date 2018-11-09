export default function validLogin(req, res, next) {
  if (req.body.email && req.body.password) {
    next();
  } else {
    res.status(400).send('Thông tin đăng nhập không được để trống');
  }
}
