$(".aboutMe").click(function() {
    $('html, body').animate({
        scrollTop: $("#about-me").offset().top-120
    }, 1000);
});

$(".myProjects").click(function() {
    $('html, body').animate({
        scrollTop: $("#my-work").offset().top-120
    }, 1000);
});

$(".contactMe").click(function() {
    $('html, body').animate({
        scrollTop: $("footer").offset().top
    }, 1000);
});