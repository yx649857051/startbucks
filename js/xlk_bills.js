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

var xlk_a1 = document.getElementById('xlk_a1');
var xlk_a2 = document.getElementById('xlk_a2');
var lb1 = document.getElementById('lb1')
var inp1 = document.getElementById('inp1')
var lb2 = document.getElementById('lb2')
var inp2 = document.getElementById('inp2')
var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var kh_p = document.getElementById('kh_p');
var inquire_form1 = document.getElementById('inquire_form1');
var inquire_form2 = document.getElementById('inquire_form2');
var bills_right_box1 = document.getElementById('bills_right_box1')
var bills_right_box2 = document.getElementById('bills_right_box2')
var bills_right_option_a1 = document.getElementById('bills_right_option_a1');
var bills_right_option_a2 = document.getElementById('bills_right_option_a2');

bills_right_option_a1.onclick = function() {
    bills_right_option_a2.style.fontWeight = '100';
    bills_right_option_a2.style.color = '#707070';
    bills_right_option_a2.style.border = 'none';
    bills_right_option_a1.style.fontWeight = '600';
    bills_right_option_a1.style.color = '#000';
    bills_right_option_a1.style.borderBottom = '3px solid #00a862';
    bills_right_box1.style.display = 'block';
    bills_right_box2.style.display = 'none';
}

bills_right_option_a2.onclick = function() {
    bills_right_option_a1.style.fontWeight = '100';
    bills_right_option_a1.style.color = '#707070';
    bills_right_option_a1.style.border = 'none';
    bills_right_option_a2.style.fontWeight = '600';
    bills_right_option_a2.style.color = '#000';
    bills_right_option_a2.style.borderBottom = '3px solid #00a862';
    bills_right_box1.style.display = 'none';
    bills_right_box2.style.display = 'block';
}

var inp1Reg = /^\d+$/;

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
        p1.innerHTML = '<span> × </span>此栏不能为空';
        lb1.style.color = '#E75D54';
        lb1.style.top = 10 + 'px';

    } else {
        p1.style.display = 'block';
        lb1.style.color = '#E75D54';
        p1.innerHTML = '<span> × </span>请输入正确的数字';
    }
}





function checkInp2() {
    var i1Va2 = inp2.value;
    return inp1Reg.test(i1Va2);
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
        p2.innerHTML = '<span> × </span>此栏不能为空';
        lb2.style.top = 10 + 'px';

    } else {
        p2.style.display = 'block';
        lb2.style.color = '#E75D54';
        p2.innerHTML = '<span> × </span>请输入正确的数字';
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