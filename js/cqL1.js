/********************************* 箭头旋转 *************************************** */
$('.cqclickQuestion').each(function (index, target) {
    var cqvalue2 = 0;
    $(target).click(function () {
        $(target).next().toggle(10, function () {
            $(target).slideDown();
            cqvalue2 += 180;
            $(this).prev().children().eq(2).rotate({
                animateTo: cqvalue2
            });
        });
    });
});

/******************************** 生成二维码 *************************************** */
jQuery('.qrcode').qrcode({
    render: "canvas", //也可以替换为table
    width: 208,
    height: 208,
    text: "http://www.jq22.com"
});

/************************************ 记住密码复选框 ************************************** */
(function ($) {
    $.fn.labelauty = function (tag, tag2) {
        rdochecked(tag);
        $(".cq_Remenber_jia").click(function () {
            if ($(this).prev().prop("checked") == true) {
                $(this).prev().removeAttr("checked");
            } else {
                $(this).prev().prop("checked", "checked");
            }
            rdochecked(tag);
        });
        $('.cq_Remenber_or_Forget b').click(function () {
            if ($(this).prev().prev().prop("checked") == true) {
                $(this).prev().prev().removeAttr("checked");
            } else {
                $(this).prev().prev().prop("checked", "checked");
            }
            rdochecked(tag);
        });

        function rdochecked(tag) {
            $('.' + tag).each(function (i) {
                var rdobox = $('.' + tag).eq(i).next();
                if ($('.' + tag).eq(i).prop("checked") == false) {
                    rdobox.removeClass("checked");
                    rdobox.addClass("unchecked");
                } else {
                    rdobox.removeClass("unchecked");
                    rdobox.addClass("checked");
                }
            });
        }
    }
}(jQuery));


/****************************** 登录方式切换 ********************************* */
$('.cqQRlogin').on('click', function () {
    $('.cqLogindiffcut1').hide(null);
    $('.cqLogindiffcut2').show(null);
});
$('.cqPWlogin').on('click', function () {
    $('.cqLogindiffcut1').show(null);
    $('.cqLogindiffcut2').hide(null);
});

/************************ 关于 input 框的 label 的事件************************* */
$('.cqinput').on('focus', function () {
    $(this).prop("placeholder", "");
    $(this).parent().children().eq(2).hide();
    $(this).next().animate({
        display: 'show',
        top: -30,
        fontSize: 14
    }, 200, 'swing', function () {});
});
$('.cqinput').on('blur', function () {
    var $this = $(this).next().text();
    if ($(this).attr('value') == "") {
        $(this).next().animate({
            top: 0,
            fontSize: 16
        }, 200, 'swing', function () {});
        $(this).next().hide(1, 'swing', function () {
            $(this).prev().prop("placeholder", $this);
        });
        $(this).parent().children().eq(2).show();
    }
});
/***************************** 关于 input 框的密码是否可见 *****************************/
var cqisShow = true;
$(".cqWord .cqBuKeJian").click(function () {
    $(".cqWord .cqBuKeJian").hide();
    $(".cqWord .cqKeJian").show();
    $('.cqPassWord').prop('type', 'text');
});
$(".cqWord .cqKeJian").click(function () {
    $(".cqWord .cqBuKeJian").show();
    $(".cqWord .cqKeJian").hide();
    $('.cqPassWord').prop('type', 'password');
});


/*********************** 滑块验证 ************************************/
(function (window) {
    var cqrefreshIcon = document.getElementsByClassName('cqrefreshIcon')[0];
    const l = 42,
        r = 10,
        w = 310,
        h = 155,
        PI = Math.PI;
    const L = l + r * 2;

    function getRandomNumberByRange(start, end) {
        return Math.round(Math.random() * (end - start) + start);
    }

    function createCanvas(width, height) {
        const canvas = createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        return canvas;
    }

    function createImg(onload) {
        const img = createElement('img');
        img.crossOrigin = "Anonymous";
        img.onload = onload;
        img.onerror = () => {
            img.src = getRandomImg();
        }
        img.src = getRandomImg();
        return img;
    }

    function createElement(tagName) {
        return document.createElement(tagName);
    }

    function addClass(tag, className) {
        tag.classList.add(className);
    }

    function removeClass(tag, className) {
        tag.classList.remove(className);
    }

    function getRandomImg() {
        return 'https://picsum.photos/300/150/?image=' + getRandomNumberByRange(0, 100);
    }

    function draw(ctx, operation, x, y) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + l / 2, y);
        ctx.arc(x + l / 2, y - r + 2, r, 0, 2 * PI);
        ctx.lineTo(x + l / 2, y);
        ctx.lineTo(x + l, y);
        ctx.lineTo(x + l, y + l / 2);
        ctx.arc(x + l + r - 2, y + l / 2, r, 0, 2 * PI);
        ctx.lineTo(x + l, y + l / 2);
        ctx.lineTo(x + l, y + l);
        ctx.lineTo(x, y + l);
        ctx.lineTo(x, y);
        ctx.fillStyle = '#fff';
        ctx[operation]();
        ctx.beginPath();
        ctx.arc(x, y + l / 2, r, 1.5 * PI, 0.5 * PI);
        ctx.globalCompositeOperation = "xor";
        ctx.fill();
    }

    function sum(x, y) {
        return x + y
    }

    function square(x) {
        return x * x
    }
    class jigsaw {
        constructor(el, success, fail) {
            this.el = el;
            this.success = success;
            this.fail = fail;
        }
        init() {
            this.initDOM();
            this.initImg();
            this.draw();
            this.bindEvents();
        }
        initDOM() {
            const canvas = createCanvas(w, h);
            const cqblock = canvas.cloneNode(true);
            const cqsliderContainer = createElement('div');
            const refreshIcon = createElement('div');
            const cqsliderMask = createElement('div');
            const cqslider = createElement('div');
            const cqsliderIcon = createElement('span');
            const text = createElement('span');
            cqblock.className = 'cqblock';
            cqsliderContainer.className = 'cqsliderContainer';
            refreshIcon.className = 'refreshIcon';
            cqsliderMask.className = 'cqsliderMask';
            cqslider.className = 'cqslider';
            cqsliderIcon.className = 'cqsliderIcon';
            text.className = 'cqsliderText';
            const el = this.el;
            el.appendChild(canvas);
            el.appendChild(refreshIcon);
            el.appendChild(cqblock);
            cqslider.appendChild(cqsliderIcon);
            cqsliderMask.appendChild(cqslider);
            cqsliderContainer.appendChild(cqsliderMask);
            cqsliderContainer.appendChild(text);
            el.appendChild(cqsliderContainer);
            Object.assign(this, {
                canvas, // 图
                cqblock, // 块
                cqsliderContainer, // 滑动轨道
                refreshIcon, // 刷新
                cqslider, // 滑块
                cqsliderMask,
                cqsliderIcon, // 箭头
                text,
                canvasCtx: canvas.getContext('2d'),
                blockCtx: cqblock.getContext('2d')
            });
        }
        initImg() {
            const img = createImg(() => {
                this.canvasCtx.drawImage(img, 0, 0, w, h);
                this.blockCtx.drawImage(img, 0, 0, w, h);
                const y = this.y - r * 2 + 2;
                const ImageData = this.blockCtx.getImageData(this.x, y, L, L);
                this.cqblock.width = L;
                this.blockCtx.putImageData(ImageData, 0, y);
            });
            this.img = img;
        }
        draw() {
            this.x = getRandomNumberByRange(L + 10, w - (L + 10));
            this.y = getRandomNumberByRange(10 + r * 2, h - (L + 10));
            draw(this.canvasCtx, 'fill', this.x, this.y);
            draw(this.blockCtx, 'clip', this.x, this.y);
        }
        clean() {
            this.canvasCtx.clearRect(0, 0, w, h);
            this.blockCtx.clearRect(0, 0, w, h);
            this.cqblock.width = w;
        }
        bindEvents() {
            this.el.onselectstart = () => false;
            cqrefreshIcon.onclick = () => {
                this.reset();
            }
            let originX, originY, trail = [],
                isMouseDown = false;
            this.cqslider.addEventListener('mousedown', function (e) {
                originX = e.x, originY = e.y;
                isMouseDown = true;
            });
            document.addEventListener('mousemove', (e) => {
                if (!isMouseDown) return false;
                const moveX = e.x - originX;
                const moveY = e.y - originY;
                if (moveX < 0 || moveX + 38 >= w) return false;
                this.cqslider.style.left = moveX + 'px';
                var cqblockLeft = (w - 40 - 20) / (w - 40) * moveX;
                this.cqblock.style.left = cqblockLeft + 'px';
                addClass(this.cqsliderContainer, 'cqsliderContainer_active');
                trail.push(moveY);
            });
            document.addEventListener('mouseup', (e) => {
                if (!isMouseDown) return false;
                isMouseDown = false;
                if (e.x == originX) return false;
                removeClass(this.cqsliderContainer, 'cqsliderContainer_active');
                this.trail = trail;
                const {
                    spliced,
                    TuringTest
                } = this.verify();
                if (spliced) {
                    if (TuringTest) {
                        addClass(this.cqsliderContainer, 'cqsliderContainer_success');
                        this.success && this.success();

                        //******************登陆按钮的3个验证 ***************
                        $('.cqLoginOver').on('mouseover', function () {
                            if ($('.cqUserName').val() != '' && $('.cqPassWord').val() != '') {
                                $('.cqLoginOver').css('cursor', 'pointer');
                                $('.cqLoginOver').addClass('cqafter')
                                $('.cqLoginOver').one('click', function () { //*** 登陆部分 ***

                                    //***** cookie 开始 ******
                                    if (cqRemenber.checked) {
                                        var uVal = cqUserName.value;
                                        var pVal = cqPassWord.value;
                                        var date = new Date();

                                        function setCookie(key, val, day) { //设置cookie
                                            if (day) {
                                                var d = new Date();
                                                d.setDate(d.getDate() + day);
                                                document.cookie = key + '=' + val + '; expires=' + d;
                                            } else {
                                                document.cookie = key + '=' + val;
                                            }
                                        }
                                        setCookie("cqUserName1", uVal, 7);
                                        setCookie("cqPassWord1", pVal, 7);
                                        setCookie("time1", date, 7);

                                    }
                                    if (cqRemenber.checked == false) {
                                        var uVal = cqUserName.value;
                                        var pVal = cqPassWord.value;
                                        var date = new Date();
                                        function setCookie(key, val, day) { //设置cookie
                                            if (day) {
                                                var d = new Date();
                                                d.setDate(d.getDate() + day);
                                                document.cookie = key + '=' + val + '; expires=' + d;
                                            } else {
                                                document.cookie = key + '=' + val;
                                            }
                                        }
                                        setCookie("cqUserName1", uVal, 7);
                                        setCookie("cqPassWord1", pVal, 7);
                                        setCookie("time1", date, 7);

                                        function removeCookie(key) { //删除cookie
                                            setCookie(key, '123', -10);
                                        }
                                        // removeCookie("cqUserName1");
                                        removeCookie("cqPassWord1");
                                        // removeCookie("time1");
                                    }
                                    //***** cookie 结束 ******

                                    if (window.XMLHttpRequest) {
                                        var xhr = new XMLHttpRequest();
                                    } else {
                                        var xhr = new ActiveXObject(Microsoft.XMLHTTP);
                                    }
                                    xhr.open("get", "../php/login.php?act=login&user=" + cqUserName.value + "&pass=" + cqPassWord.value, true);
                                    xhr.send("null");
                                    xhr.onreadystatechange = function () {
                                        if (xhr.readyState == 4) {
                                            if (xhr.status == 200) {
                                                var str = JSON.parse(xhr.responseText);
                                                // console.log(str);
                                                alert(str.msg);
                                                $('.cqLogout').show();
                                                // ****** 发布消息 *********
                                                if(str.msg == '登录成功'){
                                                    $.ajax({
                                                        type: 'get',
                                                        url: '../php/login.php/',
                                                        data: 'act=login&user=' + cqUserName.value + '&pass=' + cqPassWord.value,
                                                        dataType: 'json',
                                                        success: function (data) {
                                                            loginEvent.trigger('loginSucc', data); // 发布登录成功消息
                                                        }
                                                    });
                                                }
                                        
                                                // ********发布消息end********
                                            }
                                        }
                                    }
                                });
                            } else {
                                $('.cqLoginOver').css('cursor', 'not-allowed');
                            }
                        });
                        //-******************** 登陆按钮验证 end ***********
                    } else {
                        addClass(this.cqsliderContainer, 'cqsliderContainer_fail');
                        this.text.innerHTML = '错误了呢!!';
                        this.reset();
                    }
                } else {
                    addClass(this.cqsliderContainer, 'cqsliderContainer_fail');
                    this.fail && this.fail();
                    setTimeout(() => {
                        this.reset();
                    }, 1000);
                }
            });
        }
        verify() {
            const arr = this.trail;
            const average = arr.reduce(sum) / arr.length;
            const deviations = arr.map(x => x - average);
            const stddev = Math.sqrt(deviations.map(square).reduce(sum) / arr.length);
            const left = parseInt(this.cqblock.style.left);
            return {
                spliced: Math.abs(left - this.x) < 10,
                TuringTest: average !== stddev,
            }
        }
        reset() {
            this.cqsliderContainer.className = 'cqsliderContainer';
            this.cqslider.style.left = 0;
            this.cqblock.style.left = 0;
            this.clean();
            this.img.src = getRandomImg();
            this.draw();
        }
    }
    window.jigsaw = {
        init: function (element, success, fail) {
            new jigsaw(element, success, fail).init();
        }
    }
}(window));
//滑块验证
jigsaw.init(document.getElementById('captcha'), function () {
    document.getElementsByClassName('cqcontainer')[0].innerHTML = ''
    document.getElementsByClassName('cqyanzhenghou')[0].style = 'display : block;'
});

/************************* 表单验证功能（这里是注册部分）（登陆部分在上面） ******************************/
var cqUserName = document.querySelector(".cqUserName");
var cqPassWord = document.querySelector(".cqPassWord");
var cqRemenber = document.querySelector(".cqRemenber"); // 复选框
var cqLoginOver = document.querySelector(".cqLoginOver"); //登录
var cqZhuceOver = document.querySelector(".cqZhuceOver"); //注册
cqZhuceOver.onclick = function () {
    if (window.XMLHttpRequest) {
        var xhr = new XMLHttpRequest();
    } else {
        var xhr = new ActiveXObject(Microsoft.XMLHTTP);
    }
    xhr.open("get", "../php/login.php?act=add&user=" + cqUserName.value + "&pass=" + cqPassWord.value, true);
    xhr.send("null");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var str = JSON.parse(xhr.responseText);
                alert(str.msg);
            }
        }
    }
}



/********************************* 发布订阅者模式 ************************************ */

var loginEvent = { //登录成功的消息事件
    clientList: {}, //缓存列表，存放订阅者的回调函数
    addlisten: function (key,fn) { //添加订阅者
        if (!this.clientList[key]) { //未订阅过此类消息，创建一个缓存列表
            this.clientList[key] = [];
        }
        this.clientList[key].push(fn); //订阅的消息添加进消息缓存列表
    },
    trigger: function (key,msg) { //发布消息方法
        var fnArr = this.clientList[key]; //取出该消息对应的回调函数集合
        if (!fnArr || fnArr.length == 0) {
            return false; // 如果未订阅该消息，则返回
        }
        for (var i = 0; i < fnArr.length; i++) {
            fnArr[i](msg); //执行所有回调函数
        }
    }
}

var header = (function () { // 订阅者
    loginEvent.addlisten('loginSucc', function (data) { //订阅登录成功的消息
        header.setAvatar(data.avatar);
    });
    return {
        setAvatar: function (data) {//  这里写登录成功后要执行的函数
            $('.cqLogindiffcut1').hide();
            $('.cqLoginOver').hide();
            $('.cqPWlogin p').text(cqUserName.value+' 您好');
            $('.cq_left_login span').text(cqUserName.value +',您已登录成功');
            $('.cq_left_new').text("再注册一个新用户");
            $('.cqPWlogin').attr('onclick', '').unbind('click');
            $('.cqyanzhenghou').text('尊敬的 ' + cqUserName.value + ' ,您已登录成功!');
            $('.cq_Remenber_or_Forget').hide();
        }
    }
})();


/************************************ 记住密码 ****************************************/
// 复选框点击事件
$(document).ready(function () {
    $(".cqRemenber").labelauty("cqRemenber", "check");
});

/********************************** 获取cookie ************************************* */
function getCookie(key) {
    var arr1 = document.cookie.split('; ');
    for (var i = 0, len = arr1.length; i < len; i++) {
        var arr2 = arr1[i].split('='); //['user2','xc']
        if (arr2[0] == key) {
            return arr2[1];
        }
    }
    return '';
}
$('.cqUserName').val(getCookie("cqUserName1"));
$('.cqPassWord').val(getCookie("cqPassWord1"));