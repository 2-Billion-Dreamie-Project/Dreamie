export default function validRegister(req, res, next) {
  if (req.body.email && req.body.password && req.body.userName) {
    next();
  } else {
    res.status(400).send('Thông tin đăng ký không hợp lệ');
  }
}
