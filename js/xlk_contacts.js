//logo点击事件
$('.xlk_icon').click(function() {
    // alert('首页');
    location.href = "starbucks_home.html";

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
    console.log(target);

    switch (target.getAttribute('class')) {
        case 'xlk_mendian':
            // alert($(target).text());
            location.href = "map.html";
            break;
        case 'xlk_my_account':

            alert($(target).text());
            break;
        case 'xlk_menu':
            alert($(target).text());
            break;
    }
});

//登录事件
$('.xlk_login').click(function() {
    alert('login');
});

//注册事件
$('.xlk_regist_text').click(function() {
    alert('regist');
});

//左侧竖排导航栏事件
$('.xlk_menu_parent').on('click', "li", function() {
    var target = event.target;
    if (target.getAttribute('class') != 'home_menu_line') {
        switch (target.getAttribute('class')) {
            case 'xlk_menu_mendian':
                alert($(target).text());
                location.href = "map.html";
                break;
            case 'xlk_menu_xxjlb':

                alert($(target).text());
                break;
            case 'xlk_menu':
                alert($(target).text());
                break;
            case 'xlk_menu_xlk':
                location.href = 'xlk.html';
                break;
            default:
                alert($(target).text());
                break;
        }
    }

});