var mySwiper = new Swiper('.swiper-container',{
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  a11y : {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
    firstSlideMessage: 'This is the first slide',
    lastSlideMessage: 'This is the last slide',
    paginationBulletMessage: 'Go to slide {{index}}',
    notificationClass: 'swiper-notification',
  },
}) ;
$(".ani").onloadAnimate(function () {
  var mySwiper = new Swiper ('.swiper-container', {
    on:{
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
      } 
    }
  }) 
});

$(window).scroll(function () { 
  if ($(window).scrollTop() > 20) { 

  $('.Lxz-1912-search-zjk').width(1349);
  $('.Lxz-1912-search').css({
    "position" : 'fixed',
    'top' : -30,
    // 'width' : 1349
  });
  }else{
  $('.Lxz-1912-search-zjk').width(1080);
  $('.Lxz-1912-search').css({
    'position':'relative',
    'top' : 0,
    // 'width' : 1080
  });
  }
  });
  // 结束头部动画
  $('.Lxz-1912-content-btn button').on('click',function(){
    $('.Lxz-1912-content-btn img').css('display','block');
    $('.Lxz-1912-content-btn button').css("display","none");
  });
  $('.Lxz-1912-content-btn img').on('click',function(){
    $('.Lxz-1912-content-btn button').css('display','block');
    $('.Lxz-1912-content-btn img').css("display","none");
  });