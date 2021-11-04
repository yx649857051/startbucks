// 点击菜单显示和隐藏
$('.product_btn').click(function() {
    $('.product_btn').css('display', 'none');
    $('.product_search_interior').css('display', 'block')
});
$('.product_heade').click(function() {
    $('.product_search_interior').css('display', 'none')
    $('.product_btn').css('display', 'block');

});

// 点击咖啡选项
$('.product_subcas').on('click', 'li', function(even) {
    var target = even.target;
    switch (target.getAttribute('class')) {
        default: alert($(target).text());
        break;
    }
})

// 点击菜单返回
$('.product_blank').click(function() {
    window.location.href = '../html/gfMenu.html';
})

// 添加图片定位，从json获取
$(function() {
    $.ajax({
        url: '../data/gfproduct.json',
        type: 'get',
        dataType: 'json',
        success: function(json) {
            var result = '';
            for (var i = 0; i < json.length; i++) {
                result += '<h3 class="product_caption">' + json[i]['title'] + '</h3><ul class="product_gather">'
                var menusJ = json[i]['list'];
                for (var j = 0; j < menusJ.length; j++) {
                    result += '<li><a href="" class="product_thumb"><img src="' + menusJ[j]['phoh'] + '" alt=""class="product_pho"><p>' + menusJ[j]['explain'] + '</p></a></li>';
                }
                result += '</ul><hr/>'
            }
            $('.product_margin').html(result);
        }
    });

    //logo点击事件
    $('.product_icon').click(function() {
        location.href = "starbucks_home.html";
    });

    //左侧栏右边的菜单按钮事件
    $('.product_menu_ic').click(function() {
        $('.product_side_all_default').hide();
        $('.product_side_all_menu').show();
    });

    //左侧栏的关闭事件
    $('.product_menu_close').click(function() {
        $('.product_side_all_default').show();
        $('.product_side_all_menu').hide();
    });

    //logo右边的三个导航栏点击事件
    $('.product_three_nav').on('click', 'li', function(event) {
        var target = event.target;
        switch (target.getAttribute('class')) {
            case 'product_mendian':
                location.href = "map.html";
                break;
            case 'product_my_account':
                location.href = "cqLogin2.html";
                break;
            case 'product_menu':
                location.href = "gfMenu.html";
                break;
        }
    });

    //登录事件  以下有两遍是因为有不一样的样式
    $('.product_login' || '.product_login_2').click(function() {
        location.href = "cqLogin2.html";
    });

    $('.product_login_2').click(function() {
        location.href = "cqLogin2.html";
    });

    //注册事件
    $('.product_regist_text' || ".product_regist_2").click(function() {
        location.href = "cqNew.html";
    });

    $(".product_regist_2").click(function() {
        location.href = "cqNew.html";
    });

    //左侧竖排导航栏事件
    $('.product_menu_parent').on('click', "li", function(event) {
        var target = event.target;
        if (target.getAttribute('class') != 'home_menu_line') {
            switch (target.getAttribute('class')) {
                case 'product_menu_mendian':
                    location.href = "map.html";
                    break;
                case 'product_menu_xxjlb':
                    location.href = "cqLogin1.html";
                    break;
                case 'product_menu_xlk':
                    location.href = 'xlk.html';
                    break;
                case 'product_shanghai_hpf':
                    location.href = 'Lxz-roastery.html';
                    break;
                case 'product_menu_reserve':
                    location.href = 'starbucks_reserve.html';
                    break;
                case 'product_menu_mobile':
                    location.href = 'mobile.html';
                    break;
                case 'product_menu_module':
                    location.href = 'gfMenu.html';
                    break;
                case 'product_menu_kakuai':
                    location.href = 'kakuai.html';
                    break;
                case 'product_about_starbucks':
                    location.href = 'xlk_inChina.html';
                    break;
                case 'product_coffer_xjt':
                    location.href = 'Lxz-1912.html';
                    break;
                case 'product_shanghai_hpf':
                    location.href = 'Lxz-roastery.html';
                    break;
                default:
                    alert($(target).text());
                    break;
            }
        }
    });
})