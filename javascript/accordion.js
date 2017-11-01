$(function () {
    $('#accordion li').click(function () {
        $(this).next('ul').slideToggle();
    });
});
