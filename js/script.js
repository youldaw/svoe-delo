$(function () {

  $('.check-btn input[type="radio"]').on("change", function () {
    $(this).parent().parent().siblings('.filter-list').addClass('active');
  });



  $(document).on("mouseenter", ".header-block__mid-catalog", function() {
    $(".header-catalog").addClass("active")
  }),
  
  $(document).on("mouseleave", ".header-block__mid-catalog", function() {
      $(".header-catalog").is(":hover") || $(".header-catalog").removeClass("active")
  }),
  
  $(document).on("mouseleave", ".header-catalog", function() {
      $(".header-block__mid-catalog").is(":hover") || $(".header-catalog").removeClass("active")
  }),
  
  $(".header-catalog__inner.active").size() < 1 && $(".header-catalog__left ul li:first, .header-catalog__inner:first").addClass("active"),


  $(document).on("mouseenter", ".header-catalog__left ul li a", function () {
    var e = $(this).parent("li"),
      t = e.index();
    e.addClass("active").siblings().removeClass("active"), $(".header-catalog__inner").eq(t).addClass("active").siblings().removeClass("active")
  }),
  
  $(document).on("mouseenter", ".header-block__mid-catalog", function () {
    $(".header-catalog").addClass("active")
  }),
  
  $(document).on("mouseleave", ".header-block__mid-catalog", function () {
    $(".header-catalog").is(":hover") || $(".header-catalog").removeClass("active")
  }),
  
  $(document).on("mouseleave", ".header-catalog", function () {
    $(".header-block__mid-catalog").is(":hover") || $(".header-catalog").removeClass("active")
  }),
  
  $(".header-catalog__inner.active").size() < 1 && $(".header-catalog__left ul li:first, .header-catalog__inner:first").addClass("active"), 











  $('.menu-btn').on('click', function (e) {
    e.preventDefault();
    let modal3 = $('.modal3')
    $(modal3).toggleClass('active');
  });

  $('.barsToggle').on('click', function (e) {
    e.preventDefault();
    let headerMenuLeft = $('.header__menu-media-wrap')
    $(headerMenuLeft).toggleClass('active');
  });

  $('.filters-btn').on('click', function (e) {
    e.preventDefault();
    let filterModal = $('.filter__modal-wrap')
    $(filterModal).toggleClass('active');
  });


  $('.sorting-mob').on('click', function (e) {
    e.preventDefault();
    let sortingModal = $('.sorting__modal-wrap')
    $(sortingModal).toggleClass('active');
  });


  $('.header__fixed-search').on('click', function (e) {
    e.preventDefault();
    let searchModal = $('.search__modal-wrap')
    $(searchModal).toggleClass('active');
    $(this).toggleClass('active')
  });




  $('.filter__modal-data-link').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');

    if ($('.filter__modal-data-link.active').length > 0) {
      $('.filter__modal-btn1').addClass('active');
      $('.filter__modal-btn2').addClass('active');
    } else {
      $('.filter__modal-btn1').removeClass('active');
      $('.filter__modal-btn2').removeClass('active');
    }
  });



});


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    200: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 30
    }
  }
});