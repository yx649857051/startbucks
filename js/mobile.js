// 左侧导航js
$('.mobile_icon').click(function() {
    location.href = "starbucks_home.html";
});

//左侧栏右边的菜单按钮事件
$('.mobile_menu_ic').click(function() {
    $('.mobile_side_all_default').hide();
    $('.mobile_side_all_menu').show();
});

//左侧栏的关闭事件
$('.mobile_menu_close').click(function() {
    $('.mobile_side_all_default').show();
    $('.mobile_side_all_menu').hide();
});

//logo右边的三个导航栏点击事件
$('.mobile_three_nav').on('click', 'li', function(event) {
    var target = event.target;
    switch (target.getAttribute('class')) {
        case 'mobile_mendian':
            location.href = "map.html";
            break;
        case 'mobile_my_account':
            location.href = "cqlogin2.html";
            break;
        case 'mobile_menu':
            location.href = "gfMenu.html";
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
$('.mobile_menu_parent').on('click', "li", function(event) {
    var target = event.target;
    if (target.getAttribute('class') != 'mobile_menu_line') {
        switch (target.getAttribute('class')) {
            case 'mobile_menu_mendian':
                location.href = "map.html";
                break;
            case 'mobile_menu_xxjlb':
                location.href = "cqlogin1.html";
                break;
            case 'mobile_menu_module':
                location.href = "gfMenu.html";
                break;
            case 'mobile_menu_xlk':
                location.href = "xlk.html";
                break;
            case 'mobile_menu_mobile':
                location.href = "mobile.html";
                break;
            case 'mobile_menu_reserve':
                location.href = "starbucks_reserve.html";
                break;
            case 'mobile_menu_Lxz-roastery':
                location.href = "Lxz-roastery.html";
                break;
            case 'mobile_menu_kakuai':
                location.href = "kakuai.html";
                break;
            case 'mobile_meun_Lxz1912':
                location.href = "Lxz-1912.html";
                break;
            case 'mobile_menu_starbucks_reserve':
                location.href = "starbucks_reserve.html";
                break;
            case 'mobile_menu_xlk_inChina':
                location.href = "xlk_inChina.html";
                break;
            default:
                alert($(target).text());
                break;
        }
    }
});

// 初始化swiper
var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});