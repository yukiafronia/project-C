$(function () {

    initScene3();

    function initScene3 () {

        var $container = $('#scene-3'),            // コンテナー
            $masks     = $container.find('.mask'), // マスク
            $lines     = $masks.find('.line'),     // 境界線
            maskLength = $masks.length,            // マスクの総数
            maskData   = [];
        $masks.each(function (i) {
            maskData[i] = { left: 0 };
        });

        $container.on({
            mouseenter: function () {
                resizeMask($(this).index());
            },
            mouseleave: function () {
                resizeMask(-1);
            }
        }, '.mask');
        resizeMask(-1);
        function resizeMask (active) {
            var w = $container.width(),
                h = $container.height();
            $masks.each(function (i) {

                var $this = $(this),
                    l;
                if (active === -1) {
                    l = w / maskLength * i;
                } else if (active < i) {
                    l = w * (1 - 0.1 * (maskLength - i));
                } else {
                    l = w * 0.05 * i;
                }

                $(maskData[i]).stop(true).animate({ left: l }, {
                    duration: 1000,
                    easing: 'easeOutQuart',

                    progress: function () {
                        var now = this.left;
                        $this.css({
                            clip: 'rect(0px ' + w + 'px ' +
                                    h + 'px ' + now + 'px)'
                        });
                        $this.find($lines).css({
                            left: now
                        });
                    }
                });
            });
        }
    }

});
