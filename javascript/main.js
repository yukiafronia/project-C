$(function(){
    $(".detail").css({
        opacity : 0
    });

    $(".contents").on('click',function(){
        alert("click by");
    });


    $(window).on('load',function(){
        $(".detail").animate({
                opacity : 1

            },
            500
        );
    });
});

// window.onload = function(){
//     alert('javascript');
// }

// $(document).onload( function(){
//     alert('jQuery');
// });

// $(window).on('load',function(){
//     alert('Hello');
// });
