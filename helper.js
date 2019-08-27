$('.storyCard').click(function() {
    console.log($(this).data("num"));
    var num = $(this).data("num");
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#post" + num).offset().top
    }, 2000);
})

