/**
 * author:yx 
 * 2019/6/28
 */

//logo点击事件
$('.home_icon').click(function() {
    // alert('首页');
    location.href = "starbucks_home.html";

});

//左侧栏右边的菜单按钮事件
$('.home_menu_ic').click(function() {

    $('.home_side_all_default').hide();
    $('.home_side_all_menu').show();
    // $('.home_side_all_menu').show(300, 'easeInQuad', function() {

    // });
});

//左侧栏的关闭事件
$('.home_menu_close').click(function() {
    $('.home_side_all_default').show();
    $('.home_side_all_menu').hide();
    // $('.home_side_all_menu').hide('easeOutQuad', function() {

    // });

});

//logo右边的三个导航栏点击事件
$('.home_three_nav').on('click', 'li', function(event) {

    var target = event.target;
    console.log(target);

    switch (target.getAttribute('class')) {
        case 'home_mendian':
            // alert($(target).text());
            location.href = "map.html";
            break;
        case 'home_my_account':

            alert($(target).text());
            break;
        case 'home_menu':
            alert($(target).text());
            break;
    }
});

//登录事件
$('.home_login').click(function() {
    alert('login');
});

//注册事件
$('.home_regist_text').click(function() {
    alert('regist');
});

//左侧竖排导航栏事件
$('.home_menu_parent').on('click', "li", function() {
    var target = event.target;
    if (target.getAttribute('class') != 'home_menu_line') {
        switch (target.getAttribute('class')) {
            case 'home_menu_mendian':
                alert($(target).text());
                location.href = "map.html";
                break;
            case 'home_menu_xxjlb':

                alert($(target).text());
                break;
            case 'home_menu':
                alert($(target).text());
                break;
            case 'home_menu_xlk':
                location.href = 'xlk.html';
                break;
            default:
                alert($(target).text());
                break;
        }
    }

});


//右侧内容区start-------------------

var myPlugin = {
    name: 'debugger',
    params: {
        debugger: false,
    },
    on: {
        init: function() {
            if (!this.params.debugger) return;
            console.log('init');
        },
        click: function(e) {
            if (!this.params.debugger) return;
            console.log('click');
        },
        tap: function(e) {
            if (!this.params.debugger) return;
            console.log('tap');
        },
        doubleTap: function(e) {
            if (!this.params.debugger) return;
            console.log('doubleTap');
        },
        sliderMove: function(e) {
            if (!this.params.debugger) return;
            console.log('sliderMove');
        },
        slideChange: function() {
            if (!this.params.debugger) return;
            console.log('slideChange', this.previousIndex, '->', this.activeIndex);
        },
        slideChangeTransitionStart: function() {
            if (!this.params.debugger) return;
            console.log('slideChangeTransitionStart');
        },
        slideChangeTransitionEnd: function() {
            if (!this.params.debugger) return;
            console.log('slideChangeTransitionEnd');
        },
        transitionStart: function() {
            if (!this.params.debugger) return;
            console.log('transitionStart');
        },
        transitionEnd: function() {
            if (!this.params.debugger) return;
            console.log('transitionEnd');
        },
        fromEdge: function() {
            if (!this.params.debugger) return;
            console.log('fromEdge');
        },
        reachBeginning: function() {
            if (!this.params.debugger) return;
            console.log('reachBeginning');
        },
        reachEnd: function() {
            if (!this.params.debugger) return;
            console.log('reachEnd');
        },
    },
};

// Install Plugin To Swiper
Swiper.use(myPlugin);

// Init Swiper
var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        // prevEl: '.swiper-button-prev',
    },
    // Enable debugger
    debugger: true,
});

$('.swiper-wrapper').on('click', 'div', function() {
    alert(1);
});