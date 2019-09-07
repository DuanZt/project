// let $ = require("jquery");
// 已经以插件形式引入webpack，无需再显示的引入

require("flexslider");
require("./js/index");

// import 'normalize.css';
require("bootstrap/dist/css/bootstrap.min.css");
require("font-awesome/css/font-awesome.css");
require("flexslider/flexslider.css");
require("animate.css/animate.css");
require("./scss/index.scss");




let slider = () => {
  let $banner = $("#banner");
  if (!$banner.length) {
    return;
  }
  let images = $("#banner figure.image_container.float_above img").clone();
  let panels = $("#banner .ce_text").clone().map((i, el) => {
    $(el).find("figure.image_container").remove();
    return $(el);
  });
  let $flexslider = $("<div class='flexslider banner'></div>");
  let $sliders = $("<ul class='slides'></ul>");
  let $turn = $("<div class='turn'></div>");

  images.each(function (i, el) {
    let $li = $('<li></li>');
    //    $li.append($(el));
    $li.css({
      'background-image': `url(${$(el).attr("src")})`
    });
    $li.append(panels[i]);
    $sliders.append($li);
  });

  $flexslider.append($sliders);
  $flexslider.append($turn);
  $banner.after($flexslider);

  $('.flexslider').flexslider({
    animation: "slide"
  });

  setTimeout(() => {
    $(".turn").click(() => {
      let windowHeight = $(window).height();
      let body = $("html, body");
      body.stop().animate({
        scrollTop: windowHeight
      }, 500, 'swing');
    });
  })
}

slider();


let dtSlider = (el, item) => {
  let $slider = $(el);
  if (!$slider.length) {
    return;
  }
  let images = $slider.find("figure.image_container.float_above").clone();
  let items = $slider.find(item);
  let panels = $slider.find(item).clone().map((i, el) => {
    $(el).find("figure.image_container").remove();
    return $(el);
  });
  let $flexslider = $("<div class='flexslider dt-slider'></div>");
  let $sliders = $("<ul class='slides'></ul>");

  items.hide();
  images.each(function (i, el) {
    let $li = $('<li></li>');
    $li.append($(el));
    $li.append(panels[i]);
    $sliders.append($li);
  });

  $flexslider.append($sliders);
  $slider.append($flexslider);

  $slider.find('.flexslider').flexslider({
    animation: "slide"
  });
}

dtSlider('.case-list', '.layout_latest');


let scrollBottomTop = () => {
  let $header = $("#header");
  if (!$header.length) {
    return;
  }
  let lastScrollTop = 0;
  $(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
      // downscroll code
      $header.removeClass("toshow").addClass("tohide");
    } else {
      // upscroll code
      if (st === 0) {
        $header.removeClass("toshow").removeClass("tohide");
      } else {
        $header.removeClass("tohide").addClass("toshow");
      }

    }
    lastScrollTop = st;
  });
}

scrollBottomTop();
