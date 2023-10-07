$(document).ready(function () {
    $('#caroussel').slick({
        autoplay: true,
        arrows: false
    });

    $('.hamburguer').click(function() {
        $('nav').slideToggle();
    })
    
})