// 左侧导航js
$('.kakuai_icon').click(function() {
    location.href = "starbucks_home.html";
});

//左侧栏右边的菜单按钮事件
$('.kakuai_menu_ic').click(function() {
    $('.kakuai_side_all_default').hide();
    $('.kakuai_side_all_menu').show();
});

//左侧栏的关闭事件
$('.kakuai_menu_close').click(function() {
    $('.kakuai_side_all_default').show();
    $('.kakuai_side_all_menu').hide();
});

//logo右边的三个导航栏点击事件
$('.kakuai_three_nav').on('click', 'li', function(event) {
    var target = event.target;
    switch (target.getAttribute('class')) {
        case 'kakuai_mendian':
            location.href = "map.html";
            break;
        case 'kakuai_my_account':
            location.href = "cqlogin2.html";
            break;
        case 'kakuai_menu':
            location.href = "gfMenu.html";
            break;
    }
});

//登录事件
$('.kakuai_login').click(function() {
    alert('login');
});

//注册事件
$('.kakuai_regist_text').click(function() {
    alert('regist');
});

//左侧竖排导航栏事件
$('.kakuai_menu_parent').on('click', "li", function(event) {
    var target = event.target;
    if (target.getAttribute('class') != 'kakuai_menu_line') {
        switch (target.getAttribute('class')) {
            case 'kakuai_menu_mendian':
                location.href = "map.html";
                break;
            case 'kakuai_menu_xxjlb':
                location.href = "cqlogin1.html";
                break;
            case 'kakuai_menu_module':
                location.href = "gfMenu.html";
                break;
            case 'kakuai_menu_xlk':
                location.href = "xlk.html";
                break;
            case 'kakuai_menu_kakuai':
                location.href = "kakuai.html";
                break;
            case 'kakuai_menu_mobile':
                location.href = "mobile.html";
                break;
            case 'kakuai_menu_reserve':
                location.href = "starbucks_reserve.html";
                break;
            case 'kakuai_menu_Lxz-roastery':
                location.href = "Lxz-roastery.html";
                break;
            case 'kakuai_meun_Lxz1912':
                location.href = "Lxz-1912.html";
                break;
            case 'kakuai_menu_reserve':
                location.href = "starbucks_reserve.html";
                break;
            case 'kakuai_menu_xlk_inChina':
                location.href = "xlk_inChina.html";
                break;
            default:
                alert($(target).text());
                break;
        }
    }
});