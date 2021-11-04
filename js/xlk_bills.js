//logo点击事件
$('.xlk_icon').click(function() {
    location.href = "starbucks_home.html";
});

$('.xlk_bills_link1').click(function() {
    location.href = "xlk.html";
});

$('.xlk_bills_link2').click(function() {
    location.href = "xlk_supervise.html";
});

$('.xlk_bills_link3').click(function() {
    location.href = "xlk_contacts.html";
});

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
        case 'bills_mendian':
            location.href = "map.html";
            break;
        case 'bills_my_account':
            location.href = "cqLogin2.html";
            break;
        case 'bills_menu':
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
            case 'bills_menu_mendian':
                location.href = "map.html";
                break;
            case 'bills_menu_xxjlb':
                location.href = "cqLogin1.html";
                break;
            case 'bills_menu_app':
                location.href = "mobile.html";
                break;
            case 'bills_menu_xlk':
                location.href = 'xlk.html';
                break;
            case 'bills_menu_reserve':
                location.href = 'starbucks_reserve.html';
                break;
            case 'bills_menu_roastery':
                location.href = 'lxz-roastery.html';
                break;
            case 'bills_menu_gyxbk':
                location.href = 'xlk_inChina.html';
                break;
            case 'bills_menu_xjt':
                location.href = 'lxz-1912.html';
                break;
            case 'bills_menu_module':
                location.href = 'gfMenu.html';
                break;
            default:
                alert($(target).text());
                break;
        }
    }
});




var bills_right_box1 = document.getElementById('bills_right_box1')
var bills_right_box2 = document.getElementById('bills_right_box2')
var bills_right_option_a1 = document.getElementById('bills_right_option_a1');
var bills_right_option_a2 = document.getElementById('bills_right_option_a2');

var lb1 = document.getElementsByClassName('lb1')[0];
var inp1 = document.getElementsByClassName('inp1')[0];
var lb2 = document.getElementsByClassName('lb2')[0];
var inp2 = document.getElementsByClassName('inp2')[0];
var p1 = document.getElementsByClassName('p1')[0];
var p2 = document.getElementsByClassName('p2')[0];

var lb1_b = document.getElementsByClassName('lb1_b')[0];
var inp1_b = document.getElementsByClassName('inp1_b')[0];
var lb2_b = document.getElementsByClassName('lb2_b')[0];
var inp2_b = document.getElementsByClassName('inp2_b')[0];
var p1_b = document.getElementsByClassName('p1_b')[0];
var p2_b = document.getElementsByClassName('p2_b')[0];

bills_right_option_a1.onclick = function() {
    aOnclick(bills_right_option_a1, bills_right_option_a2, bills_right_box1, bills_right_box2);
}

bills_right_option_a2.onclick = function() {
    aOnclick(bills_right_option_a2, bills_right_option_a1, bills_right_box2, bills_right_box1);
}

function aOnclick(a1, a2, box1, box2) {
    a2.style.cssText = 'font-weight:400;color:#707070;border:none';
    a1.style.cssText = 'font-weight:600;color:#333;border-bottom:3px solid #00a862';
    box1.style.display = 'block';
    box2.style.display = 'none';
}

inp1.onfocus = function() {
    onFocus(lb1, inp1);
}

inp1.onblur = function() {
    onBlur(inp1, p1, lb1);
};

inp2.onfocus = function() {
    onFocus(lb2, inp2);
}

inp2.onblur = function() {
    onBlur(inp2, p2, lb2);
}

inp1_b.onfocus = function() {
    onFocus(lb1_b, inp1_b);
}

inp1_b.onblur = function() {
    onBlur(inp1_b, p1_b, lb1_b);
};

inp2_b.onfocus = function() {
    onFocus(lb2_b, inp2_b);
}

inp2_b.onblur = function() {
    onBlur(inp2_b, p2_b, lb2_b);
};

function onFocus(lb, inp) {
    animate(lb, -10 + 'px', 10);
    lb.style.color = '#9E9E9E';
    inp.style.borderBottom = '1px solid #00A862';
}

function onBlur(inp, p, lb) {
    inp.style.borderBottom = '1px solid #E0E0E0';
    if (inp.value == '') {
        animate(lb, 10 + 'px', 10);
        p.style.display = 'block';
        p.innerHTML = '<span> × </span>此栏不能为空';
        lb.style.cssText = 'color:#E75D54; top:10px';

    } else if (!isNaN(inp.value)) {
        p.style.display = 'none';
        lb.style.cssText = 'color:#00A862;top:-10px';
    } else {
        p.style.display = 'block';
        lb.style.color = '#E75D54';
        p.innerHTML = '<span> × </span>请输入正确的数字';
    }
}

$(function() {
    $(document).on('click', '.inp1', function() {
        /*需要注意的就是事件里边的$(this)指的就是被点击的元素而不是$(document)*/
        this.prev('label').css('color', '#9E9E9E')
        this.style.borderBottom = '1px solid #00A862';
    })
})

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

var addData = document.getElementById('addData');

$("#addData").mouseover(function() {
    $(this).css("cursor", "pointer");
});

$('.bills_right_next').mouseover(function() {
    $(this).css('cursor', 'pointer');
})

addData.onclick = function() {
    var fm1 = bills_right_box1.children[0].children[2].cloneNode(true);
    var fm2 = bills_right_box1.children[0].children[3].cloneNode(true);
    bills_right_box1.children[0].appendChild(fm1);
    bills_right_box1.children[0].appendChild(fm2);
}