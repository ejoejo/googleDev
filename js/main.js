$(window).scroll(function () {
    var $scrollPosition = $(window).scrollTop();
    console.log($scrollPosition);

    if ($scrollPosition > 145) {
        $('#search1').fadeIn();
        $('#search2').fadeIn();
    } else {
        $('#search1').fadeOut();
        $('#search2').fadeOut();
    }
});
