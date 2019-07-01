//初始化地图对象，加载地图
var map = new AMap.Map('container', {
    resizeEnable: true
});
var options = {
    'showButton': true, //是否显示定位按钮
    'buttonPosition': 'RB', //定位按钮的位置
    /* LT LB RT RB */
    'buttonOffset': new AMap.Pixel(14, 140), //定位按钮距离对应角落的距离
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



//增加地图搜索地点查询
var placeSearch = null;
AMap.service(["AMap.PlaceSearch"], function() {
    //构造地点查询类
    placeSearch = new AMap.PlaceSearch({
        pageSize: 100, // 单页显示结果条数
        pageIndex: 1, // 页码
        // city: "010", // 兴趣点城市
        citylimit: false, //是否强制限制在设置的城市内搜索
        map: map, // 展现结果的地图实例
        // panel: "panel", // 结果列表将在此容器中进行展示。
        autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
    });
    //关键字查询
    // placeSearch.search();

});
$('.map_search_btn').click(function() {
    // placeSearch.search().html($('.map_ipt_search').val() + "星巴克");
    console.log($('.map_ipt_search').val() + "星巴克咖啡");
    placeSearch.search($('.map_ipt_search').val() + "星巴克咖啡");
})

//输入提示功能
AMap.plugin('AMap.Autocomplete', function() {
    // 实例化Autocomplete
    var autoOptions = {
        // input 为绑定输入提示功能的input的DOM ID
        input: 'map_ipt_search_btn'
    }
    var autoComplete = new AMap.Autocomplete(autoOptions);
    // 无需再手动执行search方法，autoComplete会根据传入input对应的DOM动态触发search
})


//获取搜索信息
var data = '';

function autoInput() {
    var keywords = null;

    AMap.plugin('AMap.PlaceSearch', function() {
        var autoOptions = {
            city: '全国'
        }

        var placeSearch = new AMap.PlaceSearch(autoOptions);
        placeSearch.search(keywords, function(status, result) {
            // 搜索成功时，result即是对应的匹配数据
            var node = new PrettyJSON.view.Node({
                el: document.querySelector("#input-info"),
                data: result
            });
            console.log(node);
        })
    })
}
autoInput();






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



// 添加定位信息列表，从json获取数据
$(function() {

    $.ajax({
        url: '../data/map.json',
        type: 'get',
        dataType: 'json',
        success: function(json) {
            // console.log(json);
            var map_locate = json.map_locate;
            var result = '';
            $.each(map_locate, function(index, val) {
                // console.log(index, val);
                result += '<li><div class="number"><span>' + val.code + '</span><i class="iconfont">&#xe6cb;</i></div><div class="map_text"><span class="map_store">' + val.title + '</span><img class="map_delivery" src="../images/map_delivery.png" alt=""><small class="map_address">' + val.address + '</small><span class="map_distance">' + val.distance + '</span></div><i class="iconfont notice">&#xe613;</i></li>';

                // console.log(result);
            });
            $('.map_locate_list').html(result);
        }
    })
});


// 给筛选添加点击显示隐藏事件
$('.map_filter_btn').click(function() {
    $('.map_overlay_inner').show();
    $('.map_locate_body').hide();
})

$('.map_close_btn').click(function() {
    $('.map_overlay_inner').hide();
    $('.map_locate_body').show();
})

//从json获取筛选点击弹出框中的信息
$(function() {

    $.ajax({
        url: '../data/map.json',
        type: 'get',
        dataType: 'json',
        success: function(json) {
            // console.log(json);
            var map_coffee = json.map_coffee;
            var result = '';
            $.each(map_coffee, function(index, val) {
                // console.log(index, val);
                // console.log(val.url);
                result += "<li><img src=" + val.url + "><span>" + val.text + "</span></li>"
                    // result += '<li><div class="number"><span>' + map_locate.val.code + '</span><i class="iconfont">&#xe6cb;</i></div><div class="map_text"><span class="map_store">' + map_locate.val.title + '</span><img class="map_delivery" src="../images/map_delivery.png" alt=""><small class="map_address">' + map_locate.val.address + '</small><span class="map_distance">' + map_locate.val.distance + '</span></div><i class="iconfont notice">&#xe613;</i></li>';
            });
            $('.map_coffer_list').html(result);
        }
    })
});