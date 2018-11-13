<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Thanh toán</title>
</head>
<body>
    <header>
        <?php include 'header.html' ?> 
    </header>

    <article>
        <section class="breadcrumb">
            <div class="container">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.php">Trang chủ</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Danh sách yêu thích</li>
                    </ol>
                </nav>
            </div>
        </section>

        <section class="pay-page">
            <div class="container">
                <form>
                    <div class="row">
                    <div class="col-lg-4">
                            <div class="pay-page-title">
                                <h4>
                                    Đơn hàng
                                </h4>
                            </div>

                            <div class="pay-order">
                                <p>3 sản phẩm trong giỏ hàng</p>

                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="box-pay-order">
                                            <img src="public/img/product-1.png" alt="">
                                            <h5>
                                                <a href="product.php">Logitech G502 Proteus Spectrum</a>
                                            </h5>
                                            <h5>Số lượng: 1</h5>
                                            <h4>Thành tiền: 690.000 đ</h4>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="box-pay-order">
                                            <img src="public/img/product-1.png" alt="">
                                            <h5>
                                                <a href="product.php">Logitech G502 Proteus Spectrum</a>
                                            </h5>
                                            <h5>Số lượng: 1</h5>
                                            <h4>Thành tiền: 690.000 đ</h4>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="box-pay-order">
                                            <img src="public/img/product-1.png" alt="">
                                            <h5>
                                                <a href="product.php">Logitech G502 Proteus Spectrum</a>
                                            </h5>
                                            <h5>Số lượng: 1</h5>
                                            <h4>Thành tiền: 690.000 đ</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-8 order-lg-4">
                            <div class="pay-info">
                                <div class="pay-page-title">
                                    <h4>
                                        Thông tin mua hàng
                                    </h4>
                                </div>

                                <div class="pay-info-1">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="name">Họ tên* :</label>
                                                <input type="text" class="form-control" id="name" placeholder="Nhập họ tên">
                                            </div>
                                        </div> 
                                        
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="city">Tỉnh / Thành* :</label>
                                                <select class="form-control" id="city">
                                                    <option value="">-- Chọn tỉnh thành ---</option>
                                                    <option value="">Thanh Hóa</option>
                                                    <option value="">Tiểu Vương Quốc</option>
                                                    <option value="">Hoa Thanh Quế</option>
                                                </select>
                                            </div>
                                        </div> 

                                        <div class="col-md-6 order-6 order-md-0">
                                            <div class="form-group">
                                                <label for="email">Email* :</label>
                                                <input type="email" class="form-control" id="email" placeholder="Nhập Email">
                                            </div>
                                        </div> 

                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="district">Quận / Huyện* :</label>
                                                <select class="form-control" id="district">
                                                    <option value="">-- Chọn quận huyện ---</option>
                                                    <option value="">Thị xã Bỉm Sơn</option>
                                                    <option value="">Thị xã Sầm Sơn</option>
                                                    <option value="">Huyện Đông Sơn</option>
                                                    <option value="">Huyện Tĩnh Gia</option>
                                                    <option value="">Huyện Hà Trung</option>
                                                    <option value="">Huyện Yên Định</option>
                                                    <option value="">Huyện Mường Lát</option>
                                                    <option value="">Huyện Nga Sơn</option>
                                                </select>
                                            </div>
                                        </div> 

                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="phone">Số điện thoại* :</label>
                                                <input type="tel" class="form-control" id="phone" placeholder="Nhập số điện thoại">
                                            </div>
                                        </div> 

                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="address">Địa chỉ* :</label>
                                                <input type="text" class="form-control" id="address" placeholder="Nhập địa chỉ">
                                            </div>
                                        </div> 

                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label for="content">Ghi chú* :</label>
                                                <textarea class="form-control" id="content" placeholder="Nhập ghi chú"></textarea>
                                            </div>
                                        </div> 
                                    </div>                                    
                                </div>

                                <div class="pay-page-title">
                                    <h4>
                                        Ước tính thanh toán
                                    </h4>
                                </div>

                                <div class="pay-info-2">
                                    <table class="table table-bordered table-dark">
                                        <tr>
                                            <td>Tổng tiền</td>
                                            <td>Phí vận chuyển</td>
                                            <td>Tổng cộng</td>
                                        </tr>

                                        <tr>
                                            <td>699.000 đ</td>
                                            <td>20.000 đ</td>
                                            <td class="pay-total">719.000 đ</td>
                                        </tr>
                                    </table>

                                    <div class="pay-info-2-btn text-right">
                                        <a href="cart.php">
                                            <i class="fa fa-undo" aria-hidden="true"></i>
                                            Trở về giỏ hàng
                                        </a>

                                        <button type="submit">
                                            <a class="order-btn">Đặt hàng</a>
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    </article>

    <footer>
        <?php include 'footer.html' ?> 
    </footer>
</body>
</html>