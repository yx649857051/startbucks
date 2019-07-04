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
        var target = event.target;
        // console.log(target);
        switch (target.getAttribute('class')) {
            default: alert($(target).text());
            break;
        }
    })
    // 点击菜单返回
$('.product_blank').click(function() {
    console.log("000000000000")
    window.location.href = '../html/gfMenu.html';

})





// 添加图片定位，从json获取
$(function() {
    $.ajax({
        url: '../data/gfproduct.json',
        type: 'get',
        dataType: 'json',
        success: function(json) {
            // console.log(json);
            var result = '';
            // var reuslli = '';
            var gfarr = [];
            for (var i = 0; i < json.length; i++) {
                // console.log(json[i].title);
                result += '<h3 class="product_caption">' + json[i]['title'] + '</h3><ul class="product_gather">'
                    // console.log(json[i]['list']);
                var menusJ = json[i]['list'];
                for (var j = 0; j < menusJ.length; j++) {
                    // console.log(menusJ[j]['explain']);
                    result += '<li><a href="" class="product_thumb"><img src="' + menusJ[j]['phoh'] + '" alt=""class="product_pho"><p>' + menusJ[j]['explain'] + '</p></a></li>';
                }
                result += '</ul><hr/>'
                    // $('.product_gather').eq(i).html(reuslli);
                    // console.log($('.product_gather').eq(i).html());
            }
            $('.product_margin').html(result);
        }
    })
})