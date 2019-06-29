
$('.cqclickQuestion').each(function(index,target){
    var cqvalue2 = 0;
    $(target).click(function(){
        $(target).next().toggle(10,function(){
            $(target).slideDown();
            cqvalue2 += 180;
            $(this).prev().children().eq(2).rotate({
                animateTo: cqvalue2
            });
        });
    });
});
jQuery('#qrcode').qrcode({
    render: "canvas", //也可以替换为table
    width: 208,
    height: 208,
    text: "http://www.jq22.com"
});