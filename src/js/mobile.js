
function addBurger(){
    let $burger = "<a class=\"burger\"><span></span><span></span></a>"
    $("#header").append($burger);
    $(".burger").click(()=>{
        $(".mobile-menu").toggleClass("active");
        $("body").toggleClass("unscroll")
    })
    // $(".burger").toggle(()=>{
    //     $("body").css("overflow","hidden")
    //     $("body").css("overflow", "visible")
    // })
}
addBurger();

function addMobileMenu(){
    let $menu = "<div class=\"mobile-menu\"><div class=\"mobile-menu-header\"></div><div class=\"mobile-menu-body\"></div></div>";

    let $search = "<a href=\"/search\"><div class=\"mobile-menu-search\"><i class=\"fa fa-search\"></i></div></a>"
    let $close = "<div class=\"mobile-menu-close\"><img src=\"/sites/default/files/images/menu-close.png\"></div>"
    $("body").prepend($menu);
    $(".mobile-menu-header").append($search);
    $(".mobile-menu-header").append($close);
    $(".mobile-menu-close img").click(function(){
        $(".mobile-menu").removeClass("active")
        $("body").removeClass("unscroll")
    })
    $(".mobile-menu-header >a").attr("href","/search/node?keys=")
}
addMobileMenu();

function cloneNav(){
    $(".mobile-menu-body").append($("#header .navigation >ul.menu").clone());
    $(".mobile-menu-body").children("ul").append("<li class=\"menu-item\"><a href=\"/helpdesk\">Helpdesk</a></li>");
    $(".mobile-menu-body").children("ul").append($("#block-footer .block p:last-child a").clone());
    $(".mobile-menu-body").children("ul").children("a").wrap("<li class=\"menu-item\"></li>");


    $(".mobile-menu-body").children("ul").find("ul").parent().addClass("arrowed");
    $(".mobile-menu-body").find("li").each(function(){
        $(this).click(function(){
            $(this).toggleClass("active")
        })
    })
    $(".mobile-menu-body >ul.menu >li:nth-child(3) a").attr("href","/en/product/diodes/2098")
    $(".mobile-menu-body").append($(".block-language").clone())
}
cloneNav();

function contactMobile(){
    $(".path-contact-us .page-title").after("<select class=\"cm-select\"></select>");
    $(".path-contact-us #main-wrapper .views-row").each((i,el)=>{
        $(".cm-select").append("<option>"+$(el).find(".views-field-title span.field-content").text().trim()+"</option>")
    })
    $(".cm-select").change(function(){
        $(".path-contact-us #main-wrapper .views-row").removeClass("active")
        $(".path-contact-us #main-wrapper .views-row").eq($(".cm-select").prop('selectedIndex')).addClass("active")
    })
    $(".path-contact-us #main-wrapper .views-row").eq(0).addClass("active")
    
}
contactMobile();

function distributorsMobile(){
    $(".path-distributors #block-bartik-content .views-element-container >div >.wrap table")
    .wrap("<div class=\"dtable-wrap\"></div>")
}
distributorsMobile();

function addClickMe(){
    let $click = "<div class=\"click-me-drag\"><img src=\"/sites/default/files/images/click-me.png\"></div>"
    let $click_hover = "<div class=\"click-me-hover\"><img src=\"/sites/default/files/images/contact-pointer.png\"></div>"
    $(".path-applications .inner >h2+p").after($click_hover)
    $(".path-contact-us .cm-select").after($click_hover)
    $(".path-distributors .dtable-wrap").before($click)
    
}
addClickMe();

function selectProductType(){
    $(".path-product #block-bartik-content >h2").after("<div class=\"\"></div>")
}
selectProductType();

function qualityMobile(){
    $(".path-quality .quality-certs").append("<div class=\"quality-tabs-mobile\"></div>")
    $(".path-quality .quality-certs .quality-tabs-mobile").append("<div class=\"quality-tabs-mobile-item\"></div>")
    $(".path-quality .quality-certs .quality-tabs-mobile").append("<div class=\"quality-tabs-mobile-item\"></div>")
    $(".path-quality .quality-certs .quality-tabs-mobile").append("<div class=\"quality-tabs-mobile-item\"></div>")
    $(".path-quality .quality-certs-imgs img").eq(0).addClass("active")
    $(".path-quality .quality-certs .quality-tabs-mobile-item").each((i,el)=>{
        $(el).click(function(){
            $(el).addClass("active").siblings().removeClass("active");
            $(".path-quality .quality-certs-imgs img").eq(i).addClass("active").siblings().removeClass("active");
        })

    })
    
}
qualityMobile();

function disableArrowed(){
    $(".mobile-menu-body >ul >li.arrowed >a").attr("href", "javascript:void(0)")
    $(".mobile-menu-body >ul >li:nth-child(3) >a").attr("href", "javascript:void(0)")
}
disableArrowed();

function changeCaptcha(){
    $(document).ready(function(){
        $(".captcha img").bind("click", function(){
            if($(".captcha a").length>0){
                $(".captcha a")[0].click()
            }
        })
    })

}
changeCaptcha();
