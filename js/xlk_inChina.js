//logo点击事件
$('.xlk_icon').click(function() {
    // alert('首页');
    location.href = "starbucks_home.html";

});

$('.xlk_inChina_link1').click(function() {

    location.href = "xlk.html";

});

$('.xlk_inChina_link2').click(function() {

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
        case 'xlk_mendian':
            // alert($(target).text());
            location.href = "map.html";
            break;
        case 'xlk_my_account':

            // alert($(target).text());
            break;
        case 'xlk_menu':
            // alert($(target).text());
            break;
    }
});

//登录事件
$('.xlk_login').click(function() {
    // alert('login');
});

//注册事件
$('.xlk_regist_text').click(function() {
    // alert('regist');
});

//左侧竖排导航栏事件
$('.xlk_menu_parent').on('click', "li", function() {
    var target = event.target;
    if (target.getAttribute('class') != 'home_menu_line') {
        switch (target.getAttribute('class')) {
            case 'xlk_menu_mendian':
                // alert($(target).text());
                location.href = "map.html";
                break;
            case 'xlk_menu_xxjlb':

                // alert($(target).text());
                break;
            case 'xlk_menu':
                // alert($(target).text());
                break;
            case 'xlk_menu_xlk':
                location.href = 'xlk.html';
                break;
            default:
                // alert($(target).text());
                break;
        }
    }

});



var right_us_box1 = document.getElementsByClassName('right_us_box1')[0];
var right_us_box2 = document.getElementsByClassName('right_us_box2')[0];
var right_us_box3 = document.getElementsByClassName('right_us_box3')[0];
var us_box1_mbc = document.getElementsByClassName('us_box1_mbc')[0];
var us_box2_mbc = document.getElementsByClassName('us_box2_mbc')[0];
var us_box3_mbc = document.getElementsByClassName('us_box3_mbc')[0];
var flag = true;

right_us_box1.onclick = function() {
    sty(right_us_box1, us_box1_mbc, '240px');
}

right_us_box2.onclick = function() {
    sty(right_us_box2, us_box2_mbc, '270px');
}

right_us_box3.onclick = function() {
    sty(right_us_box3, us_box3_mbc, '540px');
}

function sty(box, mbc, h) {
    if (flag) {
        box.style.height = h;
        flag = false;
        mbc.style.display = 'none';
    } else {
        box.style.height = '110px';
        flag = true;
        mbc.style.display = 'block';
    }
}