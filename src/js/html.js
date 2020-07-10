let searchBlock = () => {
  $("#header .block-language").append("<div class='ul-label'>" + $("#header li.is-active").text() + "</div>");
}

searchBlock();
let domFormat = () => {
  $('.home-menu').after($(".product-menu"));
  
}
domFormat();

// let footerTargetblank = () => {
//   $("#block-footer .block p a").attr("target", "_blank")
// }
let addLoading = () => {
  $(".path-product #block-bartik-content table")
  .before("<div class=\"pd-table-loading\"><div></div></div>")
  // if($("title").text().match("首页 | WeEn")){
  //   $("head").after("<div class=\"global-preloading\"><div class=\"loader-xbox\"></div></div>")
  //   $(".global-preloading").hide();
  // }else{
  //   $("head").after("<div class=\"global-preloading\"><div class=\"loader-xbox\"></div></div>")
  // } 
  // function reverseLanguage(){
    // $(".block-language").hide();
    // let a=$(".block-language ul.links .en");
    // let b=$('.block-language ul.links .zh-hans');
    // b.after(a);
    // $('.block-language .ul-label').hide();
    // a.find("a").text("EN");
    // $(".block-language").show();
  //   $(".video").each(function(){
  //   var id = $(this).text();
  //   polyvObject(this).videoPlayer({
  //       'width':'367',
  //     'height':'250',
  //       'vid' : id,
  //    'forceH5':true
  //   });
  // })
    // b.find("a").attr("href", "javascript:void(0)")
  //}

  // reverseLanguage();
}
addLoading();


// let checkLanguage = () =>{
//   //cn跳中文版
//   $(".path-frontpage .home-banner").hide()
//   $(".block-language").hide()

//   if(window.location.href.match("ween-semi.cn")){
//     $("html").hide()
//     window.location.href="http://www.ween-semi.com/cn"
//     console.log("zh-cn")
//     return false;
//   }
//   /* get browser default lang */  
//   if (navigator.userLanguage) {  
//       var baseLang = navigator.userLanguage.substring(0,2).toLowerCase();  
//   } else {  
//       var baseLang = navigator.language.substring(0,2).toLowerCase();  
//   }
//   console.log(window.location.href=="http://www.ween-semi.com/"||window.location.href=="http://www.ween-semi.com")
//   if(window.location.href=="http://www.ween-semi.com/"||window.location.href=="http://www.ween-semi.com"){
//     console.log(baseLang=='zh')
//     if(baseLang=='zh'||baseLang=='zh-CN'){
//       $("html").hide()
//       window.location.href="http://www.ween-semi.com/cn"
//       return false;
//     }else{
//       $("html").hide()
//       window.location.href="http://www.ween-semi.com/en"
//       return false
//     }
//   }
  
//   if(window.location.href.match(".com/en")||drupalSettings.path.currentLanguage == "zh-hans"||window.location.href.match(".com/user")){

//   }else{
//     if(document.referrer.match(".com/cn")){
//       $("html").hide()
//       let i = window.location.href.indexOf(".com") +4;
//       window.location.href = window.location.href.substring(0,window.location.href.indexOf(".com/")+5)+"cn/"+window.location.href.substring(window.location.href.indexOf(".com/")+5)
//     }else{
//       $("html").hide()
//       let i = window.location.href.indexOf(".com") +4;
//       window.location.href = window.location.href.substring(0,window.location.href.indexOf(".com/")+5)+"en/"+window.location.href.substring(window.location.href.indexOf(".com/")+5)
//     }
//   }
  
//   if(window.location.href.match(".com/en/about-content")){
//     window.location.href="http://www.ween-semi.com/en/about"
//     $("body").hide()
//   }

  
// }
// checkLanguage();


let optimizeVideo = () =>{
  // let videos = $(".path-frontpage #main .videos ul:nth-last-child(3) li .views-row .field-content").clone()
  // $(".path-frontpage #main .videos ul:nth-last-child(3) li .views-row .field-content").ready(function(){
  //   $(".path-frontpage #main .videos ul:nth-last-child(3) li .views-row .views-field-body .field-content").hide();
  //   $(".path-frontpage #main .videos ul:nth-last-child(3) li .views-row .views-field-title").css("margin-top","270px")
  //   $(".path-frontpage #main .videos ul:nth-last-child(3) li .views-row .views-field-field-head-image")
  //   .each((i,el)=>{
  //     $(el).prepend("<div class=\"vd-cover\"></div>")
  //     $(el).click(function(){
  //       // $(el).parent().find(".views-field-body .field-content").css("opacity", "0")
  //       $(el).parent().find(".views-field-body .field-content").show()
  //       $(el).hide();
  //       $(el).parent().find(".views-field-title").css("margin-top","0px")
  //       // $(el).parent().find(".views-field-body .field-content >*").ready(function(){
  //       //   setTimeout(function(){
  //       //     $(el).parent().find(".views-field-body .field-content img").click()
  //       //   }, 100)
  //       // })
  //       $(el).find(".vd-cover").addClass("clicked")
  //     })
  //   })
  // })
}
optimizeVideo();