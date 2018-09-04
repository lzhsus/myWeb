$(function () {
    //导航条 里面的 导航
    //a 标签的 移入 移出 事件
    $("#nav_id_click>li>a").hover(
        function () {
            $(this).parents("ul").find("li").removeClass("active");
            $(this).parent().toggleClass("active");
            $(this).css("color", "red");
        }, function () {
            $(this).parent().toggleClass("active");
            $(this).css("color", "#777");
        }
    )
    var swiper = new Swiper('.swiper-container', {
        initialSlide :2,    //首页默认 图片 3
        grabCursor : true,  //移入  会出现 小手
        pagination: {       //对应的小圆圈
            el: '.swiper-pagination',
        },
        //等同于以下设置 autoplay:true, 延迟播放 300s
        autoplay:true,
        speed:1000,  //移动一张图片需要的时间
        loop : true,    //循环移动
        // effect : 'cube',        //3D 图片
        effect : 'fade',    //淡入 淡出
        // keyboard : true,  //键盘控制
        // mousewheel: true,   //鼠标控制
    });
    //鼠标覆盖停止自动切换
    swiper.el.onmouseover = function(){
        swiper.autoplay.stop();
    }
    //鼠标离开开始自动切换
    swiper.el.onmouseout = function(){
        swiper.autoplay.start();
    }
});