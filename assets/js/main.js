$(window).scroll(function(){
    $('.line').css({
        transform:`translateY(${scrollY+10} + 'px')`
        // height: scrollY/1000 + 'px'
    })
        var comunityTop = $('.comunity').offset().top;
        var scrollTop = $(window).scrollTop();
    
        if (scrollTop >= comunityTop) {
            $('.header').addClass('header_comunity');
        } else {
            $('.header').removeClass('header_comunity');
        }
    
    
})