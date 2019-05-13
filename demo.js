$(function () {
    var per = 0;
    $('.btn2').css('display','none');
    $(".pageloading .btn").click(function () {
        var timer = setInterval(function () {
            $('.bar').css('width', per + '%');
            per += 1;
            if (per > 100) {
                $('.pageloading').addClass('complete');
                setTimeout(function () {
                    setTimeout(() => {
                        $('.btn2').css('display', 'block');
                    }, 1000);                   
                    $(".monsterText").html("<h2><i>we are</i> <br> monster</h2>")
                    $('.btn2').click(function () {
                        location.reload(window);
                    })
                }, 2000);             
                clearInterval(timer);
            }
        }, 10)
    })
   
})