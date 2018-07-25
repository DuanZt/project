let $ = require("jquery");
window.$ = window.jQuery = $;
require("flexslider");

import 'normalize.css';
require("bootstrap/dist/css/bootstrap.min.css");
require("flexslider/flexslider.css");
require("./scss/index.scss");








let slider = () => {
    let $banner = $("#banner");
    let images = $("#banner figure.image_container.float_above img").clone();
    let panels = $("#banner .ce_text").clone().map((i,el)=>{
        $(el).find("figure.image_container").remove();
        return $(el);
    });
    let $flexslider = $("<div class='flexslider banner'></div>");
    let $sliders = $("<ul class='slides'></ul>");
    let $turn = $("<div class='turn'></div>");
    
    images.each(function(i,el) {
        let $li = $('<li></li>');
    //    $li.append($(el));
        $li.css({
            'background-image':`url(${$(el).attr("src")})`
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

    setTimeout(()=>{
        $(".turn").click(()=>{
            let windowHeight = $(window).height();
            let body = $("html, body");
            body.stop().animate({scrollTop:windowHeight}, 500, 'swing');
        });
    })
}

slider();


let dtSlider = (el,item) => {
    let $slider = $(el);
    let images = $slider.find("figure.image_container.float_above").clone();
    let items = $slider.find(item);
    let panels = $slider.find(item).clone().map((i,el)=>{
        $(el).find("figure.image_container").remove();
        return $(el);
    });
    let $flexslider = $("<div class='flexslider dt-slider'></div>");
    let $sliders = $("<ul class='slides'></ul>");
    
    items.hide();
    images.each(function(i,el) {
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

dtSlider('.case-list','.layout_latest');


let scrollBottomTop = () => {
    let $header = $("#header");
    let lastScrollTop = 0;
    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        if (st > lastScrollTop){
            // downscroll code
            $header.removeClass("toshow").addClass("tohide");
        } else {
            // upscroll code
            if(st===0){
                $header.removeClass("toshow").removeClass("tohide");
            }else{
                $header.removeClass("tohide").addClass("toshow");
            }
            
        }
        lastScrollTop = st;
    });
}

scrollBottomTop();


let wrapContent = () => {
    let contents = $(".need-wrap");
    contents.each((i,el)=>{
        let content = $(el).children().not(".image_container");
        content.wrapAll("<div class='wrap'></div>");
    });
}

wrapContent();



let scrollTo = (el,fn,rfn) => {
    let scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    let cHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;
    let oDiv=$(el);
    let oDivOffset = oDiv.offset();
    let offsetTop = oDivOffset.top-cHeight;
    
    if(scrollTop>offsetTop){
        fn(oDiv);
    }else{
        rfn(oDiv);
    }
}

document.onscroll = () => {
    scrollTo('.event-list .layout_latest .wrap',($el) => {
        $(".event-list").addClass("active");
        if($el.length>1){
            $el.each((i,el)=>{
                $(el).find("h2,.info,.teaser").each((j,ell)=>{
                    $(ell).addClass("delay-"+j);
                });
            })
        }else{
            $el.find("h2,.info,.teaser").each((i,el)=>{
                $(el).addClass("delay-"+i);
            });
        }
        
    },($el) => {
        $(".event-list").removeClass("active");
    });
}

