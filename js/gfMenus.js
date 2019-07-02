// 添加图片定位，从json获取
$(function() {
        $.ajax({
            url: '../data/gfMenus.json',
            type: 'get',
            dataType: 'json',
            success: function(json) {
                // console.log(json);
                var result = '';
                $.each(json, function(index, val) {
                    // console.log(index, val);

                    result += '<li class="menus_tu "><img src="' + val.picture + '" alt="" /><p>' + val.text + '</p></li>';
                    // console.log(result);
                });
                $('.menus_tel').html(result);
            }
        })
    })
    // 大图点击跳转
    // $('.menus_img').click(function() {

// })


// menus_drink













// 搜索菜单点击
// 点击取消
$('.menus_btn ').click(function() {
    $('.menus_ad').css('display', 'none');
    $('.menus_header').css('display', 'none');
    $('.menus_wrapper').css('display', 'none');
    $('.menus_featued-item').css('display', 'none');
    $('.menus_drink').css('display', 'none');
    $('.menus_btn ').css('display', 'none');
});
// 点击显示
$('.menus_close ').click(function() {
    $('.mensu_middle ').css('display', 'block');
    $('.menus_ad').css('display', 'block');
    $('.menus_header').css('display', 'block');
    $('.menus_wrapper').css('display', 'block');
    $('.menus_featued-item').css('display', 'block');
    $('.menus_drink').css('display', 'block');
    $('.menus_btn ').css('display', 'block');
});