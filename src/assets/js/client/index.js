$('.slider-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  dots: true,
  nav: true,
  navText: ["<i class='mdi mdi-transfer'></i>", "<i class='mdi mdi-transfer'></i>"],
  autoplaySpeed: 1000,
  animateOut: 'fadeOutRight',
  animateIn: 'bounceInRight',
  autoHeight: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});

$('.slider-carousel').on('changed.owl.carousel', function(event) {
  var item = event.item.index-2;

  $('h1').removeClass('animated flipInX');
  $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated flipInX');

  $('p').removeClass('animated fadeInLeftBig');
  $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInLeftBig');
  
  $('a').removeClass('animated jackInTheBox');
  $('.owl-item').not('.cloned').eq(item).find('a').addClass('animated jackInTheBox');
});

$('.seller-carousel').owlCarousel({
  loop: false,
  autoplay: false,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  dots: true,
  nav: true,
  margin: 30,
  navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
  autoplaySpeed: 1000,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 4
    }
  }
});

$('.partner-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  dots: false,
  nav: false,
  margin: 30,
  autoWidth: true,
  autoplaySpeed: 1000,
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 4
    },
    1000: {
      items: 6
    }
  }
});

$('.xzoom-carousel').owlCarousel({
  loop: false,
  autoplay: false,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  dots: false,
  nav: true,
  navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
  margin: 10,
  autoWidth: true,
  autoplaySpeed: 1000,
  responsive: {
    0: {
      items: 4
    },
    600: {
      items: 4
    },
    1000: {
      items: 4
    }
  }
});

$('.modal-carousel').owlCarousel({
  loop: true,
  autoplay: false,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  dots: false,
  nav: true,
  navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
  margin: 10,
  autoWidth: true,
  autoplaySpeed: 1000,
  responsive: {
    0: {
      items: 3
    },
    600: {
      items: 3
    },
    1000: {
      items: 3
    }
  }
});

wow = new WOW({
  mobile: false,
})
wow.init();


$('document').ready(function () {
  var url = window.location.href;
  $(".main-menu a").each(function () {
    if (url == (this.href)) {
      $(this).closest("li a").addClass("active");
      $(this).closest("li li a").removeClass("active");
    }
  });

  $('.toggleMenu').click(function () {
    $(this).css('display', 'none');
    $('.menu .nav').css('transform', 'translateX(0)');
    $('.menu-close').css('display', 'block');
    $('.custom-header .collapse').removeClass('show');
  });

  $('.menu-close').click(function () {
    $(this).css('display', 'none');
    $('.toggleMenu').css('display', 'block');
    $('.menu .nav').css('transform', 'translateX(-150%)');
    $('.menu .nav li .menu-bottom').css('position', 'absolute').css('visibility', 'hidden').css('opacity', '0')
  });


  var ww = document.body.clientWidth;

  if (ww < 1200) {
    $('.menu .nav li i').click(function () {
      $('.menu .nav li .menu-bottom').css('position', 'relative').css('visibility', 'initial').css('opacity', '1')
    });

    $('.custom-header i').click(function() {
      $('.menu .nav').css('transform', 'translateX(-150%)');
      $('.toggleMenu').css('display', 'block');
      $('.menu-close').css('display', 'none');
    });
  }

  if (ww < 992) {
    $('.footer-bottom .collapse').removeClass('show');
  }

  if (ww > 1200) {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 20) {
        $('.menu').css('background', 'rgba(0, 0, 0, 0.8)').css('height', '70px').css('right', '15px').css('border-bottom', '1px solid #383838');
        $('.logo img').css('height', '40px');
        $('.logo').css('margin', '15px 0');
        $('.menu .main-menu .nav').css('margin', '10px 0');
        $('.menu .custom-header').css('margin', '20px 0');
        $('.menu').addClass('wow animated slideInDown');
      } else {
        $('.menu').css('height', '100px').css('border-bottom', '0')
        $('.logo img').css('height', 'auto');
        $('.logo').css('margin', '20px 0');
        $('.menu .main-menu .nav').css('margin', '20px 0');
        $('.menu .custom-header').css('margin', '30px 0');
        $('.menu').removeClass('wow animated slideInDown');
      }
    });
  }

  

  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
      $('#goTop').fadeIn();

    } else {
      $('#goTop').fadeOut();
    }
  });

  $('#goTop').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });

  $('.list-cate-title').on('click', function () {
    $('.list-cate-title').removeClass('active');
    $(this).addClass('active');
  });
  $(".xzoom, .xzoom-gallery").xzoom({
    tint: '#333',
    Xoffset: 15
  });

  $('#main-image').bind('click', function () {
    var xzoom = $(this).data('xzoom');
    xzoom.closezoom();
    var gallery = xzoom.gallery().cgallery;
    var i, images = new Array();
    for (i in gallery) {
      images[i] = {
        src: gallery[i]
      };
    }
    $.magnificPopup.open({
      items: images,
      type: 'image',
      gallery: {
        enabled: true
      }
    });
    event.preventDefault();
  });

  $('.search-btn').click(function() {
    $('.overlay').css('display', 'block');
  });
  
  $('.overlay').click(function() {
    $(this).css('display', 'none');
    $('#search').removeClass('show');
  });

  $('.custom-cart').click(function() {
    $.toast({
      heading: 'Thông báo',
      text: 'Bạn đã thêm vào giỏ thành công',
      icon: 'success',
      loader: true,
      position: 'top-center',
      textAlign: 'center',
      showHideTransition: 'slide'
    })
  });

  $('.custom-wishlist').click(function() {
    $.toast({
      heading: 'Thông báo',
      text: 'Bạn đã thêm vào danh sách yêu thích thành công',
      icon: 'info',
      loader: true,
      position: 'top-center',
      textAlign: 'center',
      showHideTransition: 'slide'
    })
  });
});
