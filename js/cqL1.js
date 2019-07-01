/********************************* 箭头旋转 *************************************** */
$('.cqclickQuestion').each(function(index,target){
    var cqvalue2 = 0;
    $(target).click(function(){
        $(target).next().toggle(10,function(){
            $(target).slideDown();
            cqvalue2 += 180;
            $(this).prev().children().eq(2).rotate({
                animateTo: cqvalue2
            });
        });
    });
});

/******************************** 生成二维码 *************************************** */
jQuery('.qrcode').qrcode({
    render: "canvas", //也可以替换为table
    width: 208,
    height: 208,
    text: "http://www.jq22.com"
});

/************************************ 复选框 ************************************** */
(function ($) {
    $.fn.labelauty = function (tag, tag2) {
        rdochecked(tag);
            $(".cq_Remenber_jia").click(function () {
                if ($(this).prev().prop("checked") == true) {
                    $(this).prev().removeAttr("checked");
                } else {
                    $(this).prev().prop("checked", "checked");
                }
                rdochecked(tag);
            });
        function rdochecked(tag) {
            $('.' + tag).each(function (i) {
                var rdobox = $('.' + tag).eq(i).next();
                if ($('.' + tag).eq(i).prop("checked") == false) {
                    rdobox.removeClass("checked");
                    rdobox.addClass("unchecked");
                } else {
                    rdobox.removeClass("unchecked");
                    rdobox.addClass("checked");
                }
            });
        }
    }
}(jQuery));


/****************************** 登录方式切换 ********************************* */
$('.cqQRlogin').on('click',function(){
    $('.cqLogindiffcut1').hide(null);
    $('.cqLogindiffcut2').show(null);
});
$('.cqPWlogin').on('click',function(){
    $('.cqLogindiffcut1').show(null);
    $('.cqLogindiffcut2').hide(null);
});

/************************ 关于 input 框的 label 的事件************************* */
$('.cqinput').on('focus',function(){
    $(this).prop("placeholder", "");
    $(this).parent().children().eq(2).hide();
    $(this).next().animate({
        display : 'show',
        top : -30,
        fontSize : 14
    },200,'swing',function(){});
});
$('.cqinput').on('blur',function(){
    var $this = $(this).next().text();
    if($(this).attr('value') == ""){
        $(this).next().animate({
            top : 0,
            fontSize : 16
        },200,'swing',function(){});
        $(this).next().hide(1,'swing',function(){
            $(this).prev().prop("placeholder",$this);
        });
        $(this).parent().children().eq(2).show();
    }
});
/***************************** 关于 input 框的密码是否可见 *****************************/
var cqisShow = true;
$(".cqWord .cqBuKeJian").click(function(){
    $(".cqWord .cqBuKeJian").hide();
    $(".cqWord .cqKeJian").show();
});
$(".cqWord .cqKeJian").click(function(){
    $(".cqWord .cqBuKeJian").show();
    $(".cqWord .cqKeJian").hide();
});