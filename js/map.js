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


//增加放大缩小按钮
AMap.plugin(['AMap.ToolBar'], function() {
    // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
    map.addControl(new AMap.ToolBar({
        // 简易缩放模式，默认为 false
        liteStyle: true
    }));
});