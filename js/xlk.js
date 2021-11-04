//logo点击事件
$('.xlk_icon').click(function() {
    location.href = "starbucks_home.html";
});

$('.xlk_home_link1').click(function() {
    location.href = 'xlk_supervise.html';
})

$('.xlk_home_link2').click(function() {
    location.href = 'xlk_bills.html';
})

//左侧栏右边的菜单按钮事件
$('.xlk_menu_ic').click(function() {
    $('.xlk_side_all_default').hide();
    $('.xlk_side_all_menu').show();
});

//左侧栏的关闭事件
$('.xlk_menu_close').click(function() {
    $('.xlk_side_all_default').show();
    $('.xlk_side_all_menu').hide();
});

//logo右边的三个导航栏点击事件
$('.xlk_three_nav').on('click', 'li', function(event) {
    var target = event.target;
    switch (target.getAttribute('class')) {
        case 'xlk_mendian':
            location.href = "map.html";
            break;
        case 'xlk_my_account':
            location.href = "cqLogin2.html";
            break;
        case 'xlk_menu':
            location.href = "gfMenu.html";
            break;
    }
});

//登录事件
$('.xlk_login' || '.xlk_login_2').click(function() {
    location.href = "cqLogin2.html";
});

$('.xlk_login_2').click(function() {
    location.href = "cqLogin2.html";
});

//注册事件
$('.xlk_regist_text' || ".xlk_regist_2").click(function() {
    location.href = "cqNew.html";
});

$(".xlk_regist_2").click(function() {
    location.href = "cqNew.html";
});

//左侧竖排导航栏事件
$('.xlk_menu_parent').on('click', "li", function(event) {
    var target = event.target;
    if (target.getAttribute('class') != 'home_menu_line') {
        switch (target.getAttribute('class')) {
            case 'xlk_menu_mendian':
                location.href = "map.html";
                break;
            case 'xlk_menu_xxjlb':
                location.href = "cqLogin1.html";
                break;
            case 'xlk_menu_app':
                location.href = "mobile.html";
                break;
            case 'xlk_menu_xlk':
                location.href = 'xlk.html';
                break;
            case 'xlk_menu_reserve':
                location.href = 'starbucks_reserve.html';
                break;
            case 'xlk_menu_roastery':
                location.href = 'lxz-roastery.html';
                break;
            case 'xlk_menu_gyxbk':
                location.href = 'xlk_inChina.html';
                break;
            case 'xlk_menu_xjt':
                location.href = 'lxz-1912.html';
                break;
            case 'xlk_menu_module':
                location.href = 'gfMenu.html';
                break;
            default:
                alert($(target).text());
                break;
        }
    }
});