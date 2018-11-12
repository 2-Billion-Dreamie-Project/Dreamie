<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Liên hệ</title>
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
                        <li class="breadcrumb-item active" aria-current="page">Liên hệ</li>
                    </ol>
                </nav>
            </div>
        </section>

        <section class="contact-page">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="title-page">
                            <h1>
                                <a>liên hệ với chúng tôi</a>
                            </h1>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-8">
                        <div class="box-contact">
                            <form action="">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="form-name">Họ tên:</label>
                                            <input type="text" class="form-control" name="name" id="form-name" placeholder="Nhập họ tên">
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="form-phone">Số điện thoại:</label>
                                            <input type="tel" class="form-control" name="phone" id="form-phone" placeholder="Nhập số điện thoại">
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="form-email">Email:</label>
                                            <input type="email" class="form-control" name="email" id="form-email" placeholder="Nhập Email">
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="form-title">Tiêu đề:</label>
                                            <input type="text" class="form-control" name="title" id="form-title" placeholder="Nhập tiêu đề">
                                        </div>
                                    </div>

                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label for="form-content">Lời nhắn:</label>
                                            <textarea class="form-control" name="content" id="form-content" placeholder="Nhập lời nhắn"></textarea>
                                        </div>
                                    </div>
                                </div>

                                <button type="submit"><a>gửi liên hệ</a></button>
                            </form>
                        </div>
                    </div>

                    <div class="col-lg-4 d-lg-block d-none">
                        <div class="contact-banner">
                            <a href="product-detail.php">
                                <img src="public/img/banner-1.png" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="maps-contact">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.91477127143!2d-74.11976341808828!3d40.697403441901386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2zVGjDoG5oIHBo4buRIE5ldyBZb3JrLCBUaeG7g3UgYmFuZyBOZXcgWW9yaw!5e0!3m2!1svi!2s!4v1541645319974" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
        </section>
    </article>

    <footer>
        <?php include 'footer.html' ?> 
    </footer>
</body>
</html>