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

    $(".bottom3").on('click', function () {
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

    $("#logout").on('click', function () {
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
            window.location.href = "./index.html";
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

$(function () {

    $('.page-header').each(function () {

        var $window = $(window), // Window オブジェクト
            $header = $(this),   // ヘッダー

            // ヘッダーのクローン
            $headerClone = $header.contents().clone(),

            // ヘッダーのクローンのコンテナー
            $headerCloneContainer = $('<div class="page-header-clone"></div>'),

            // HTML の上辺からヘッダーの底辺までの距離 = ヘッダーのトップ位置 + ヘッダーの高さ
            threshold = $header.offset().top + $header.outerHeight();

        // コンテナーにヘッダーのクローンを挿入
        $headerCloneContainer.append($headerClone);

        // コンテナーを body の最後に挿入
        $headerCloneContainer.appendTo('body');

        // スクロール時に処理を実行するが、回数を 1 秒間あたり 15 までに制限
        $(window).on('scroll', $.throttle(1000 / 15, function () {
            if ($window.scrollTop() > threshold) {
                $headerCloneContainer.addClass('visible');
            } else {
                $headerCloneContainer.removeClass('visible');
            }
        }));

        // スクロールイベントを発生させ、初期位置を決定
        $window.trigger('scroll');
    });

});


$(function () {

    // slideshow クラスを持った要素ごとに処理を実行
    $('.slideshow').each(function () {

        var $slides = $(this).find('img'), // すべてのスライド
            slideCount = $slides.length,   // スライドの点数
            currentIndex = 0;              // 現在のスライドを示すインデックス

        // 1 番目のスライドをフェードインで表示
        $slides.eq(currentIndex).fadeIn();

        // 7500 ミリ秒ごとに showNextSlide 関数を実行
        setInterval(showNextSlide, 7500);

        // 次のスライドを表示する関数
        function showNextSlide () {

            // 次に表示するスライドのインデックス
            // (もし最後のスライドなら最初に戻る)
            var nextIndex = (currentIndex + 1) % slideCount;

            // 現在のスライドをフェードアウト
            $slides.eq(currentIndex).fadeOut();

            // 次のスライドをフェードイン
            $slides.eq(nextIndex).fadeIn();

            // 現在のスライドのインデックスを更新
            currentIndex = nextIndex;
        }

    });

});

$(function () {

    /*
     * Tabs
     */
    $('.work-section').each(function () {

        var $container = $(this),                            // a
            $navItems = $container.find('.tabs-nav li'),     // b
            $highlight = $container.find('.tabs-highlight'); // c
        // タブの各要素を jQuery オブジェクト化
        // a タブとパネルを含む全体のコンテナー
        // b タブのリスト
        // c 選択中タブのハイライト

        // jQuery UI Tabs を実行
        $container.tabs({

            // 非表示にする際のアニメーション
            hide: { duration: 250 },

            // 表示する際のアニメーション
            show: { duration: 125 },

            // 読み込み時とタブ選択時にハイライトの位置を調整
            create: moveHighlight,
            activate: moveHighlight
        });

        // ハイライトの位置を調整する関数
        function moveHighlight (event, ui) {
            var $newTab = ui.newTab || ui.tab,  // 新しく選択されたタブの jQuery オブジェクト
                left = $newTab.position().left; // 新しく選択されたタブの左位置

            // ハイライトの位置をアニメーション
            $highlight.animate({ left: left }, 500, 'easeOutExpo');
        }
    });

});

$(function(){
    //
    var duration = 300;

    // buttons2 ----------------------------------------
    $('#buttons2 button').each(function(index){
        //var pos = Math.random() * 80 - 40;
        var pos = index * 40 - 40;
        $(this).css('top', pos);
    })
    .on('mouseover', function(){
        var $btn = $(this).stop(true).animate({
            backgroundColor: '#faee00',
            color: '#000'
        }, duration);
        $btn.find('img:first-child').stop(true).animate({opacity: 0}, duration);
        $btn.find('img:nth-child(2)').stop(true).animate({opacity: 1}, duration);
    })
    .on('mouseout', function(){
        var $btn = $(this).stop(true).animate({
            backgroundColor: '#fff',
            color: '#01b169',
        }, duration);
        $btn.find('img:first-child').stop(true).animate({opacity: 1}, duration);
        $btn.find('img:nth-child(2)').stop(true).animate({opacity: 0}, duration);
    });


});
