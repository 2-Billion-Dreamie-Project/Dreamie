<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Danh sách yêu thích</title>
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

        <section class="wishlist-page">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="box-wishlist-page">
                            <img src="public/img/product-1.png" alt="">
                            <h5>Logitech G502 Proteus Spectrum</h5>
                            <h4>699.000 đ</h4>

                            <div class="box-wishlist-page-quantity text-center">
                                Số lượng: 
                                <a href="#"><i class="fa fa-minus" aria-hidden="true"></i></a>
                                <input type="number" value="1">
                                <a href="#"><i class="fa fa-plus" aria-hidden="true"></i></a>
                                <button type="submit">thêm vào giỏ</button>
                            </div>

                            <div class="box-wishlist-page-btn">
                                <a href="product-detail.php">Xem chi tiết sản phẩm</a>
                                <a class="wishlist-remove" href="#">Xóa</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="box-wishlist-page">
                            <img src="public/img/product-1.png" alt="">
                            <h5>Logitech G502 Proteus Spectrum</h5>
                            <h4>699.000 đ</h4>

                            <div class="box-wishlist-page-quantity text-center">
                                Số lượng: 
                                <a href="#"><i class="fa fa-minus" aria-hidden="true"></i></a>
                                <input type="number" value="1">
                                <a href="#"><i class="fa fa-plus" aria-hidden="true"></i></a>
                                <button type="submit">thêm vào giỏ</button>
                            </div>

                            <div class="box-wishlist-page-btn">
                                <a href="product-detail.php">Xem chi tiết sản phẩm</a>
                                <a class="wishlist-remove" href="#">Xóa</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="box-wishlist-page">
                            <img src="public/img/product-1.png" alt="">
                            <h5>Logitech G502 Proteus Spectrum</h5>
                            <h4>699.000 đ</h4>

                            <div class="box-wishlist-page-quantity text-center">
                                Số lượng: 
                                <a href="#"><i class="fa fa-minus" aria-hidden="true"></i></a>
                                <input type="number" value="1">
                                <a href="#"><i class="fa fa-plus" aria-hidden="true"></i></a>
                                <button type="submit">thêm vào giỏ</button>
                            </div>

                            <div class="box-wishlist-page-btn">
                                <a href="product-detail.php">Xem chi tiết sản phẩm</a>
                                <a class="wishlist-remove" href="#">Xóa</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="box-wishlist-page">
                            <img src="public/img/product-1.png" alt="">
                            <h5>Logitech G502 Proteus Spectrum</h5>
                            <h4>699.000 đ</h4>

                            <div class="box-wishlist-page-quantity text-center">
                                Số lượng: 
                                <a href="#"><i class="fa fa-minus" aria-hidden="true"></i></a>
                                <input type="number" value="1">
                                <a href="#"><i class="fa fa-plus" aria-hidden="true"></i></a>
                                <button type="submit">thêm vào giỏ</button>
                            </div>

                            <div class="box-wishlist-page-btn">
                                <a href="product-detail.php">Xem chi tiết sản phẩm</a>
                                <a class="wishlist-remove" href="#">Xóa</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-8 col-md-9">
                        <div class="wishlist-btn text-center text-md-left">
                            <button>
                                <a>
                                    <i class="fa fa-refresh" aria-hidden="true"></i>
                                    cập nhật danh sách yêu thích
                                </a>
                            </button>

                            <button>
                                <a>
                                    <i class="fa fa-shoping-bag" aria-hidden="true"></i>
                                    thêm tất cả vào giỏ
                                </a>
                            </button>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-3 text-md-right text-center">
                        <div class="wishlist-btn back-index">
                            <a href="product.php">
                                <i class="fa fa-undo" aria-hidden="true"></i>
                                tiếp tục mua sắm
                            </a>
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