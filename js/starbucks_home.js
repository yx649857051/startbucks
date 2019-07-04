/**
 * author:yx 
 * 2019/6/28
 */




var data = null;
var leftTmp = 0;
var left = 0;

$(document).ready(function() {

    init();

    function init() {
        $(".home_content_part4_div").scrollLeft(9999);
        setTimeout(function() {
            $(".home_content_part4_div").scrollLeft(0);
        }, 50);

        getData();
    }

    function getData() {
        $.getJSON('../data/home.json', function(data) {
            // console.log(data, $('.swiper-slide'));
            window.data = data;
            console.log(data);

            var bannerLength = data.banner.length;
            for (var i = 0; i < bannerLength; i++) {
                var div = document.createElement('div');
                div.className = 'swiper-slide';
                $(div).attr("tag", i + "");
                var img = new Image();
                $(img).css({
                    "width": "100%",
                    "height": "400px",
                });
                $(div).append(img);

                $(".swiper-wrapper").append(div);
                // console.log(data.banner[i]);
                img.src = data.banner[i].imgUrl;
            }

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
                // debugger: true,


            });

            var starbucksSelection = data.starbucksSelection;
            $('.home_content_part3_wrapper_h2').text(starbucksSelection.title);
            $('.home_content_part3_wrapper_p').text(starbucksSelection.description);

            var starbucksSelectionHtml = '';
            $.each(starbucksSelection.content, function(index, value) {
                starbucksSelectionHtml += '<li class="home_content_part3_wrapper_ul_li" tag="' + index + '"><img class="home_content_part3_wrapper_ul_li_img" src="' + value.imgUrl + '"></img><div class="home_content_part3_wrapper_ul_li_div"><p class="home_content_part3_wrapper_ul_li_div_name">' + value.name + '</p><p class="home_content_part3_wrapper_ul_li_div_text">' + value.text + '</p><p class="home_content_part3_wrapper_ul_li_div_more">' + value.more + '</i></div></li>';

            });
            $(".home_content_part3_wrapper_ul").html(starbucksSelectionHtml);

            var coffeeKnowledgeHtml = '';
            var coffeeKnowledge = data.coffeeKnowledge;
            $('.home_content_part4_wrapper_h2').text(coffeeKnowledge.title);
            $('.home_content_part4_wrapper_p').text(coffeeKnowledge.description);

            $.each(coffeeKnowledge.content, function(index, val) {
                coffeeKnowledgeHtml += '<li class="home_content_part4_div_ul_li" tag="' + index + '"><img class="home_content_part4_div_ul_li_img" src="' + val.imgUrl + '" /><p class="home_content_part4_div_ul_li_p"> ' + val.text + '</p> </li>'
            });
            $('.home_content_part4_div_ul').html(coffeeKnowledgeHtml);
        });
    }

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

                // alert($(target).text());
                location.href = "cqLogin2.html";
                break;
            case 'home_menu':
                // alert($(target).text());
                location.href = "gfMenu.html";
                break;
        }
    });

    //登录事件  以下有两遍是因为有不一样的样式
    $('.home_login' || '.home_login_2').click(function() {
        // alert('login');
        location.href = "cqLogin2.html";
    });

    $('.home_login_2').click(function() {
        // alert('login');
        location.href = "cqLogin2.html";
    });

    //注册事件
    $('.home_regist_text' || ".home_regist_2").click(function() {
        // alert('regist');
        location.href = "cqNew.html";
    });

    $(".home_regist_2").click(function() {
        // alert('regist');
        location.href = "cqNew.html";
    });

    //左侧竖排导航栏事件
    $('.home_menu_parent').on('click', "li", function(event) {
        var target = event.target;
        if (target.getAttribute('class') != 'home_menu_line') {
            switch (target.getAttribute('class')) {
                case 'home_menu_mendian':
                    // alert($(target).text());
                    location.href = "map.html";
                    break;
                case 'home_menu_xxjlb':

                    // alert($(target).text());
                    location.href = "cqLogin1.html";
                    break;

                case 'home_menu_xlk':
                    location.href = 'xlk.html';
                    break;

                case 'home_shanghai_hpf':
                    location.href = 'Lxz-roastery.html';
                    break;
                case 'home_menu_reserve':
                    location.href = 'starbucks_reserve.html';
                    break;
                case 'home_menu_mobile':
                    location.href = 'mobile.html';
                    break;
                case 'home_menu_module':
                    location.href = 'gfMenu.html';
                    break;
                case 'home_menu_kaikuai':
                    location.href = 'kakuai.html';
                    break;
                case 'home_about_starbucks':
                    location.href = 'xlk_inChina.html';
                    break;
                case 'home_coffer_xjt':
                    location.href = 'Lxz-1912.html';
                    break;
                default:
                    alert($(target).text());
                    break;
            }
        }

    });


    //右侧内容区start-------------------

    /**
     * banner点击事件
     */
    $('.swiper-container').on('click', 'div', function(event) {

        location.href = data.banner[$(this).attr("tag")].toUrl;

    });

    $(".home_content_part1").on('click', "li", function(event) {


        // alert($(this).attr("tag"));

        switch ($(this).attr("tag")) {
            case "0":
                location.href = "https://starbucks.tmall.com/p/rd841488.htm";
                break;
            case "1":
                location.href = "https://www.starbucks.com.cn/design-studio/";
                break;
            case "2":
                location.href = "http://www.baidu.com";
                break;
                // default:
                //     location.href = "http://www.baidu.com";
                //     break;
        }
    });

    // //了解更多
    // $('.home_content_part2_left_div_p_span').click(function(event) {
    //     var target = event.target;
    //     alert($(target).text());
    // });

    $('.home_content_part3_wrapper_ul').on('click', "li", function(event) {

        // alert($(this).attr("tag"));
        window.open(data.starbucksSelection.content[$(this).attr("tag")].toUrl, "_blank")
    });

    $(".home_content_part4_div").scroll(function() {
        leftTmp = $(".home_content_part4_div_ul").position().left;
        console.log("scroll leftTmp", leftTmp)
        left = Math.abs(leftTmp) > Math.abs(left) ? Math.abs(leftTmp) : Math.abs(left);
        if (Math.abs(leftTmp) >= Math.abs(left)) {

            $('.home_content_part4_div_span_right').hide();
            $('.home_content_part4_div_span_left').show();

        }
        if (Math.abs(leftTmp) <= 0) {

            $('.home_content_part4_div_span_left').hide();
            $('.home_content_part4_div_span_right').show();

        }
        if (Math.abs(leftTmp) > 0 && Math.abs(leftTmp) < left) {
            $('.home_content_part4_div_span_left').show();
            $('.home_content_part4_div_span_right').show();
        }
        // if (left >= 496) {
        //     $('.home_content_part4_div_span_right').hide();
        // }
        console.log("scroll left", left)
    });

    $('.home_content_part4_div_span_left').click(function() {

        leftTmp += 200;
        // $('.home_content_part4_div_span_right').show();
        // $(".home_content_part4_div").scrollLeft(-leftTmp);
        $(".home_content_part4_div").animate({ scrollLeft: -leftTmp }, 500);
    });

    $('.home_content_part4_div_span_right').click(function() {

        leftTmp -= 200;
        // $('.home_content_part4_div_span_left').show();
        $(".home_content_part4_div").animate({ scrollLeft: -leftTmp }, 500);
        // $(".home_content_part4_div").scrollLeft(-leftTmp);
    });

    $('.home_content_part4_div_ul').on('click', 'li', function(event) {

        // alert($(this).attr("tag"));
        window.open(data.coffeeKnowledge.content[$(this).attr("tag")].toUrl, "_blank")
    });

});