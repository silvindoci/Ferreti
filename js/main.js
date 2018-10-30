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


$('.close_tab').click(function(event) {
    $(this).parents('.tab-pane').removeClass('active');
    $(".nav-tabs .active").removeClass('active');
});