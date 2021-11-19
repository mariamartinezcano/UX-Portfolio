$("#aboutMe").click(function() {
    $('html, body').animate({
        scrollTop: $("#about-me").offset().top-120
    }, 500);
});

$("#myProjects").click(function() {
    $('html, body').animate({
        scrollTop: $("#my-work").offset().top-120
    }, 500);
});

$("#contactMe").click(function() {
    $('html, body').animate({
        scrollTop: $("footer").offset().top
    }, 500);
});