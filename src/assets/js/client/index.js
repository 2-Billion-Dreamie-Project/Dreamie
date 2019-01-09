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
  $('.owl-item')
    .not('.cloned')
    .eq(item)
    .find('h1')
    .addClass('animated flipInX');

  $('p').removeClass('animated fadeInLeftBig');
  $('.owl-item')
    .not('.cloned')
    .eq(item)
    .find('p')
    .addClass('animated fadeInLeftBig');
  
  $('a').removeClass('animated jackInTheBox');
  $('.owl-item')
    .not('.cloned')
    .eq(item)
    .find('a')
    .addClass('animated jackInTheBox');
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

  $('.menu .nav').slideAndSwipe();

  var ww = document.body.clientWidth;

  // SETTING MENU
    $('.btn-menu-down').click(function() {
      $('.menu-bottom').toggleClass('menu-bottom-down')
    });
    
    $('.mobile-btn').click(function () {
      let $ul = $(this).find('ul');
      $ul
        .css('display', 'block')
        .toggleClass('in out')
    });



  if (ww < 992) {
    $('.footer-bottom .collapse').removeClass('show');
  }

  if (ww > 1200) {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 20) {
        $('.menu').addClass('menu-down wow animated slideInDown');
        $('.cart-form').addClass('cart-form-down');
      } else {
        $('.menu').removeClass('menu-down wow animated slideInDown');
        $('.cart-form').removeClass('cart-form-down');
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
    Swal({
      title: 'Thông báo',
      type: 'success',
      html: 'Bạn đã thêm vào giỏ thành công',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<a href="/cart">Vào giỏ hàng</a>',
      cancelButtonText:
        'Tiếp tục mua sắm',
    })
  });

  $('.custom-wishlist').click(function() {
    Swal({
      title: 'Thông báo',
      type: 'success',
      html: 'Bạn đã thêm vào danh sách yêu thích thành công',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<a href="/wishlist">Vào danh sách yêu thích</a>',
      cancelButtonText:
        'Tiếp tục mua sắm',
    })
  });
  // END NOTIFICATION ADD TO CART + WISHLIST

  // SETTING MODAL OPACITY XZOOM
  $('.modal-footer button , .modal-header button , .modal').click(function() {
    $('.xzoom-preview , .xzoom-source').css('opacity', '0')
  });
  // END SETTING MODAL OPACITY XZOOM

  // SETTING WOW ANIMATE FOR CATEGORY
  $('.box-category')
    .eq(0)
      .addClass('bounceInLeft')

  $('.box-category')
    .eq(1)
      .addClass('bounceInDown')
      .attr('data-wow-delay', '.1s')

  $('.box-category')
    .eq(2)
      .addClass('bounceInRight')
      .attr('data-wow-delay', '.2s')

  $('.box-category')
    .eq(3)
      .addClass('bounceInLeft')
      .attr('data-wow-delay', '.5s')

  $('.box-category')
    .eq(4)
      .addClass('bounceInUp')
      .attr('data-wow-delay', '.4s')

  $('.box-category')
    .eq(5)
      .addClass('bounceInRight')
      .attr('data-wow-delay', '.3s')

  $('.box-category h4')
    .addClass('flipInX')
    .attr('data-wow-delay', '.7s')

  $('.box-category li:nth-child(1)')
    .addClass('fadeInUp')
    .attr('data-wow-delay', '.9s')

  $('.box-category li:nth-child(2)')
    .addClass('fadeInUp')
    .attr('data-wow-delay', '1s')

  $('.box-category li:nth-child(3)')
    .addClass('fadeInUp')
    .attr('data-wow-delay', '1.1s')

  $('.box-category li:nth-child(4)')
    .addClass('fadeInUp')
    .attr('data-wow-delay', '1.2s')

  $('.box-category li:nth-child(5)')
    .addClass('fadeInUp')
    .attr('data-wow-delay', '1.3s')

  $('.box-category li:nth-child(6)')
    .addClass('fadeInUp')
    .attr('data-wow-delay', '1.4s')
  // END SETTING WOW ANIMATE FOR CATEGORY
});
