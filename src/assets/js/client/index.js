// SLIDER
$('.slider-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  dots: true,
  nav: true,
  items: 1,
  navText: [
    "<i class='mdi mdi-transfer'></i>", 
    "<i class='mdi mdi-transfer'></i>"
  ],
  autoplaySpeed: 1000,
  animateOut: 'fadeOutRight',
  animateIn: 'bounceInRight',
  autoHeight: true,
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
// ---- END SLIDER

// BEST SELLER
$('.seller-carousel').owlCarousel({
  dots: true,
  nav: true,
  margin: 30,
  navText: [
    "<i class='fa fa-angle-left' aria-hidden='true'></i>",
    "<i class='fa fa-angle-right' aria-hidden='true'></i>"
  ],
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
// ----- END BEST SELLSE

// NEWS HOME
$('.news-carousel').owlCarousel({
  dots: true,
  nav: true,
  navText: [
    "<i class='fa fa-angle-left' aria-hidden='true'></i>",
    "<i class='fa fa-angle-right' aria-hidden='true'></i>"
  ],
  margin: 30,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1000: {
      items: 2
    }
  }
});
// --END NEWS HOME

// PARTNER HOME
$('.partner-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
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
//END PARTNER HOME

// XZOOM
$('.xzoom-carousel').owlCarousel({
  loop: false,
  autoplay: false,
  dots: false,
  nav: true,
  items: 4,
  navText: [
    "<i class='fa fa-angle-left' aria-hidden='true'></i>", 
    "<i class='fa fa-angle-right' aria-hidden='true'></i>"
  ],
  margin: 10,
});

$('.modal-carousel').owlCarousel({
  dots: false,
  nav: true,
  navText: [
    "<i class='fa fa-angle-left' aria-hidden='true'></i>", 
    "<i class='fa fa-angle-right' aria-hidden='true'></i>"
  ],
  margin: 10,
  responsive: {
    0: {
      items: 3
    },
    600: {
      items: 4
    },
    1000: {
      items: 4
    }
  }
});
// END XZOOM

// WOW JS
wow = new WOW({
  mobile: false,
})
wow.init();
// END WOW JS

$('document').ready(function () {
  // ACTIVE MENU
  var url = window.location.href;
  $(".main-menu a").each(function () {
    if (url == (this.href)) {
      $(this).closest("li a").addClass("active");
      $(this).closest("li li a").removeClass("active");
    }
  });
  // END ACTIVE MENU

  var ww = document.body.clientWidth;

  // SETTING MENU
  if (ww < 1200) {
    $('.toggleMenu').click(function () {
      $(this).css('display', 'none');
      $('.menu .nav').css('transform', 'translateX(0)');
      $('.menu-close').css('display', 'block');
      $('.custom-header .collapse').removeClass('show');
    });
  
    $('.menu-close').click(function () {
      $(this).css('display', 'none');
      $('.toggleMenu').css('display', 'block');
      $('.menu .nav').css('transform', 'translateX(-250%)');
      $('.menu .main-menu .nav li ul').css('display','none');
    });
    
    $('.menu .main-menu .nav li .btn-menu-down').click(function() {
      $('.menu .nav li .menu-bottom').css('position', 'relative').css('visibility', 'initial').css('opacity', '1').css('left','0')
      $(this).css('display','none');
      $('.menu .main-menu .nav li .btn-menu-up').css('display','block');
      $('.menu .main-menu .nav li li').css('border-bottom','0');
    });
  
    $('.menu .main-menu .nav li .btn-menu-up').click(function() {
      $('.menu .main-menu .nav li .menu-bottom').css('position', 'absolute').css('visibility', 'hidden').css('opacity', '0').css('left','15px')
      $(this).css('display','none');
      $('.menu .main-menu .nav li .btn-menu-down').css('display','block');
    });
 

    $('.custom-header i').click(function() {
      $('.menu .nav').css('transform', 'translateX(-150%)');
      $('.toggleMenu').css('display', 'block');
      $('.menu-close').css('display', 'none');
    });
  }

  $('.menu .main-menu .nav li .btn-menu-up').css('display','none');

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
  // END SETTING MENU
  
  // GO TOP
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
  // END GO TOP

  // CATEGORY LEFT
  $('.list-cate-title').on('click', function () {
    $('.list-cate-title').removeClass('active');
    $(this).addClass('active');
  });
  //END CATEGORY LEFT

  // XZOOM SETTING
  $(".xzoom, .xzoom-gallery").xzoom({
    tint: '#333',
    Xoffset: 15
  });

  $('.main-image').bind('click', function () {
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
  //END XZOOM SETING

  // SETTING SEARCH FORM
  $('.search-btn').click(function() {
    $('.overlay').css('display', 'block');
  });
  
  $('.overlay').click(function() {
    $(this).css('display', 'none');
    $('#search').removeClass('show');
  });
  // END SETTING SEARCH FORM

  // NOTIFICATION ADD TO CART + WISHLIST
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
  // END NOTIFICATION ADD TO CART + WISHLIST

  // SETTING MODAL OPACITY XZOOM
  $('.modal-footer button , .modal-header button , .modal').click(function() {
    $('.xzoom-preview , .xzoom-source').css('opacity', '0')
  });
  // END SETTING MODAL OPACITY XZOOM

  $('.box-category').eq(0).addClass('bounceInLeft')
  $('.box-category').eq(1).addClass('bounceInDown').attr('data-wow-delay', '.1s')
  $('.box-category').eq(2).addClass('bounceInRight').attr('data-wow-delay', '.2s')
  $('.box-category').eq(3).addClass('bounceInLeft').attr('data-wow-delay', '.5s')
  $('.box-category').eq(4).addClass('bounceInUp').attr('data-wow-delay', '.4s')
  $('.box-category').eq(5).addClass('bounceInRight').attr('data-wow-delay', '.3s')
});
