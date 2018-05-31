// 全页切换
var mySwiperZebra = new Swiper('.zebra-wrapper', {
    direction: 'vertical',
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    }
})

// 结果切换
var mySwiperAnswer = new Swiper('.result-wrapper', {
    direction: 'horizontal',
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    }
})

// loding动画
var lodingText = 0,
    oLoadingCar = document.querySelector('.loading-car'),
    oLodingText = document.querySelector('.loding-text');

oLoadingCar.classList.add('loading-car-active');
oLodingText.time = setInterval(function () {
    lodingText += 2;
    oLodingText.innerHTML = lodingText + '%';
    if (lodingText == 100) {
        Switch(1)
        clearInterval(oLodingText.time);
    }
}, 20)


// 全页切换页面时调用的动画
function Switch(index) {
    // 点击切换到当前下标的页面
    mySwiperZebra.slideTo(index, 1000, false);
    //清除所有的动画class
    for (i = 0; i < mySwiperZebra.slides.length; i++) {
        slide = mySwiperZebra.slides.eq(i);
        slide.removeClass('ani-slide');
    }
    // 添加当前页面的动画class
    slide = mySwiperZebra.slides.eq(mySwiperZebra.activeIndex);
    slide.addClass('ani-slide');
}

//开启反套路
$('.homePage-but').click(function () {
    Switch(2)
})

//选择男女进入选择题
var sex = null;
$('.gender-girl-but').click(switchChoice)
$('.gender-boy-but').click(switchChoice)
function switchChoice() {
    var attr = $(this).attr("class")
    if (attr == 'gender-boy-but') {
        sex = 'boy'
    } else {
        sex = 'girl'
    }
    Switch(3)
}

//选择题目
var off = true;
$('.click-boyanswer li').click(switchItem)
function switchItem() {
    if (!off) {
        return false;
    }
    off = false;
    var url = "url(./img/shape" + ($(this).index() + 1) + ".png)no-repeat left center",
        befUrl = $(this).css('background')
    index = mySwiperZebra.activeIndex - 2,
        oThis = $(this);

    //改变css样式
    $(this).css({
        "color": "#f54b24",
        "background": url
    })
    //表情出现
    var face = '.answer-page' + index + '-face';
    $(face).addClass("answer-page" + index + "-face-active")
    setTimeout(function () {
        Switch(mySwiperZebra.activeIndex + 1)
        setTimeout(function () {
            $(face).removeClass("answer-page" + index + "-face-active")
            oThis.css({
                "color": "#373737",
                "background": befUrl
            });
            off = true;
        }, 3000)
    }, 1000)

}

//最后一题，跳转页面
$('.click-boyanswer5 li').click(function () {
    if (!off) {
        return false;
    }
    off = false;
    var url = "url(./img/shape" + ($(this).index() + 1) + ".png)no-repeat left center",
        index = mySwiperZebra.activeIndex - 2,
        befUrl = $(this).css('background')
    oIdex = $(this).index(),
        oThis = $(this);

    //改变css样式
    $(this).css({
        "color": "#f54b24",
        "background": url
    })
    //表情出现
    var face = '.answer-page' + index + '-face';
    $(face).addClass("answer-page" + index + "-face-active")


    setTimeout(function () { resultFn(oIdex) }, 1000)
    function resultFn(oIdex) {
        if (sex == 'boy' && oIdex == 0) {
            var goIndex = mySwiperZebra.activeIndex + 1
        } else if (sex == 'boy' && oIdex == 1) {
            var goIndex = mySwiperZebra.activeIndex + 2
        } else if (sex == 'boy' && oIdex == 2) {
            var goIndex = mySwiperZebra.activeIndex + 3
        } else if (sex == 'girl' && oIdex == 0) {
            var goIndex = mySwiperZebra.activeIndex + 4
        } else if (sex == 'girl' && oIdex == 1) {
            var goIndex = mySwiperZebra.activeIndex + 5
        } else if (sex == 'girl' && oIdex == 2) {
            var goIndex = mySwiperZebra.activeIndex + 6
        }

        Switch(goIndex)

        setTimeout(function () {
            $(face).removeClass("answer-page" + index + "-face-active")
            oThis.css({
                "color": "#373737",
                "background": befUrl
            });
            off = true;
        }, 3000)
    }


})