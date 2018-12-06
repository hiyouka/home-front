// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());
    $('#show_login').click(function () {
        $('.login').removeClass("hidden");
        $('.register').addClass("hidden");
    });
$('#show_register').click(function () {
    $('.register').removeClass("hidden");
    $('.login').addClass("hidden");
});

function showPopover(target, msg) {
    target.attr("data-content", msg);
    target.attr("data-placement", "top");
    target.popover('show');
    //2秒后消失提示框
    setTimeout(
        function () {
            target.attr("data-content", "");
            target.popover('destroy');
        }, 2000);
}

function resetImageCode() {
    $('#imageCode').attr('src','/code/image?width=200');
}

// Place any jQuery/helper plugins in here.
$(document).ready(function(){
    /** 登录请求 */
    $('#login-button').on('click',function () {
        let div = $(this).parent().parent();
        if(''== div.find('input[name="username"]').val().trim()){
            showPopover(div.find('input[name="username"]'),"请输入有效字符");
            return;
        }
        if(''== div.find('input[name="password"]').val().trim()){
            showPopover(div.find('input[name="password"]'),"请输入有效字符");
            return;
        }
        let btn = $(this).button('loading');
        let user = {"username":div.find('input[name="username"]').val(),"password":div.find('input[name="password"]').val()};
        console.log(JSON.stringify(user));
        $.ajax({
            type:"POST",
            // contentType: "application/json",
            async:true,
            dataType:"json",
            url:"/login?language=zh_CN",
            data:{"username":div.find('input[name="username"]').val(),"password":div.find('input[name="password"]').val(),"imageCode":div.find('input[name="imageCode"]').val()},
            success:function (data) {
                if(data.code == 200){
                    location.href="/front/login";
                }else {
                    console.log(data.msg);
                }
                btn.button('reset');
                if(data.code != 103){
                    resetImageCode();
                }
            }
        })
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    })

});