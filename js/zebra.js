// 全页切换
var mySwiperZebra = new Swiper('.zebra-wrapper', {
    direction: 'vertical',
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    }
})
// 问答切换
var mySwiperAnswer = new Swiper('.answer-wrapper', {
    direction: 'horizontal',
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
$('.homePage-but').click(function(){
    Switch(2)
})

//选择男女进入选择题
$('.gender-girl-but').click(switchChoice)
$('.gender-boy-but').click(switchChoice)
function switchChoice(){
    Switch(3)
}