

function addPdMobileMenu(){

    // $("body").bind("touchmove", function(e){
    //     $('body').bind('touchstart',function(e){
    //         startX = e.originalEvent.changedTouches[0].pageX,
    //         startY = e.originalEvent.changedTouches[0].pageY;
    //     });
    //     endX = e.originalEvent.changedTouches[0].pageX,
    //     endY = e.originalEvent.changedTouches[0].pageY;
    //     //获取滑动距离
    //     distanceX = endX-startX;
    //     distanceY = endY-startY;
    //     //判断滑动方向
    //     if(Math.abs(distanceX)>Math.abs(distanceY) && distanceX>0){
    //         alert('往右滑动');
    //     }else if(Math.abs(distanceX)>Math.abs(distanceY) && distanceX<0){
    //         alert('往左滑动');
    //     }
    // })
    $("#header-navlist-item-home .views-element-container").each(function(){
        $(".mobile-menu-body >ul >li:nth-child(3)")
        .append("<ul class=\"mobile-menu-pds\">"+$(this).find(".uf-attr-cloned").text().trim()+"</ul>")
        $(this).find(".views-row").each((i,el)=>{
            let $href=$(el).find(".row-wrap .views-field-name a").attr("href");
            let $text=$(el).find(".row-wrap .views-field-name a").text();
            let $count = $(el).find(".row-wrap .views-field-name-1").text()
            $(".mobile-menu-body >ul >li:nth-child(3) >ul:last-child")
            .append("<a href="+$href+"><li>"+$text+$count+"</li></a>")
        })
    })
    $(".mobile-menu-body >ul >li:nth-child(3)").addClass("arrowed")
    $(".mobile-menu-body >ul >li:nth-child(3) >ul >li").css("font-size", "18px")
    $(".mobile-menu-body >ul >li:nth-child(3) >ul").addClass("menu")
}
addPdMobileMenu();

function kFilter(){
    $(".path-product #block-bartik-content > h2").after("<div class=\"pd-category-select-wrapper\"><select></select></div>")
    $(".path-product #header-navlist-item-home .views-element-container").each(function(){
        if($("#block-bartik-content > h2").text().toLowerCase().match($(this).find(".uf-attr-cloned").text().trim().toLowerCase())){
            $(".pd-category-select-wrapper").prepend("<h3>Product "+$("#block-bartik-content > h2").text()+" :</h3>")
            $(this).find(".views-row").each((i,el)=>{
                let $href=$(el).find(".row-wrap .views-field-name a").attr("href");
                let $text=$(el).find(".row-wrap .views-field-name a").text();
                $(".pd-category-select-wrapper select")
                .append("<option href="+$href+">"+$text+"</option>")
            })
        }
    })
    let $star = "<div class=\"click-me-star\"><img src=\"/sites/default/files/images/star.png\"></div>"
    let $click = "<div class=\"click-me-drag\"><img src=\"/sites/default/files/images/click-me.png\"></div>"
    $(".path-product #block-bartik-content .pd-category-select-wrapper")
    .after($click)
    $(".path-product #block-bartik-content .click-me-drag").after($star)
    $(".pd-category-select-wrapper select").change(function(){
        console.log($(this).find("option:selected").attr("href"))
        window.location.href=$(this).find("option:selected").attr("href")
    })
    $()
    //1st section  Category select wrapper


    $(".path-product .click-me-drag").before("<div class=\"pd-kfilter\"></div>")
    $(".pd-kfilter").prepend("<h3 style=\"text-align:left;\">Filter : <a id=\"pd-reset-mobile\">Reset</a></h3>")
    $(".path-product .table-wrap table th").each((j,em)=>{
        if(j>0 && j<$(".path-product .table-wrap table th").length-1){
            let $sub = $(em).find("sub").text()
            let $j = $(em).find(".flt_checklist >label").text().indexOf(" ")
            let $a=$(em).find(".flt_checklist >label").text().substring(0,$j)
            let $b=$(em).find(".flt_checklist >label").text().substring($j)
            if($(em).find(".flt_checklist >label").text()=="Star"){
                $(".pd-kfilter").append("<select style=\"display:none;\"><option>"+$a+$b+"</option></select>")
            }else{
                $(".pd-kfilter").append("<select><option>"+$a+$b+"</option></select>")
            }
            
            $(em).find(".flt_checklist_item").each(function(){
                $(".pd-kfilter select:last-child").append("<option>"+$(this).find("label").text()+"</option>")
            })
        }
    })
    $(".pd-kfilter select").each((k,en)=>{
        $(en).find("option").eq(1).remove()
        $(en).bind("change", function(){
            let i = $(this).get(0).selectedIndex;
            console.log(i)
            $(".path-product .table-wrap table th").eq(k+1).find(".flt_checklist_item").eq(0).find("input").click();
            $(".path-product .table-wrap table th").eq(k+1).find(".flt_checklist_item").eq(i).find("input").click();
        })
    })

    $(".pd-kfilter a#pd-reset-mobile").click(function(){
        $("a.reset").click()
        $(".pd-kfilter select").prop('selectedIndex',0)
    })
}
kFilter();



let slider = () => {
    let images = $(".quality-certs-imgs img");

    
    // images.each(function(i,el) {
    //     let $li = $('<li></li>');
    //     console.log("dddddd")
    // //    $li.append($(el));
    //     $li.css({
    //         'background-image':`url(${$(el).attr("src")})`
    //     });
    //     $sliders.append($li);
    // });
    images.each(function(){
        $(this).wrap("<li class=''></li>")
    })
    $(".quality-certs-imgs li").wrapAll("<ul></ul>");
    $(".quality-certs-imgs ul").wrap("<div class=\"slides\"></div>");
    $(".quality-certs-imgs ul").wrap("<div class=\"flexslider\"></div>");
    let $sliders = $(".quality-tabs-mobile");
    $sliders.addClass("slides")


    $('.flexslider').flexslider({
                animation: "slide",
                animationLoop: true,
                pauseOnAction: true,           // Boolean: 用户操作时停止自动播放
                pauseOnHover: false,
   });
}

function swipePage(){//页面滑动切换效果
    //$("#goodsdetil").animate({right:-(e.pageX)}/*,400,function(){$("#goodsMealDiv").empty();}*/);
    //$('body').css("overflow","hidden");
    $('body').on('touchmove', function (event) {//禁止浏览器上下滑动
        event.preventDefault();
    });
    var startX, startY, endX, endY;
    var showADID = 1;
    document.getElementById("goodsdetil").addEventListener("touchstart", touchStart, false);
    document.getElementById("goodsdetil").addEventListener("touchmove", touchMove, false);
    document.getElementById("goodsdetil").addEventListener("touchend", touchEnd, false);
    function touchStart(event) {
        var touch = event.touches[0];
        startY = touch.pageY;
        startX = touch.pageX;
    }
    function touchMove(event) {
        var touch = event.touches[0];
        endX = touch.pageX;
        //console.log("X轴移动大小：" + (startX - endX));
        if((startX - endX)<0){
            $("#goodsdetil").animate({right:(startX - endX)},0);
        }
    }
    function touchEnd(event) {
        if((startX - endX)>-300){
            $("#goodsdetil").animate({right:"0px"},300);
        }else if((startX - endX)<-300){
            pageHide();
        }
    }
}
//swipePage();
function kSlider(){
    $("body").swipe(function( direction, offset ) {
        console.log( "Moving", direction.x, "and", direction.y );
        console.log( "Touch moved by", offset.x, "horizontally and", offset.y, "vertically" );    
      });
}
//kSlider();
