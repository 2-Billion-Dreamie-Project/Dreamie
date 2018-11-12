<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Giỏ hàng</title>
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
                        <li class="breadcrumb-item active" aria-current="page">Giỏ hàng</li>
                    </ol>
                </nav>
            </div>
        </section>

        <section class="cart-page">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9">
                        <div class="cart-page-product">
                            <div class="table-responsive">
                                <table class="table table-dark table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Sản phẩm</th>
                                            <th scope="col">Giá</th>
                                            <th scope="col">Số lượng</th>
                                            <th scope="col">Thành tiền</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td class="cart-page-product-1">
                                                <img src="public/img/product-1.png" alt="">
                                                <h5>
                                                    <a href="product-detail.php">Logitech G502 Proteus Spectrum</a>
                                                </h5>

                                                <div class="cart-remove">
                                                    <a title="Xóa sản phẩm" href="#"><i class="fa fa-times" aria-hidden="true"></i></a>
                                                </div>
                                            </td>
                                                
                                            <td>
                                                <h4>1.699.000 đ</h4>
                                            </td>

                                            <td class="cart-page-product-2">
                                                <a href="#"><i class="fa fa-minus" aria-hidden="true"></i></a>
                                                <input type="number" value="1">
                                                <a href="#"><i class="fa fa-plus" aria-hidden="true"></i></a>
                                            </td>

                                            <td class="cart-page-product-3">
                                                <h4>1.699.000 đ</h4>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td class="cart-page-product-1">
                                                <img src="public/img/product-1.png" alt="">
                                                <h5>
                                                    <a href="product-detail.php">Logitech G502 Proteus Spectrum</a>
                                                </h5>

                                                <div class="cart-remove">
                                                    <a title="Xóa sản phẩm" href="#"><i class="fa fa-times" aria-hidden="true"></i></a>
                                                </div>
                                            </td>
                                                
                                            <td>
                                                <h4>1.699.000 đ</h4>
                                            </td>

                                            <td class="cart-page-product-2">
                                                <a href="#"><i class="fa fa-minus" aria-hidden="true"></i></a>
                                                <input type="number" value="1">
                                                <a href="#"><i class="fa fa-plus" aria-hidden="true"></i></a>
                                            </td>

                                            <td class="cart-page-product-3">
                                                <h4>1.699.000 đ</h4>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td class="cart-page-product-1">
                                                <img src="public/img/product-1.png" alt="">
                                                <h5>
                                                    <a href="product-detail.php">Logitech G502 Proteus Spectrum</a>
                                                </h5>

                                                <div class="cart-remove">
                                                    <a title="Xóa sản phẩm" href="#"><i class="fa fa-times" aria-hidden="true"></i></a>
                                                </div>
                                            </td>
                                                
                                            <td>
                                                <h4>1.699.000 đ</h4>
                                            </td>

                                            <td class="cart-page-product-2">
                                                <a href="#"><i class="fa fa-minus" aria-hidden="true"></i></a>
                                                <input type="number" value="1">
                                                <a href="#"><i class="fa fa-plus" aria-hidden="true"></i></a>
                                            </td>

                                            <td class="cart-page-product-3">
                                                <h4>1.699.000 đ</h4>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3">
                        <div class="cart-page-total">
                            <div class="cart-page-total-title">
                                <p>TẠM TÍNH</p>
                            </div>

                            <p>Ước tính vận chuyển</p>

                            <table class="table table-dark table-bordered">
                                <tr>
                                    <td>Tổng tiền</td>
                                    <td>1.999.000 đ</td>
                                </tr>
                                <tr>
                                    <td>Phí vận chuyển</td>
                                    <td>20.000 đ</td>

                                </tr>
                                    
                                <tr>
                                    <td>Tổng cộng</td>
                                    <td class="total-over">2.999.000 đ</td>
                                </tr>
                            </table>

                            <p>Sử dụng mã giảm giá (nếu có)</p>
                            <input type="text" placeholder="Nhập ở đây">
                            <button type="submit">Sử dụng</button>

                            <div class="cart-page-total-btn">
                                <button type="submit">
                                    <a href="pay.php">tiến hành thanh toán</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-5 col-md-4 text-center text-md-left order-md-0 order-12">
                        <div class="cart-page-btn">
                            <a href="product.php">
                                <i class="fa fa-undo" aria-hidden="true"></i>
                                Tiếp tục mua sắm
                            </a>
                        </div>
                    </div>

                    <div class="col-lg-4 order-lg-3 col-md-8">
                        <div class="cart-page-btn text-lg-right text-md-right text-center">
                            <button>
                                <a>
                                    <i class="fa fa-refresh" aria-hidden="true"></i>
                                    Cập nhật giỏ hàng
                                </a>
                            </button>

                            <button>
                                <a>
                                    <i class="fa fa-times" aria-hidden="true"></i>
                                    Xóa giỏ hàng
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </article>

    <footer>
        <?php include 'footer.html' ?> 
    </footer>
</body>
</html>