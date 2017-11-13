$(function(){

  $(".menu").animate({
      opacity : 1,
      },
      500
  );
//施設一覧ＵＩのスクリプト
$(".sisetu").on('mouseover',function(){
    var scaleSize = 1.2;    //大きさ設定
    $("#bottom").css({
    transform: 'scale('+ scaleSize + ')',
    },500
  );
})

$(".sisetu").on('mouseout',function(){
    var scaleSize = 1;
    $("#bottom").css({
    transform: 'scale('+ scaleSize + ')',
    },
  );
})

  $(".sisetu").on('click',function(){
      var movePoint = -320 ;    // 移動位置
      var duration = 300 ;      // 移動時間
           console.log('距離:',movePoint,'時間:',duration)
  $("#bottom").css({
          transform: 'translateY(' + movePoint + 'px)',
          transition: duration + 'ms linear'
        },500
      );
    setTimeout(function(){
    window.location.href = "./ichiran.html";
  },350);
  },
);
});
