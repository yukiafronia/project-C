$(function(){
  var zensen = 1;
  var nibanme = 2;

  //透過処理
  $(".menu").animate({
      opacity : 1,
      },
      500
  );

//施設一覧ＵＩのスクリプト
//大きくなる処理
$(".sisetu").on('mouseover',function(){
    var scaleSize = 1.2;    //大きさ設定
    $(".sisetu").css({
    transform: 'scale('+ scaleSize + ')',
    'z-index': zensen
    },500
  );
})
//元のサイズに戻る処理
$(".sisetu").on('mouseout',function(){
    var scaleSize = 1;
    $(".sisetu").css({
    transform: 'scale('+ scaleSize + ')',
    'z-index': nibanme
    },
  );
})
  $(".sisetu").on('click',function(){

    //透過処理
    $(".sisetu").animate({
        opacity : 0,
        },
        1
    );

    //移動処理
      var movePoint = -150 ;    // 移動位置
      var duration = 300 ;      // 移動時間
           console.log('距離:',movePoint,'時間:',duration)
  $("#bottom").css({
          transform: 'translateY(' + movePoint + 'px)',
          transition: duration + 'ms linear'
        },500
      );
    setTimeout(function(){
    window.location.href = "./syubetu_yoyaku.html";
  },350);
  },
);

//利用目的一覧ＵＩのスクリプト
//大きくなる処理
$(".mokuteki").on('mouseover',function(){
    var scaleSize = 1.2;    //大きさ設定
    $(".mokuteki").css({
    transform: 'scale('+ scaleSize + ')',
        'z-index': zensen
    },500
  );
})
//元のサイズに戻る処理
$(".mokuteki").on('mouseout',function(){
    var scaleSize = 1;
    $(".mokuteki").css({
    transform: 'scale('+ scaleSize + ')',
    'z-index': nibanme
    },
  );
})
  $(".mokuteki").on('click',function(){

    //透過処理
    $(".mokuteki").animate({
        opacity : 0,
        },
        1
    );

    //移動処理
      var movePoint = -150 ;    // 移動位置
      var duration = 300 ;      // 移動時間
           console.log('距離:',movePoint,'時間:',duration)
  $(".mokuteki").css({
          transform: 'translateY(' + movePoint + 'px)',
          transition: duration + 'ms linear'
        },500
      );
    setTimeout(function(){
    window.location.href = "./purpose.html";
  },350);
  },
);

//利用料金一覧ＵＩのスクリプト
//大きくなる処理
$(".ryoukin").on('mouseover',function(){
    var scaleSize = 1.2;    //大きさ設定
    $(".ryoukin").css({
    transform: 'scale('+ scaleSize + ')',
    'z-index': zensen
    },500
  );
})
//元のサイズに戻る処理
$(".ryoukin").on('mouseout',function(){
    var scaleSize = 1;
    $(".ryoukin").css({
    transform: 'scale('+ scaleSize + ')',
    'z-index': nibanme
    },
  );
})

  $(".ryoukin").on('click',function(){

    //透過処理
    $(".ryoukin").animate({
        opacity : 0,
        },
        1
    );

    //移動処理
      var movePoint = -150 ;    // 移動位置
      var duration = 300 ;      // 移動時間
           console.log('距離:',movePoint,'時間:',duration)
  $(".ryoukin").css({
          transform: 'translateY(' + movePoint + 'px)',
          transition: duration + 'ms linear'
        },500
      );
    setTimeout(function(){
    window.location.href = "./fare.html";
  },350);
  },
);

//利用建物一覧ＵＩのスクリプト
//大きくなる処理
$(".tatemono").on('mouseover',function(){
    var scaleSize = 1.2;    //大きさ設定
    $(".tatemono").css({
    transform: 'scale('+ scaleSize + ')',
    'z-index': zensen
    },500
  );
})
//元のサイズに戻る処理
$(".tatemono").on('mouseout',function(){
    var scaleSize = 1;
    $(".tatemono").css({
    transform: 'scale('+ scaleSize + ')',
    'z-index': nibanme
    },
  );
})

  $(".tatemono").on('click',function(){

    //透過処理
    $(".tatemono").animate({
        opacity : 0,
        },
        1
    );

    //移動処理
      var movePoint = -150 ;    // 移動位置
      var duration = 300 ;      // 移動時間
           console.log('距離:',movePoint,'時間:',duration)
  $(".tatemono").css({
          transform: 'translateY(' + movePoint + 'px)',
          transition: duration + 'ms linear'
        },500
      );
    setTimeout(function(){
    window.location.href = "./kind.html";
  },350);
  },
);

});
