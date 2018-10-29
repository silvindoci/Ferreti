$("#toggle ").click(function() {

    $(this).toggleClass('on');
    $(".sidenav-header ").toggleClass("active");
    $(".scr").toggle();

});


$(".first ").click(function() {
    $('html,body').animate({
            scrollTop: $(".about ").offset().top
        },
        'slow');
});

$(".tablink ").click(function() {
    $(".sidenav ").toggleClass("active ");
});