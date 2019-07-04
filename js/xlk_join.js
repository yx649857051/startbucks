//logo点击事件
$('.xlk_icon').click(function() {
    // alert('首页');
    location.href = "starbucks_home.html";

});

$('.join_inChina_link1').click(function() {

    location.href = "xlk_inChina.html";

});

$('.join_inChina_link2').click(function() {

    location.href = "xlk_contacts.html";

});

//左侧栏右边的菜单按钮事件
$('.xlk_menu_ic').click(function() {

    $('.xlk_side_all_default').hide();
    $('.xlk_side_all_menu').show();
    // $('.home_side_all_menu').show(300, 'easeInQuad', function() {

    // });
});

//左侧栏的关闭事件
$('.xlk_menu_close').click(function() {
    $('.xlk_side_all_default').show();
    $('.xlk_side_all_menu').hide();
    // $('.home_side_all_menu').hide('easeOutQuad', function() {

    // });

});

//logo右边的三个导航栏点击事件
$('.xlk_three_nav').on('click', 'li', function(event) {

    var target = event.target;
    // console.log(target);

    switch (target.getAttribute('class')) {
        case 'join_mendian':
            // alert($(target).text());
            location.href = "map.html";
            break;
        case 'join_my_account':

            // alert($(target).text());
            location.href = "cqLogin2.html";
            break;
        case 'join_menu':
            // alert($(target).text());
            location.href = "gfMenu.html";
            break;
    }
});

//登录事件
$('.xlk_login' || '.xlk_login_2').click(function() {
    // alert('login');
    location.href = "cqLogin2.html";
});

$('.xlk_login_2').click(function() {
    // alert('login');
    location.href = "cqLogin2.html";
});

//注册事件
$('.xlk_regist_text' || ".xlk_regist_2").click(function() {
    // alert('regist');
    location.href = "cqNew.html";
});

$(".xlk_regist_2").click(function() {
    // alert('regist');
    location.href = "cqNew.html";
});

//左侧竖排导航栏事件
$('.xlk_menu_parent').on('click', "li", function() {
    var target = event.target;
    if (target.getAttribute('class') != 'home_menu_line') {
        switch (target.getAttribute('class')) {
            case 'join_menu_mendian':
                // alert($(target).text());
                location.href = "map.html";
                break;
            case 'join_menu_xxjlb':

                // alert($(target).text());
                location.href = "cqLogin1.html";
                break;
            case 'join_menu_app':
                // alert($(target).text());
                location.href = "mobile.html";
                break;
            case 'join_menu_xlk':
                location.href = 'xlk.html';
                break;
            case 'join_menu_reserve':
                location.href = 'starbucks_reserve.html';
                break;
            case 'join_menu_roastery':
                location.href = 'lxz-roastery.html';
                break;
            case 'join_menu_gyxbk':
                location.href = 'xlk_inChina.html';
                break;
            case 'join_menu_xjt':
                location.href = 'lxz-1912.html';
                break;
            case 'join_menu_module':
                location.href = 'gfMenu.html';
                break;
            default:
                alert($(target).text());
                break;
        }
    }

});