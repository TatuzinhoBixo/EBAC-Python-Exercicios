$(document).ready(function () {
    $('#carroussel').slick({
        autoplay: true,
        arrows: false
    });

    $('.hamburger').click(function() {
        $('nav').slideToggle();
    })
})