$ (function (){
    'use  strict'

    var winh = $(window).height(),
    LandingH = $('.landing').innerHeight();
    $('.slider , .carousel-item').height((winh - ( LandingH)));
});





