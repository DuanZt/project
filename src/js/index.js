import './html'
import './mobile'
import './helpdesk'
import './applications'
import './home'
import './product'
import './products'
import './menu'
import './contact'
import './applications'
import './news'
import './about'
import './helper'
import './search'
import './chemical'
import './compatable'
import './helpdesk'
import './kfilter'
import './cn'
// import './video'
//import './quality'



function delay(els) {
  els.each((i, el) => {
    $(el).addClass("delay-" + (i + 1));
  })
}

// delay($('.home-banner .field > *'));
// delay($('.content>*'));


let scrollTo = (el, fn, rfn) => {
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  let cHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  let oDiv = $(el);
  if (!oDiv.length) {
    return;
  }
  let oDivOffset = oDiv.offset();
  let offsetTop = oDivOffset.top - cHeight;

  if (scrollTop > offsetTop) {
    fn(oDiv);
  } else {
    rfn(oDiv);
  }
}

document.onscroll = () => {
  scrollTo('.lr-wrapper .content', ($el) => {
    $el.addClass("active");
  }, ($el) => {
    $el.removeClass("active");
  });
}

//console.log("If you have any technical problem ,you can contact me via naizut@163.com")

// $.fn.scrollUnique = function() {
//   return $(this).each(function() {
//       var eventType = 'mousewheel';
//       // 火狐是DOMMouseScroll事件
//       if (document.mozHidden !== undefined) {
//           eventType = 'DOMMouseScroll';
//       }
//       $(this).on(eventType, function(event) {
//           // 一些数据
//           var scrollTop = this.scrollTop,
//               scrollHeight = this.scrollHeight,
//               height = this.clientHeight;

//           var delta = (event.originalEvent.wheelDelta) ? event.originalEvent.wheelDelta : -(event.originalEvent.detail || 0);        

//           if ((delta > 0 && scrollTop <= delta) || (delta < 0 && scrollHeight - height - scrollTop <= -1 * delta)) {
//               // IE浏览器下滚动会跨越边界直接影响父级滚动，因此，临界时候手动边界滚动定位
//               this.scrollTop = delta > 0? 0: scrollHeight;
//               // 向上滚 || 向下滚
//               event.preventDefault();
//           }        
//       });
//   });	
// };

// document.getElementsByClassName("mobile-menu").scrollUnique();