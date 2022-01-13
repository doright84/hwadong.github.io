$(document).ready(function () {
    AOS.init();
    // 안내창 닫기
    $('.modal').click(function () {
        $('.modal').fadeOut();
    });
    // ---gotop----
    $(".gotop").hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) { // 400이 넘어가면 고 탑이 슬라이드 다운으로 보이고 아니면 다시 fade out으로 사라짐.
            $('.gotop').fadeIn();
        } else {
            $('.gotop').fadeOut();
        }
    });
    $('.gotop').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        });
    });

});