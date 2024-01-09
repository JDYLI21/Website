/* Change navbar as well as the page to a clone of "our work" page on scroll */
$(document).ready(function() {
    $(window).one('scroll', function() {
        var scrollTop = $(window).scrollTop();
            if (scrollTop > 0 && scrollTop <= 10000) {
                $("img").hide();
                $('.body_content').animate({"margin-top": "5%"});
                $('html, body').stop().animate({scrollTop: 1}, 1);
        }
    });
});

$(document).ready(function() {
   var interval = setInterval(function() {
        $('.downarrow').delay(1000).animate({top: "90%"}, 500);
        $('.downarrow').animate({top: "92.5%"}, 500);
   }, 2000);
});