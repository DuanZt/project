import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css';
(function () {
    $(".quality-certs-imgs").addClass("swiper-wrapper")
    let $imgs = $(".quality-certs-imgs img");
    $imgs.wrap("<div class=\"swiper-slide\"></div>")
    $(".swiper-slide").wrapAll("<div class=\"swiper-container\"></div>")

    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
        // 如果需要滚动条
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      })      
})()

