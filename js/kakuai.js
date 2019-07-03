// 左侧导航js
$('.kakuai_icon').click(function() {
    // alert('首页');
    location.href = "starbucks_home.html";

});

//左侧栏右边的菜单按钮事件
$('.kakuai_menu_ic').click(function() {

    $('.kakuai_side_all_default').hide();
    $('.kakuai_side_all_menu').show();
    // $('.kakuai_side_all_menu').show(300, 'easeInQuad', function() {

    // });
});

//左侧栏的关闭事件
$('.kakuai_menu_close').click(function() {
    $('.kakuai_side_all_default').show();
    $('.kakuai_side_all_menu').hide();
    // $('.kakuai_side_all_menu').hide('easeOutQuad', function() {

    // });

});

//logo右边的三个导航栏点击事件
$('.kakuai_three_nav').on('click', 'li', function(event) {

    var target = event.target;
    console.log(target);

    switch (target.getAttribute('class')) {
        case 'kakuai_mendian':
            // alert($(target).text());
            location.href = "map.html";
            break;
        case 'kakuai_my_account':
            location.href = "cqlogin2.html";
            // alert($(target).text());
            break;
        case 'kakuai_menu':
            location.href = "gfMenu.html";
            // alert($(target).text());
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
$('.kakuai_menu_parent').on('click', "li", function() {
    var target = event.target;
    if (target.getAttribute('class') != 'kakuai_menu_line') {
        switch (target.getAttribute('class')) {
            case 'kakuai_menu_mendian':
                // alert($(target).text());
                location.href = "map.html";
                break;
            case 'kakuai_menu_xxjlb':
                location.href = "cqlogin1.html";
                // alert($(target).text());
                break;
            case 'kakuai_menu_module':
                location.href = "gfMenu.html";
                // alert($(target).text());
                break;
            case 'kakuai_menu_xlk':
                location.href = "xlk.html";
                // alert($(target).text());
                break;
            case 'kakuai_menu_kakuai':
                location.href = "kakuai.html";
                // alert($(target).text());
                break;
            case 'kakuai_menu_mobile':
                location.href = "mobile.html";
                // alert($(target).text());
                break;
            case 'kakuai_menu_reserve':
                location.href = "starbucks_reserve.html";
                // alert($(target).text());
                break;
            case 'kakuai_menu_Lxz-roastery':
                location.href = "Lxz-roastery.html";
                // alert($(target).text());
                break;
            default:
                alert($(target).text());
                break;
        }
    }

});