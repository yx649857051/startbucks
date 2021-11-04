/**
 * author:yx 
 * 2019/6/28
 */
$(document).ready(function() {
    //logo点击事件
    $('.reserve_icon').click(function() {
        location.href = "starbucks_home.html";
    });

    //左侧栏右边的菜单按钮事件
    $('.reserve_menu_ic').click(function() {
        $('.reserve_side_all_default').hide();
        $('.reserve_side_all_menu').show();
    });

    //左侧栏的关闭事件
    $('.reserve_menu_close').click(function() {
        $('.reserve_side_all_default').show();
        $('.reserve_side_all_menu').hide();
    });

    //logo右边的三个导航栏点击事件
    $('.reserve_three_nav').on('click', 'li', function(event) {
        var target = event.target;
        switch (target.getAttribute('class')) {
            case 'reserve_mendian':
                location.href = "map.html";
                break;
            case 'reserve_my_account':
                location.href = "cqLogin2.html";
                break;
            case 'reserve_menu':
                location.href = "gfMenu.html";
                break;
        }
    });

    //登录事件  以下有两遍是因为有不一样的样式
    $('.reserve_login' || '.reserve_login_2').click(function() {
        location.href = "cqLogin2.html";
    });

    $('.reserve_login_2').click(function() {
        location.href = "cqLogin2.html";
    });

    //注册事件
    $('.reserve_regist_text' || ".reserve_regist_2").click(function() {
        location.href = "cqNew.html";
    });

    $(".reserve_regist_2").click(function() {
        location.href = "cqNew.html";
    });

    //左侧竖排导航栏事件
    $('.reserve_menu_parent').on('click', "li", function(event) {
        var target = event.target;
        if (target.getAttribute('class') != 'reserve_menu_line') {
            switch (target.getAttribute('class')) {
                case 'reserve_menu_mendian':
                    location.href = "map.html";
                    break;
                case 'reserve_menu_xxjlb':
                    location.href = "cqLogin1.html";
                    break;
                case 'reserve_menu_xlk':
                    location.href = 'xlk.html';
                    break;
                case 'reserve_shanghai_hpf':
                    location.href = 'Lxz-roastery.html';
                    break;
                case 'reserve_menu_reserve':
                    location.href = 'starbucks_reserve.html';
                    break;
                case 'reserve_menu_mobile':
                    location.href = 'mobile.html';
                    break;
                case 'reserve_menu_module':
                    location.href = 'gfMenu.html';
                    break;
                case 'reserve_coffer_xjt':
                    location.href = 'Lxz-1912.html';
                    break;
                case 'reserve_about_starbucks':
                    location.href = 'xlk_inChina.html';
                    break;
                case 'reserve_menu_kakuai':
                    location.href = 'kakuai.html';
                    break;
                default:
                    alert($(target).text());
                    break;
            }
        }
    });
});