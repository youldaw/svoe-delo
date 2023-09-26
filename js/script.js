$(function () {

    $('.check-btn input[type="radio"]').on("change", function () {
        $(this).parent().parent().siblings('.filter-list').addClass('active');
    });



    $('.menu-btn').on('click', function (e) {
        e.preventDefault();
        let modal3 = $('.modal3')
        $(modal3).toggleClass('active');
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