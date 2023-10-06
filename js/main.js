$(document).ready(function () {
    $('#caroussel').slick({
        autoplay: true,
        arrows: false
    });

    $('.hamburger').click(function() {
        $('nav').slideToggle();
    })
})