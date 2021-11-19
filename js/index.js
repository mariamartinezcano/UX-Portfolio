$(".aboutMe").click(function() {
    $('html, body').animate({
        scrollTop: $(".about-me").offset().top
    }, 200);
});

$(".myProjects").click(function() {
    $('html, body').animate({
        scrollTop: $(".my-work").offset().top
    }, 200);
});

$(".contactMe").click(function() {
    $('html, body').animate({
        scrollTop: $("footer").offset().top
    }, 200);
});