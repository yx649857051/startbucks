//初始化地图对象，加载地图
var map = new AMap.Map('container', {
    resizeEnable: true
});
var options = {
    'showButton': true, //是否显示定位按钮
    'buttonPosition': 'LB', //定位按钮的位置
    /* LT LB RT RB */
    'buttonOffset': new AMap.Pixel(10, 20), //定位按钮距离对应角落的距离
    'showMarker': true, //是否显示定位点
    'markerOptions': { //自定义定位点样式，同Marker的Options
        'offset': new AMap.Pixel(-18, -36),
        'content': '<img src="https://a.amap.com/jsapi_demos/static/resource/img/user.png" style="width:36px;height:36px"/>'
    },
    'showCircle': true, //是否显示定位精度圈
    'circleOptions': { //定位精度圈的样式
        'strokeColor': '#0093FF',
        'noSelect': true,
        'strokeOpacity': 0.5,
        'strokeWeight': 1,
        'fillColor': '#02B0FF',
        'fillOpacity': 0.25
    }
}
AMap.plugin(["AMap.Geolocation"], function() {
    var geolocation = new AMap.Geolocation(options);
    map.addControl(geolocation);
    geolocation.getCurrentPosition()
});


//添加增加放大缩小按钮
AMap.plugin(['AMap.ToolBar'], function() {
    // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
    map.addControl(new AMap.ToolBar({
        // 简易缩放模式，默认为 false
        liteStyle: true
    }));
});

// 地图JS结束-->-->-->地图JS结束-->-->-->地图JS结束-->-->-->地图JS结束-->-->-->



// 左侧导航js
$('.map_icon').click(function() {
    // alert('首页');
    location.href = "starbucks_home.html";

});

//左侧栏右边的菜单按钮事件
$('.map_menu_ic').click(function() {

    $('.map_side_all_default').hide();
    $('.map_side_all_menu').show();
    // $('.map_side_all_menu').show(300, 'easeInQuad', function() {

    // });
});

//左侧栏的关闭事件
$('.map_menu_close').click(function() {
    $('.map_side_all_default').show();
    $('.map_side_all_menu').hide();
    // $('.map_side_all_menu').hide('easeOutQuad', function() {

    // });

});

//logo右边的三个导航栏点击事件
$('.map_three_nav').on('click', 'li', function(event) {

    var target = event.target;
    console.log(target);

    switch (target.getAttribute('class')) {
        case 'map_mendian':
            // alert($(target).text());
            location.href = "map.html";
            break;
        case 'map_my_account':

            alert($(target).text());
            break;
        case 'map_menu':
            alert($(target).text());
            break;
    }
});

//登录事件
$('.map_login').click(function() {
    alert('login');
});

//注册事件
$('.map_regist_text').click(function() {
    alert('regist');
});

//左侧竖排导航栏事件
$('.map_menu_parent').on('click', "li", function() {
    var target = event.target;
    if (target.getAttribute('class') != 'map_menu_line') {
        switch (target.getAttribute('class')) {
            case 'map_menu_mendian':
                alert($(target).text());
                location.href = "map.html";
                break;
            case 'map_menu_xxjlb':

                alert($(target).text());
                break;
            case 'map_menu':
                alert($(target).text());
                break;
            default:
                alert($(target).text());
                break;
        }
    }

});