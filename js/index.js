$(document).ready(function() {

    $(".prd-show-item").mouseenter(function() {
        $(this).addClass("prd-show-item-hover");
    });
    $('.prd-show-item').mouseleave(function() {
        $(this).removeClass("prd-show-item-hover");
    });


    $(".dropdown").mouseenter(function() {
        $(".dropdown-t").css('background-color', "#fff");
        $(".dropdown-b").css('display', "block");
        $(".dropdown-t em").html("");
    });
    $('.dropdown').mouseleave(function() {
        $(".dropdown-t").css('background-color', "#F9F9F9");
        $(".dropdown-b").css('display', "none");
        $(".dropdown-t em").html("");
    });
    // changeImg();
    // $(".prd-banner-origin>li").mouseenter(function() {
    //     $(this).addClass("prd-origin-hover").siblings().removeClass("prd-origin-hover");
    // });
    //初始化 
    //lun();
    changeImg2();

});

function changeImg() {
    /*获取图片和索引的数组*/
    var $imgs = $(".prd-banner-box li");
    var $nums = $(".prd-banner-origin li");

    var isStop = false;
    var index = 0;

    $nums.eq(index).addClass("prd-origin-hover");
    $nums.eq(index).siblings().removeClass("prd-origin-hover");
    $imgs.eq(index).show();
    // $imgs.eq(index).fadeIn();
    /*鼠标悬停在数字上的事件*/
    $nums.mouseover(function() {
        isStop = true;
        /*先把数字的背景改了*/
        $(this).addClass("prd-origin-hover").siblings().removeClass("prd-origin-hover");

        /*图片的索引和数字的索引是对应的，所以获取当前的数字的索引就可以获得图片，从而对图片进行操作*/
        index = $nums.index(this);
        $imgs.eq(index).show("slow");
        $imgs.eq(index).siblings().hide("slow");

        // $imgs.eq(index).fadeIn();
        // $imgs.eq(index).siblings().fadeOut();
    }).mouseout(function() { isStop = false });
    /*设置循环*/
    setInterval(function() {

        if (isStop) return;
        if (index >= 6) index = -1;
        index++;
        $nums.eq(index).addClass("prd-origin-hover").siblings().removeClass("prd-origin-hover");
        $imgs.eq(index).show("slow");
        $imgs.eq(index).siblings().hide("slow");
        // $imgs.eq(index).fadeIn();
        // $imgs.eq(index).siblings().fadeOut();

    }, 2000);
}


function lun() {
    var banner_index = 1;

    $(".prd-banner-box li  img").css('display', 'none');
    $(".prd-banner-box li  img").eq(0).css('display', 'block');
    $(".prd-banner-origin li").eq(0).addClass("prd-origin-hover").siblings().removeClass("prd-origin-hover");
    $(".prd-banner-origin li").hover(function() {
        var index = $(this).index();
        $(".prd-banner-box li  img").css('display', 'none');
        $(".prd-banner-box li  img").eq(index).css('display', 'block');
        $(".prd-banner-origin li").eq(index).addClass("prd-origin-hover").siblings().removeClass("prd-origin-hover");
    });

    setInterval(function() {

        if (banner_index >= 7) {
            banner_index = 0;
        };
        $(".prd-banner-box li  img").css('display', 'none');
        $(".prd-banner-box li  img").eq(banner_index).css('display', 'block');
        $(".prd-banner-origin li").eq(banner_index).addClass("prd-origin-hover").siblings().removeClass("prd-origin-hover");
        banner_index++;
    }, 2000);

}

function changeImg2() {
    /*获取图片和索引的数组*/
    var $imgs = $(".prd-banner-box li");
    var $nums = $(".prd-banner-origin li");

    var isStop = false;
    var index = 0;

    $nums.eq(index).addClass("prd-origin-hover");
    $nums.eq(index).siblings().removeClass("prd-origin-hover");
    $imgs.eq(index).css('display', 'block');
    // $imgs.eq(index).fadeIn();
    /*鼠标悬停在数字上的事件*/
    $nums.mouseover(function() {
        isStop = true;
        /*先把数字的背景改了*/
        $(this).addClass("prd-origin-hover").siblings().removeClass("prd-origin-hover");

        /*图片的索引和数字的索引是对应的，所以获取当前的数字的索引就可以获得图片，从而对图片进行操作*/
        index = $nums.index(this);
        $imgs.eq(index).css('display', 'block');
        $imgs.eq(index).siblings().css('display', 'none');

        // $imgs.eq(index).fadeIn();
        // $imgs.eq(index).siblings().fadeOut();
    }).mouseout(function() { isStop = false });
    /*设置循环*/
    setInterval(function() {

        if (isStop) return;
        if (index >= 6) index = -1;
        index++;
        $nums.eq(index).addClass("prd-origin-hover").siblings().removeClass("prd-origin-hover");
        $imgs.eq(index).css('display', 'block');
        $imgs.eq(index).siblings().css('display', 'none');
        // $imgs.eq(index).fadeIn();
        // $imgs.eq(index).siblings().fadeOut();

    }, 2000);
}