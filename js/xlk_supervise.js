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

$('.xlk_supervise_link1').click(function() {
    location.href = 'xlk.html';
})

$('.xlk_supervise_link2').click(function() {
    location.href = 'xlk_bills.html';
})


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
        case 'sup_mendian':
            // alert($(target).text());
            location.href = "map.html";
            break;
        case 'sup_my_account':

            // alert($(target).text());
            location.href = "cqLogin2.html";
            break;
        case 'sup_menu':
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
            case 'sup_menu_mendian':
                // alert($(target).text());
                location.href = "map.html";
                break;
            case 'sup_menu_xxjlb':

                // alert($(target).text());
                location.href = "cqLogin1.html";
                break;
            case 'sup_menu_app':
                // alert($(target).text());
                location.href = "mobile.html";
                break;
            case 'sup_menu_xlk':
                location.href = 'xlk.html';
                break;
            case 'sup_menu_reserve':
                location.href = 'starbucks_reserve.html';
                break;
            case 'sup_menu_roastery':
                location.href = 'lxz-roastery.html';
                break;
            case 'sup_menu_gyxbk':
                location.href = 'xlk_inChina.html';
                break;
            case 'sup_menu_xjt':
                location.href = 'lxz-1912.html';
                break;
            case 'sup_menu_module':
                location.href = 'gfMenu.html';
                break;
            default:
                alert($(target).text());
                break;
        }
    }

});


var xlk_a1 = document.getElementById('xlk_a1');
var xlk_a2 = document.getElementById('xlk_a2');
var lb1 = document.getElementById('lb1')
var lb2 = document.getElementById('lb2')
var inp1 = document.getElementById('inp1')
var inp2 = document.getElementById('inp2')
var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var kh_p = document.getElementById('kh_p');
var inquire_form1 = document.getElementById('inquire_form1');
var inquire_form2 = document.getElementById('inquire_form2');


xlk_a2.onclick = function() {
    xlk_a1.style.background = '#fff';
    xlk_a1.style.color = '#00a862';
    xlk_a2.style.background = '#00a862';
    xlk_a2.style.color = '#fff';
    kh_p.innerHTML = '请输入你的星礼卡卡号和激活小票上的销售单号查询星礼卡余额以及交易记录';
    lb1.innerHTML = '卡号';
    lb2.innerHTML = '销售单号';
    p2.innerHTML = '<span> × </span>此栏不可为空'
    p1.style.display = 'none';
    p2.style.display = 'none';
    lb1.style.color = '#9E9E9E';
    lb2.style.color = '#9E9E9E';
    inp1.value = '';
    inp2.value = '';
}
xlk_a1.onclick = function() {
    xlk_a1.style.background = '#00a862';
    xlk_a1.style.color = '#fff';
    xlk_a2.style.background = '#fff';
    xlk_a2.style.color = '#00a862';
    kh_p.innerHTML = '请输入你的星礼卡卡号和密码查询星礼卡余额以及交易记录';
    lb2.innerHTML = '输入密码';
    p2.innerHTML = '<span> × </span>请输入6位PIN密码。您可以在卡片背面刮开涂层获得密码'
    p1.style.display = 'none';
    p2.style.display = 'none';
    lb1.style.color = '#9E9E9E';
    lb2.style.color = '#9E9E9E';
    inp1.value = '';
    inp2.value = '';
}


var inp1Reg = /^(\d{16}|\d{19})$/;

function checkInp1() {
    var i1Val = inp1.value;
    return inp1Reg.test(i1Val);
}

inp1.onfocus = function() {
    animate(lb1, -10 + 'px', 10);
    lb1.style.color = '#9E9E9E';
    inp1.style.borderBottom = '1px solid #00A862';

}

inp1.onblur = function() {
    inp1.style.borderBottom = '1px solid #E0E0E0';
    if (checkInp1()) {
        p1.style.display = 'none';
        lb1.style.color = '#00A862';
        lb1.style.top = -10 + 'px';
    } else if (inp1.value == '') {
        animate(lb1, 10 + 'px', 10)
        p1.style.display = 'block';
        lb1.style.color = '#E75D54';

    } else {
        p1.style.display = 'block';
        lb1.style.color = '#E75D54';

    }
}



var inp2Reg = /^\d{6}$/;

function checkInp2() {
    var i1Va2 = inp2.value;
    return inp2Reg.test(i1Va2);
}

inp2.onfocus = function() {
    animate(lb2, -10 + 'px', 10);
    lb2.style.color = '#9E9E9E';
    inp2.style.borderBottom = '1px solid #00A862';

}

inp2.onblur = function() {
    inp2.style.borderBottom = '1px solid #E0E0E0';
    if (checkInp2()) {
        p2.style.display = 'none';
        lb2.style.color = '#00A862';
        lb2.style.top = -10 + 'px';

    } else if (inp2.value == '') {
        animate(lb2, 10 + 'px', 10)
        p2.style.display = 'block';
        lb2.style.color = '#E75D54';

    } else {
        p2.style.display = 'block';
        lb2.style.color = '#E75D54';
    }

}




var timer = null;

function animate(ele, target, speedTime) {
    clearInterval(timer);
    timer = setInterval(function() {
        var speed = 1;
        if (ele.style.top = target) {
            clearInterval(timer);
        } else {
            ele.style.top = offsetTop + speed + 'px';
        }
    }, speedTime);
}