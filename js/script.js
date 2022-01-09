$(document).ready(function () {
    AOS.init();
    // 안내창 닫기
    $('.modal').click(function () {
        $('.modal').fadeOut();
    });
    // ---gotop----
    $('.gotop').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        });
    });
 
});