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
    });

    //logo点击事件
    $('.menu_icon').click(function() {
        // alert('首页');
        location.href = "starbucks_home.html";
    });

    //左侧栏右边的菜单按钮事件
    $('.menu_menu_ic').click(function() {
        $('.menu_side_all_default').hide();
        $('.menu_side_all_menu').show();
    });

    //左侧栏的关闭事件
    $('.menu_menu_close').click(function() {
        $('.menu_side_all_default').show();
        $('.menu_side_all_menu').hide();
    });

    //logo右边的三个导航栏点击事件
    $('.menu_three_nav').on('click', 'li', function(event) {

        var target = event.target;
        console.log(target);

        switch (target.getAttribute('class')) {
            case 'menu_mendian':
                location.href = "map.html";
                break;
            case 'menu_my_account':

                location.href = "cqLogin2.html";
                break;
            case 'menu_menu':
                location.href = "gfMenu.html";
                break;
        }
    });
    // 点击选项选择产品
    $('.menus_tabs').on('click', 'li', function(even) {
        var target = event.target;
        console.log(target);
        switch (target.getAttribute('class')) {

            case 'mensu_chanp':
                // alert(11);
                location.href = "gfproduct.html";
                break;

            default:
                alert($(target).text());
                break;
        }
    })

    //登录事件  以下有两遍是因为有不一样的样式
    $('.menu_login' || '.menu_login_2').click(function() {

        location.href = "cqLogin2.html";
    });

    $('.menu_login_2').click(function() {

        location.href = "cqLogin2.html";
    });

    //注册事件
    $('.menu_regist_text' || ".menu_regist_2").click(function() {

        location.href = "cqNew.html";
    });

    $(".menu_regist_2").click(function() {

        location.href = "cqNew.html";
    });

    //左侧竖排导航栏事件
    $('.menu_menu_parent').on('click', "li", function(event) {
        var target = event.target;
        if (target.getAttribute('class') != 'menu_menu_line') {
            switch (target.getAttribute('class')) {
                case 'menu_menu_mendian':
                    location.href = "map.html";
                    break;
                case 'menu_menu_xxjlb':

                    location.href = "cqLogin1.html";
                    break;

                case 'menu_menu_xlk':
                    location.href = 'xlk.html';
                    break;

                case 'menu_shanghai_hpf':
                    location.href = 'Lxz-roastery.html';
                    break;
                case 'menu_menu_reserve':
                    location.href = 'starbucks_reserve.html';
                    break;
                case 'menu_menu_mobile':
                    location.href = 'mobile.html';
                    break;
                case 'menu_menu_module':
                    location.href = 'gfMenu.html';
                    break;
                case 'menu_menu_kaikuai':
                    location.href = 'kakuai.html';
                    break;
                case 'menu_about_starbucks':
                    location.href = 'xlk_inChina.html';
                    break;
                case 'menu_coffer_xjt':
                    location.href = 'Lxz-1912.html';
                    break;
                default:
                    alert($(target).text());
                    break;
            }
        }

    });

})













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