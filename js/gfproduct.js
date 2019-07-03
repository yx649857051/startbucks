// 点击菜单显示和隐藏
$('.product_btn').click(function() {
    $('.product_btn').css('display', 'none');
    $('.product_search_interior').css('display', 'block')
});
$('.product_heade').click(function() {
    $('.product_search_interior').css('display', 'none')
    $('.product_btn').css('display', 'block');

});
// 添加图片定位，从json获取
$(function() {
    $.ajax({
        url: '../data/gfproduct.json',
        type: 'get',
        dataType: 'json',
        success: function(json) {
            // console.log(json);这是一个数组
            // console.log(json)
            var result = ''
            for (var i = 0; i < 8; i++) {
                var a = json[i];
                console.log(a);

                result += '<li><a href="" class="product_thumb"><img src="' + json[i].phoh + '" alt=""class="product_pho"><p>' + json[i].explain + '</p></a></li>';

                //     console.log(result)
                // }
                // var json = JSON.stringify(json);
                // console.log(json)h;
                // var result = '';
                // $.each(json, function(index, val) {
                //     // console.log(index, val);

                //     result += ' <li><a href="" class="product_thumb"><div class="product_pho">' + val.photograph + '</div><p>' + val.explain + '</p></a></li>';
                //     console.log(result);
                // // });
                $('.product_capt').html(result);
            }
        }
    })
})