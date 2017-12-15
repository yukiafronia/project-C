$(function () {

    $(".bottom").on('click', function () {
        $(".detail").animate({
                opacity: 0
            },
            500
        );
        $({deg: 0}).animate({deg: 360}, {
                duration: 1300,
                progress: function () {
                    $('.detail').css({
                        transform: 'rotateY(' + this.deg + 'deg)'
                    });
                },
            },
            500
        );
        setTimeout(function () {
            window.location.href = "./ShisetsuYoyaku.html";
        }, 600);
    });

    $(".bottom2").on('click', function () {

        $(".detail").animate({
                opacity: 0
            },
            500
        );
        $({deg: 0}).animate({deg: 360}, {
                duration: 1300,
                progress: function () {
                    $('.detail').css({
                        transform: 'rotateY(' + this.deg + 'deg)'
                    });
                },
            },
            500
        );
        setTimeout(function () {
            window.location.href = "./How_to_use.html";
        }, 600);

    });

    $("#login").on('click', function () {
        $(".detail").animate({
                opacity: 0
            },
            500
        );
        $({deg: 0}).animate({deg: 360}, {
                duration: 1300,
                progress: function () {
                    $('.detail').css({
                        transform: 'rotateY(' + this.deg + 'deg)'
                    });
                },
            },
            500
        );
        setTimeout(function () {
            window.location.href = "./mypage.php";
        }, 600);

    });


    $(window).on('load', function () {
        $(".detail").animate({
                opacity: 1
            },
            500
        );
    });
});
