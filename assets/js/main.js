$(function () {

    // Tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Smooth scroll
    var scroll = new SmoothScroll('a[href*="#"]');

    // Jarallax
    $('.jarallax').jarallax({
        speed: 0.5
    });
});