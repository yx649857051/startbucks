// 左侧导航js
$('.mobile_icon').click(function() {
    // alert('首页');
    location.href = "starbucks_home.html";

});

//左侧栏右边的菜单按钮事件
$('.mobile_menu_ic').click(function() {

    $('.mobile_side_all_default').hide();
    $('.mobile_side_all_menu').show();
    // $('.mobile_side_all_menu').show(300, 'easeInQuad', function() {

    // });
});

//左侧栏的关闭事件
$('.mobile_menu_close').click(function() {
    $('.mobile_side_all_default').show();
    $('.mobile_side_all_menu').hide();
    // $('.mobile_side_all_menu').hide('easeOutQuad', function() {

    // });

});

//logo右边的三个导航栏点击事件
$('.mobile_three_nav').on('click', 'li', function(event) {

    var target = event.target;
    console.log(target);

    switch (target.getAttribute('class')) {
        case 'mobile_mendian':
            // alert($(target).text());
            location.href = "mobile.html";
            break;
        case 'mobile_my_account':

            alert($(target).text());
            break;
        case 'mobile_menu':
            alert($(target).text());
            break;
    }
});

//登录事件
$('.mobile_login').click(function() {
    alert('login');
});

//注册事件
$('.mobile_regist_text').click(function() {
    alert('regist');
});

//左侧竖排导航栏事件
$('.mobile_menu_parent').on('click', "li", function() {
    var target = event.target;
    if (target.getAttribute('class') != 'mobile_menu_line') {
        switch (target.getAttribute('class')) {
            case 'mobile_menu_mendian':
                alert($(target).text());
                location.href = "mobile.html";
                break;
            case 'mobile_menu_xxjlb':

                alert($(target).text());
                break;
            case 'mobile_menu':
                alert($(target).text());
                break;
            default:
                alert($(target).text());
                break;
        }
    }

});