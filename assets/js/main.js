$(document).ready(function(){
   
    $('.product_swiper').each(function (index, element) {
        // Har bir swiper'ga unikal class beramiz (masalan swiper-0, swiper-1, ...)
        var swiperClass = 'swiper-' + index;
        $(element).addClass(swiperClass);

        // Ichidagi next/prev tugmalarini tanlab olamiz
        var nextBtn = '.' + swiperClass + ' .swiper-button-next';
        var prevBtn = '.' + swiperClass + ' .swiper-button-prev';

        // Swiper'ni ishga tushiramiz
        new Swiper('.' + swiperClass, {
            loop: true,
            navigation: {
                nextEl: nextBtn,
                prevEl: prevBtn,
            }
        });
    });
    // projects_slider
    var projects_slider = new Swiper('.projects_slider', {
        breakpoints: {
          0: {
            slidesPerView: 1.1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 14,
          },
          992: {
            slidesPerView: 2.7,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2.9,
            spaceBetween: 24,
          },
          1400: {
            slidesPerView:3.2,
            spaceBetween: 39,
          }
        },
      })
      
})