function searchTabs() {
  let $tabs = $(".home-banner .field ul li");
  let $wraps = $('.home-banner .field form');
  
  $(".home-banner .field ul").after("<div id=\"search-notice\">Enter Part Number to be crossed to WeEn</div>");
  $tabs.each((i, el) => {
    $(el).click(() => {
      $tabs.removeClass("active");
      $wraps.removeClass("active");
      $(el).addClass("active");
      $wraps.eq(i).addClass("active");
      $(".path-frontpage .home-banner .field div.block-unformatted").detach();
      // $wraps.fadeOut();
      // $wraps.eq(i).fadeIn();
      if($(".home-banner .field ul li:nth-child(2)").hasClass("active")){
        $("#search-notice").addClass("active");
        $("#search-notice").removeClass("delay-4");
      }else{
        $("#search-notice").removeClass("active").removeClass("delay-4");
      }
    })
  })
}

searchTabs();


function makeNews() {
  let lists = $(".home-news").clone();
  let tabs = $(".news-block h2").clone();
  let news = $(".path-frontpage .news");
  let $tabs = $("<ul></ul>");
  let $lists = $("<ul></ul>");

  tabs.each((i, el) => {
    $tabs.append($("<li></li>").append($(el)));
  });
  lists.each((i, el) => {
    $lists.append($("<li></li>").append($(el)));
  });

  news.append($tabs).append($lists);
}

makeNews();


function makeVideos() {
  let lists = $(".home-video .video-block");
  let tabs = $(".home-video h2").clone();
  let videos = $(".path-frontpage .videos");
  let $tabs = $("<ul></ul>");
  let $lists = $("<ul></ul>");

  tabs.each((i, el) => {
    $tabs.append($("<li></li>").append($(el)));
  });
  lists.each((i, el) => {
    $lists.append($("<li></li>").append($(el)));
  });

  videos.append($tabs).append($lists);

  let $la = "<div class=\"videos-arrow-left\"><img src=\"/sites/default/files/images/videos-left-arrow.svg\"></div>";
  let $ra = "<div class=\"videos-arrow-right\"><img src=\"/sites/default/files/images/videos-right-arrow.svg\"></div>";
  videos.append($la);
  videos.append($ra);
}

makeVideos();



function helpDesk(){
  // setTimeout(function(){
  //   $('#block-webform').prepend("<div id=\"w-before\">Helpdesk</div>");
  //   $('#block-webform #w-before').bind("click", function(){
  //     $('#block-webform').toggleClass("is-active");
  //   })
  //   $("#block-webform").submit(function(){
  //     alert("Submit successfully!")
  //   })
  // },1000)
  $(document).ready(function(){
    if($('#block-webform').length){
      $('#block-webform').prepend("<div id=\"w-before\">Helpdesk</div>");
      $('#block-webform #w-before').bind("click", function(){
        $('#block-webform').toggleClass("is-active");
      })
      $("#block-webform").submit(function(){
        alert("Submit successfully!")
      })
    }else{
      setTimeout(function(){
        $('#block-webform').prepend("<div id=\"w-before\">Helpdesk</div>");
        $('#block-webform #w-before').bind("click", function(){
          $('#block-webform').toggleClass("is-active");
        })
        $("#block-webform").submit(function(){
          alert("Submit successfully!")
        })
      }, 2000)
    }

  })
}

helpDesk();

function newsTabs() {
  let $tabs = $(".path-frontpage .news ul:nth-child(2) li");
  let $wraps = $('.path-frontpage .news ul:last-child li');


  $(".path-frontpage .news ul:nth-child(2) li:first-child").addClass("active");
  $(".path-frontpage .news ul:last-child li:first-child").addClass("active");
  $(".path-frontpage .news .more-link")
  .before("<div class=\"news-tabs-mobile\"></div>")
  $(".path-frontpage .news-tabs-mobile").append("<div class=\"news-tabs-mobile-item\"></div>")
  $(".path-frontpage .news-tabs-mobile").append("<div class=\"news-tabs-mobile-item\"></div>")
  $(".path-frontpage .news-tabs-mobile").append("<div class=\"news-tabs-mobile-item\"></div>")
  $('.path-frontpage .news ul:last-child li.active .views-row').eq(0).addClass("active");
  $(".path-frontpage .news-tabs-mobile-item").eq(0).addClass("active");
  $(".path-frontpage .news ul:last-child li.active .news-tabs-mobile-item").each((j,em)=>{
    $(em).click(() => {
      $(".path-frontpage .news-tabs-mobile-item").removeClass("active")
      $(em).addClass("active");
      $('.path-frontpage .news ul:last-child li.active .inner .views-row').eq(j).addClass("active")
      .siblings().removeClass("active");
    })
  })
  $(".path-frontpage .news .more-link a").attr("href", "latest");
  $tabs.each((i, el) => {
    $(el).click(() => {
      $tabs.removeClass("active");
      $wraps.removeClass("active");
      $(el).addClass("active");
      $wraps.eq(i).addClass("active");
      $(".path-frontpage .news ul:last-child li.active .news-tabs-mobile-item").removeClass("active");
      $('.path-frontpage .news ul:last-child li.active .views-row').removeClass("active");
      $('.path-frontpage .news ul:last-child li.active .views-row').eq(0).addClass("active");
      
      $(".path-frontpage .news ul:last-child li.active .news-tabs-mobile-item").eq(0).addClass("active");
      let arr = new Array();
      setTimeout(function(){
        if(window.location.href.match(".com/cn")){
          arr[0]="cn/latest";
          arr[1]="cn/notice";
          arr[2]="cn/exhibitions";
        }
        else{
          arr[0]="latest";
          arr[1]="notice";
          arr[2]="exhibitions";
        }
  
        $.each(arr,(j,ek)=>{
          if(j==i){
            $(".path-frontpage .news .more-link a").attr("href", ek);
          }
        })
      },300)

      $(".path-frontpage .news ul:last-child li.active .news-tabs-mobile-item").each((j,em)=>{
        $(em).click(() => {
          console.log(j)
          $(".path-frontpage .news-tabs-mobile-item").removeClass("active")
          $(em).addClass("active");
          $('.path-frontpage .news ul:last-child li.active .inner .views-row').eq(j).addClass("active")
          .siblings().removeClass("active");
        })
      })
    })
  })
}

newsTabs();

function displayVideos(s,e){
  var $v1 = $(".path-frontpage .videos ul:nth-last-child(3) li");
  // $v1.find(".views-row").hide();
  $v1.each((a,ea)=>{
    $(ea).find(".block-unformatted .views-row").each((b,eb)=>{
      if(b>=s && b<=e){
        $(eb).addClass("displayed");
      }else{
        $(eb).removeClass("displayed");
      }
      if(b==s+1){
        $(eb).addClass("mid")
      }else{
        $(eb).removeClass("mid")
      }
    })
  })
}
function disableLeft(){
  $(".videos-arrow-left").css("opacity","0.5");
}

function videosTabs() {
  let $tabs = $(".path-frontpage .videos ul:nth-child(2) li");
  let $wraps = $('.path-frontpage .videos ul:nth-last-child(3) >li');
  let $wraps1 = $('.path-frontpage .videos ul:nth-last-child(3) li');
  var $start = 0;
  var $end = $start+2;
  $(".videos-arrow-left").css("opacity","0.1");
  $(".path-frontpage .videos ul:nth-child(2) li:first-child").addClass("active");
  $(".path-frontpage .videos ul:nth-last-child(3) li:first-child").addClass("active");
  var $l = $(".path-frontpage .videos ul:nth-last-child(3) li.active")
  .find(".block-unformatted .views-row").length;//count of views-row

  //preload intialization
  displayVideos($start, $end);
  $(".displayed").removeClass("active")
  $(".displayed:first-child").addClass("active")
  

  $(".videos-arrow-left").click(function(){
    let $l = $(".path-frontpage .videos ul:nth-last-child(3) li.active")
    .find(".block-unformatted .views-row").length;
    let $a = $(".path-frontpage .videos ul:nth-last-child(3) li.active")
    .find(".block-unformatted .views-row.active").index();
    if($a>0){
      $(".path-frontpage .videos ul:nth-last-child(3) li.active")
    .find(".block-unformatted .views-row").removeClass("active")
    $(".path-frontpage .videos ul:nth-last-child(3) li.active")
    .find(".block-unformatted .views-row").eq($a-1).addClass("active")
    }
    if($l>3){
      if($start>0){
        $start-=1;
        $end-=1;
      }
      if($start>0){
        $(".videos-arrow-left").css("opacity","1");
      }
      if($end<$l-1){
        
        $(".videos-arrow-right").css("opacity","1");
      }
    }
    // console.log($l)
    // console.log($start)
    // console.log($end)
    displayVideos($start, $end);
    if($start==0){
      $(".videos-arrow-right").css("opacity","1");
      $(".videos-arrow-left").css("opacity","0.1");
    }
  })

  $(".videos-arrow-right").click(function(){
    let $l = $(".path-frontpage .videos ul:nth-last-child(3) li.active")
    .find(".block-unformatted .views-row").length;
    let $a = $(".path-frontpage .videos ul:nth-last-child(3) li.active")
    .find(".block-unformatted .views-row.active").index();
    if($a<$l-1){
      $(".path-frontpage .videos ul:nth-last-child(3) li.active")
    .find(".block-unformatted .views-row").removeClass("active")
    $(".path-frontpage .videos ul:nth-last-child(3) li.active")
    .find(".block-unformatted .views-row").eq($a+1).addClass("active")
    }
    if($l>3){
      if($end<$l-1){
        $start+=1;
        $end+=1;
      }
      if($start>0){
        $(".videos-arrow-left").css("opacity","1");
      }
      if($end>=$l-1){
        
        $(".videos-arrow-right").css("opacity","0.1");
      }
      // if($end==$l){
      //   $(".videos-arrow-right").hide()
      // }
    }
    displayVideos($start, $end);
    if($end>=$l-1){
      $(".videos-arrow-left").css("opacity","1");
      $(".videos-arrow-right").css("opacity","0.1");
    }
  })

  $tabs.each((i, el) => {
    $(el).click(() => {
      $(".videos-arrow-left").css("opacity","0.1");
      $(".videos-arrow-right").css("opacity","1");
      $tabs.removeClass("active");
      $wraps1.removeClass("active");
      $(el).addClass("active");
      console.log("i="+i)
      $wraps.eq(i).addClass("active");
      $start = 0;
      $end = $start+2;
      displayVideos(0, 2);
    })
  })
}

videosTabs();

function autoCompleted() {
  $(".path-frontpage .home-banner .field form input[type='text']").attr("autocomplete","off");
  // $(".path-frontpage #block-views-block-product-block-2 form").prepend("<i class=\"fa fa-search\"></i>");
  // $(".path-frontpage #block-views-block-product-block-3 form").prepend("<i class=\"fa fa-search\"></i>");
  $(".path-frontpage .home-banner .field form:nth-last-child(2) input[type='text']").bind("input propertychange",function(ev){
    ev.preventDefault();
      var str = $(".path-frontpage .home-banner .field form.active input[type='text']").val();
      if(str.trim().length>0){
        if(window.location.href.match(".com/cn")){
          $.ajax({
            type: "POST",
            url: "cn/views/ajax?_wrapper_format=drupal_ajax",
            data: "combine="+str+"&view_name=product&view_display_id=block_2&view_args=&view_path=%2Fween%2Fen%2Fviews%2Fajax&view_base_path=product&view_dom_id=29480e6ee76292a636baf95180a2cf93b4f6de85b811c21dabb5a099e28be162&pager_element=0&_drupal_ajax=1&ajax_page_state%5Btheme%5D=bartik&ajax_page_state%5Btheme_token%5D=&ajax_page_state%5Blibraries%5D=admin_toolbar%2Ftoolbar.tree%2Cadmin_toolbar_tools%2Ftoolbar.icon%2Cbartik%2Fcustom%2Cbartik%2Fglobal-styling%2Cbetter_exposed_filters%2Fgeneral%2Cbetter_exposed_filters%2Fgeneral%2Cbetter_exposed_filters%2Fgeneral%2Cbig_pipe%2Fbig_pipe%2Cckeditor%2Fdrupal.ckeditor%2Cckeditor%2Fdrupal.ckeditor.plugins.drupalimagecaption%2Cclassy%2Fbase%2Cclassy%2Fmessages%2Cclassy%2Fnode%2Ccontextual%2Fdrupal.contextual-links%2Ccontextual%2Fdrupal.contextual-toolbar%2Ccore%2Fdrupal.active-link%2Ccore%2Fhtml5shiv%2Ccore%2Fnormalize%2Cdevel%2Fdevel-toolbar%2Ceditor%2Fquickedit.inPlaceEditor.formattedText%2Cexamples%2Fexamples.icons%2Cshortcut%2Fdrupal.shortcut%2Csystem%2Fbase%2Ctoolbar%2Ftoolbar%2Ctoolbar%2Ftoolbar.escapeAdmin%2Cuser%2Fdrupal.user.icons%2Cviews%2Fviews.ajax%2Cviews%2Fviews.ajax%2Cviews%2Fviews.ajax%2Cviews%2Fviews.module%2Cviews%2Fviews.module%2Cviews%2Fviews.module%2Cwebform%2Fwebform.contextual%2Cwebform%2Fwebform.element.details.save%2Cwebform%2Fwebform.element.details.toggle%2Cwebform%2Fwebform.form%2Cwebform%2Fwebform.theme.bartik",
            async: true,//使用false会造成卡顿
            success: function(data){
              var arr = (JSON.stringify(data, ["data"]));
              $.each(JSON.parse(arr), function(i,obj){
                if(obj.data!=undefined){
                  $(".path-frontpage .home-banner .field div.block-unformatted").detach();
                  $(".path-frontpage .home-banner .field form.active").after("<div class=\"block-unformatted\">"+obj.data+"</div>");
                
                  if($(".path-frontpage .home-banner .field form.active").next().find(".block-unformatted").children(".views-row").length<1){
                    $(".path-frontpage .home-banner .field div.block-unformatted").detach();
                    if(window.location.href.match(".com/cn")){
                      $(".path-frontpage .home-banner .field form.active").after("<div class=\"block-unformatted\">"+"<div class=\"no-res\">"+"匹配的瑞能产品个数: 0;"+"</div>"+"</div>");
                    }else{
                      $(".path-frontpage .home-banner .field form.active").after("<div class=\"block-unformatted\">"+"<div class=\"no-res\">"+"Matching WeEn products: 0"+"</div>"+"</div>");
                    }
                    
                  }
                  dropdownWrap();
                }
              })
            }
          })
        }else{
          $.ajax({
            type: "POST",
            url: "en/views/ajax?_wrapper_format=drupal_ajax",
            data: "combine="+str+"&view_name=product&view_display_id=block_2&view_args=&view_path=%2Fween%2Fen%2Fviews%2Fajax&view_base_path=product&view_dom_id=29480e6ee76292a636baf95180a2cf93b4f6de85b811c21dabb5a099e28be162&pager_element=0&_drupal_ajax=1&ajax_page_state%5Btheme%5D=bartik&ajax_page_state%5Btheme_token%5D=&ajax_page_state%5Blibraries%5D=admin_toolbar%2Ftoolbar.tree%2Cadmin_toolbar_tools%2Ftoolbar.icon%2Cbartik%2Fcustom%2Cbartik%2Fglobal-styling%2Cbetter_exposed_filters%2Fgeneral%2Cbetter_exposed_filters%2Fgeneral%2Cbetter_exposed_filters%2Fgeneral%2Cbig_pipe%2Fbig_pipe%2Cckeditor%2Fdrupal.ckeditor%2Cckeditor%2Fdrupal.ckeditor.plugins.drupalimagecaption%2Cclassy%2Fbase%2Cclassy%2Fmessages%2Cclassy%2Fnode%2Ccontextual%2Fdrupal.contextual-links%2Ccontextual%2Fdrupal.contextual-toolbar%2Ccore%2Fdrupal.active-link%2Ccore%2Fhtml5shiv%2Ccore%2Fnormalize%2Cdevel%2Fdevel-toolbar%2Ceditor%2Fquickedit.inPlaceEditor.formattedText%2Cexamples%2Fexamples.icons%2Cshortcut%2Fdrupal.shortcut%2Csystem%2Fbase%2Ctoolbar%2Ftoolbar%2Ctoolbar%2Ftoolbar.escapeAdmin%2Cuser%2Fdrupal.user.icons%2Cviews%2Fviews.ajax%2Cviews%2Fviews.ajax%2Cviews%2Fviews.ajax%2Cviews%2Fviews.module%2Cviews%2Fviews.module%2Cviews%2Fviews.module%2Cwebform%2Fwebform.contextual%2Cwebform%2Fwebform.element.details.save%2Cwebform%2Fwebform.element.details.toggle%2Cwebform%2Fwebform.form%2Cwebform%2Fwebform.theme.bartik",
            async: true,//使用false会造成卡顿
            success: function(data){
              var arr = (JSON.stringify(data, ["data"]));
              $.each(JSON.parse(arr), function(i,obj){
                if(obj.data!=undefined){
                  $(".path-frontpage .home-banner .field div.block-unformatted").detach();
                  $(".path-frontpage .home-banner .field form.active").after("<div class=\"block-unformatted\">"+obj.data+"</div>");
                
                  if($(".path-frontpage .home-banner .field form.active").next().find(".block-unformatted").children(".views-row").length<1){
                    $(".path-frontpage .home-banner .field div.block-unformatted").detach();
                    if(window.location.href.match(".com/cn")){
                      $(".path-frontpage .home-banner .field form.active").after("<div class=\"block-unformatted\">"+"<div class=\"no-res\">"+"匹配的瑞能产品个数: 0;"+"</div>"+"</div>");
                    }else{
                      $(".path-frontpage .home-banner .field form.active").after("<div class=\"block-unformatted\">"+"<div class=\"no-res\">"+"Matching WeEn products: 0"+"</div>"+"</div>");
                    }
                    
                  }
                  dropdownWrap();
                }
              })
            }
          })
        }
      }else{
        $(".path-frontpage .home-banner .field div.block-unformatted").detach();
      }

    
      // console.log((JSON.stringify(res, ["data"])));
  })
  $(".path-frontpage .home-banner .field form:nth-last-child(2)").submit(function(ev){
    ev.preventDefault();
    let t = $(this).find("input[type='text']").val();
    if(t.trim().length>0){
      if(window.location.href.match(".com/cn")){
        window.location.href="cn/product-search?combine="+t;
      }else{
        window.location.href="product-search?combine="+t;
      }
      
    }
  })
  $(".path-frontpage .home-banner .field form:last-child").submit(function(ev){
    ev.preventDefault();
    let t = $(this).find("input[type='text']").val();
    if(t.trim().length>0){
      if(window.location.href.match(".com/cn")){
        window.location.href="cn/cross-reference?field_cross_reference_value="+t;
      }else{
        window.location.href="cross-reference?field_cross_reference_value="+t;
      }
      
    }
  })
  function getNumber(nums_string,keywords){
    var key_reg = new RegExp(keywords.toLowerCase());
    var arr = nums_string.split(" ");
    for (let i = 0; i < arr.length; i++) {
      const el = arr[i];
      var res = key_reg.exec(el.toLowerCase());
      if(res){
        var idx = res['index'];
        var left = el.slice(0,idx);
        var last = el.slice(idx+keywords.length);
        var center = el.slice(idx,idx+keywords.length);
        return left + "<strong>"+center+"</strong>" + last;
      }
      
    }
    
  }

  $(".path-frontpage .home-banner .field form:last-child input[type='text']").bind("input propertychange", function(ev){
    ev.preventDefault();
    var str1 = $(".path-frontpage .home-banner .field form.active input[type='text']").val();
    if(str1.trim().length>0){
      if(window.location.href.match(".com/cn")){
        $.ajax({
          type: "POST",
          url: "cn/views/ajax?_wrapper_format=drupal_ajax",
          data: "combine="+str1+"&view_name=product&view_display_id=block_3&view_args=&view_path=%2Fween%2Fen%2Fhome&view_base_path=product&view_dom_id=e1e37d1d75e1a2fdba554ca4d6ed2534c854374f3606633e6c355f5daf077a64&pager_element=0&_drupal_ajax=1&ajax_page_state%5Btheme%5D=bartik&ajax_page_state%5Btheme_token%5D=&ajax_page_state%5Blibraries%5D=admin_toolbar%2Ftoolbar.tree%2Cadmin_toolbar_tools%2Ftoolbar.icon%2Cbartik%2Fcustom%2Cbartik%2Fglobal-styling%2Cbetter_exposed_filters%2Fauto_submit%2Cbetter_exposed_filters%2Fgeneral%2Cbig_pipe%2Fbig_pipe%2Cckeditor%2Fdrupal.ckeditor%2Cckeditor%2Fdrupal.ckeditor.plugins.drupalimagecaption%2Cclassy%2Fbase%2Cclassy%2Fmessages%2Cclassy%2Fnode%2Ccontextual%2Fdrupal.contextual-links%2Ccontextual%2Fdrupal.contextual-toolbar%2Ccore%2Fdrupal.active-link%2Ccore%2Fhtml5shiv%2Ccore%2Fnormalize%2Cdevel%2Fdevel-toolbar%2Ceditor%2Fquickedit.inPlaceEditor.formattedText%2Cexamples%2Fexamples.icons%2Cshortcut%2Fdrupal.shortcut%2Csystem%2Fbase%2Ctoolbar%2Ftoolbar%2Ctoolbar%2Ftoolbar.escapeAdmin%2Cuser%2Fdrupal.user.icons%2Cviews%2Fviews.ajax%2Cviews%2Fviews.module%2Cwebform%2Fwebform.contextual%2Cwebform%2Fwebform.element.details.save%2Cwebform%2Fwebform.element.details.toggle%2Cwebform%2Fwebform.form%2Cwebform%2Fwebform.theme.bartik",
          async: true,
          success: function(data){
            var arr1 = (JSON.stringify(data, ["data"]));
            $.each(JSON.parse(arr1), function(i,obj){
              if(obj.data!=undefined){
                $(".path-frontpage .home-banner .field div.block-unformatted").detach();
                $(".path-frontpage .home-banner .field form:last-child").after("<div class=\"block-unformatted\">"+obj.data+"</div>");
                
                if($(".path-frontpage .home-banner .field form.active").next().find(".block-unformatted").children(".views-row").length<1){
                  $(".path-frontpage .home-banner .field div.block-unformatted").detach();
                  if(window.location.href.match(".com/cn")){
                    $(".path-frontpage .home-banner .field form.active").after("<div class=\"block-unformatted\">"+"<div class=\"no-res\">"+"匹配的瑞能产品个数: 0;"+"</div>"+"</div>");
                  }else{
                    $(".path-frontpage .home-banner .field form.active").after("<div class=\"block-unformatted\">"+"<div class=\"no-res\">"+"Matching WeEn products: 0"+"</div>"+"</div>");
                  }
                  
                }
                dropdownWrap();
                $(".path-frontpage .home-banner .dropdown-rows-wrapper .views-row")
                .each((i,el)=>{
                  $(el).find("a").html(getNumber($(el).find("a").text(),str1.toLowerCase()));
                })
              }
            })
          }
        })
      }else{
        $.ajax({
          type: "POST",
          url: "en/views/ajax?_wrapper_format=drupal_ajax",
          data: "combine="+str1+"&view_name=product&view_display_id=block_3&view_args=&view_path=%2Fween%2Fen%2Fhome&view_base_path=product&view_dom_id=e1e37d1d75e1a2fdba554ca4d6ed2534c854374f3606633e6c355f5daf077a64&pager_element=0&_drupal_ajax=1&ajax_page_state%5Btheme%5D=bartik&ajax_page_state%5Btheme_token%5D=&ajax_page_state%5Blibraries%5D=admin_toolbar%2Ftoolbar.tree%2Cadmin_toolbar_tools%2Ftoolbar.icon%2Cbartik%2Fcustom%2Cbartik%2Fglobal-styling%2Cbetter_exposed_filters%2Fauto_submit%2Cbetter_exposed_filters%2Fgeneral%2Cbig_pipe%2Fbig_pipe%2Cckeditor%2Fdrupal.ckeditor%2Cckeditor%2Fdrupal.ckeditor.plugins.drupalimagecaption%2Cclassy%2Fbase%2Cclassy%2Fmessages%2Cclassy%2Fnode%2Ccontextual%2Fdrupal.contextual-links%2Ccontextual%2Fdrupal.contextual-toolbar%2Ccore%2Fdrupal.active-link%2Ccore%2Fhtml5shiv%2Ccore%2Fnormalize%2Cdevel%2Fdevel-toolbar%2Ceditor%2Fquickedit.inPlaceEditor.formattedText%2Cexamples%2Fexamples.icons%2Cshortcut%2Fdrupal.shortcut%2Csystem%2Fbase%2Ctoolbar%2Ftoolbar%2Ctoolbar%2Ftoolbar.escapeAdmin%2Cuser%2Fdrupal.user.icons%2Cviews%2Fviews.ajax%2Cviews%2Fviews.module%2Cwebform%2Fwebform.contextual%2Cwebform%2Fwebform.element.details.save%2Cwebform%2Fwebform.element.details.toggle%2Cwebform%2Fwebform.form%2Cwebform%2Fwebform.theme.bartik",
          async: true,
          success: function(data){
            var arr1 = (JSON.stringify(data, ["data"]));
            $.each(JSON.parse(arr1), function(i,obj){
              if(obj.data!=undefined){
                $(".path-frontpage .home-banner .field div.block-unformatted").detach();
                $(".path-frontpage .home-banner .field form:last-child").after("<div class=\"block-unformatted\">"+obj.data+"</div>");
                
                if($(".path-frontpage .home-banner .field form.active").next().find(".block-unformatted").children(".views-row").length<1){
                  $(".path-frontpage .home-banner .field div.block-unformatted").detach();
                  if(window.location.href.match(".com/cn")){
                    $(".path-frontpage .home-banner .field form.active").after("<div class=\"block-unformatted\">"+"<div class=\"no-res\">"+"匹配的瑞能产品个数: 0;"+"</div>"+"</div>");
                  }else{
                    $(".path-frontpage .home-banner .field form.active").after("<div class=\"block-unformatted\">"+"<div class=\"no-res\">"+"Matching WeEn products: 0"+"</div>"+"</div>");
                  }
                  
                }
                dropdownWrap();
                $(".path-frontpage .home-banner .dropdown-rows-wrapper .views-row")
                .each((i,el)=>{
                  $(el).find("a").html(getNumber($(el).find("a").text(),str1.toLowerCase()));
                })
              }
            })
          }
        })
      }
    }else{
      $(".path-frontpage .home-banner .field div.block-unformatted").detach();
    }
  
  })
  // $(".path-frontpage .home-banner .field form.active").submit(
  //   function(ev){
  // });
}

autoCompleted();

function dropdownWrap() {
  $(".block-unformatted .view-product .block-unformatted").each(function(){
    $(this).find(".views-row").wrapAll("<div class=\"dropdown-rows-wrapper\"></div>");
  });
}


function addBannerLinkCover() {
  // $(".path-frontpage #block-bannerlinks .clearfix").wrap("<div id=\"bl-bg-cover\"></div>");
  $(".path-frontpage .highlighted .links .field ul li p a").after("<span class=\"last\"></span>");
  $(".path-frontpage .highlighted .links .field ul li p a").after("<span class=\"first\"></span>")
}

addBannerLinkCover();

function videoPlay(){
  $(".path-frontpage .block-unformatted .displayed").each(function(){
    $(this).click(function(){
      window.open($(this).find(".views-field-field-video-url a").attr("href"))
    })
  })
  $(".videos").prepend("<script src=\"https://fast.wistia.com/embed/medias/dz9qrw6tyj.jsonp\" async></script><script src=\"https://fast.wistia.com/assets/external/E-v1.js\" async></script><span class=\"wistia_embed wistia_async_dz9qrw6tyj popover=true popoverAnimateThumbnail=true\" style=\"display:inline-block;height:84px;position:relative;width:150px\">&nbsp;</span>")
}

function prefixHeightChange(){
  var $h = $(".home-banner").height();
  var $banner = $(".home-banner");
  $(".path-frontpage form input").bind("focus", function(){
    $banner.height($h)
  })
}
prefixHeightChange();
