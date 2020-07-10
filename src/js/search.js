function searchAutocomplete() {
    $(".path-search .home-banner .field form input[type='text']").attr("autocomplete","off");

    $(".path-search .home-banner .field form:nth-last-child(2) input[type='text']").bind("input propertychange",function(ev){
      ev.preventDefault();
      var str = $(".path-search .home-banner .field form.active input[type='text']").val();
      if(str.trim().length>0){
        
        $.ajax({
          type: "POST",
          url: "../views/ajax?_wrapper_format=drupal_ajax",
          data: "combine="+str+"&view_name=product&view_display_id=block_2&view_args=&view_path=%2Fween%2Fen%2Fviews%2Fajax&view_base_path=product&view_dom_id=29480e6ee76292a636baf95180a2cf93b4f6de85b811c21dabb5a099e28be162&pager_element=0&_drupal_ajax=1&ajax_page_state%5Btheme%5D=bartik&ajax_page_state%5Btheme_token%5D=&ajax_page_state%5Blibraries%5D=admin_toolbar%2Ftoolbar.tree%2Cadmin_toolbar_tools%2Ftoolbar.icon%2Cbartik%2Fcustom%2Cbartik%2Fglobal-styling%2Cbetter_exposed_filters%2Fgeneral%2Cbetter_exposed_filters%2Fgeneral%2Cbetter_exposed_filters%2Fgeneral%2Cbig_pipe%2Fbig_pipe%2Cckeditor%2Fdrupal.ckeditor%2Cckeditor%2Fdrupal.ckeditor.plugins.drupalimagecaption%2Cclassy%2Fbase%2Cclassy%2Fmessages%2Cclassy%2Fnode%2Ccontextual%2Fdrupal.contextual-links%2Ccontextual%2Fdrupal.contextual-toolbar%2Ccore%2Fdrupal.active-link%2Ccore%2Fhtml5shiv%2Ccore%2Fnormalize%2Cdevel%2Fdevel-toolbar%2Ceditor%2Fquickedit.inPlaceEditor.formattedText%2Cexamples%2Fexamples.icons%2Cshortcut%2Fdrupal.shortcut%2Csystem%2Fbase%2Ctoolbar%2Ftoolbar%2Ctoolbar%2Ftoolbar.escapeAdmin%2Cuser%2Fdrupal.user.icons%2Cviews%2Fviews.ajax%2Cviews%2Fviews.ajax%2Cviews%2Fviews.ajax%2Cviews%2Fviews.module%2Cviews%2Fviews.module%2Cviews%2Fviews.module%2Cwebform%2Fwebform.contextual%2Cwebform%2Fwebform.element.details.save%2Cwebform%2Fwebform.element.details.toggle%2Cwebform%2Fwebform.form%2Cwebform%2Fwebform.theme.bartik",
          async: true,//使用false会造成卡顿
          success: function(data){
            var arr = (JSON.stringify(data, ["data"]));
            $.each(JSON.parse(arr), function(i,obj){
              if(obj.data!=undefined){
                $(".path-search .home-banner .field div.block-unformatted").detach();
                $(".path-search .home-banner .field form.active").after("<div class=\"block-unformatted\">"+obj.data+"</div>");
              
                if($(".path-search .home-banner .field form.active").next().find(".block-unformatted").children(".views-row").length<1){
                  $(".path-search .home-banner .field div.block-unformatted").detach();
                  if(drupalSettings.path.currentLanguage == "zh-hans"){
                    $(".path-search .home-banner .field form.active").after("<div class=\"block-unformatted\">"+"<div class=\"no-res\">"+"找到的瑞能产品个数: 0"+"</div>"+"</div>");
                  }else{
                    $(".path-search .home-banner .field form.active").after("<div class=\"block-unformatted\">"+"<div class=\"no-res\">"+"Matching WeEn products: 0"+"</div>"+"</div>");
                  }
                }
                dropdownWrap();
              }
            })
          }
        })
        }else{
          $(".path-search .home-banner .field div.block-unformatted").detach();
        }  // console.log((JSON.stringify(res, ["data"])));
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
    $(".path-search .home-banner .field form:last-child input[type='text']").bind("input propertychange", function(ev){
      ev.preventDefault();
      var str1 = $(".path-search .home-banner .field form.active input[type='text']").val();
      if(str1.trim().length>0){
      $.ajax({
        type: "POST",
        url: "../views/ajax?_wrapper_format=drupal_ajax",
        data: "combine="+str1+"&view_name=product&view_display_id=block_3&view_args=&view_path=%2Fween%2Fen%2Fhome&view_base_path=product&view_dom_id=e1e37d1d75e1a2fdba554ca4d6ed2534c854374f3606633e6c355f5daf077a64&pager_element=0&_drupal_ajax=1&ajax_page_state%5Btheme%5D=bartik&ajax_page_state%5Btheme_token%5D=&ajax_page_state%5Blibraries%5D=admin_toolbar%2Ftoolbar.tree%2Cadmin_toolbar_tools%2Ftoolbar.icon%2Cbartik%2Fcustom%2Cbartik%2Fglobal-styling%2Cbetter_exposed_filters%2Fauto_submit%2Cbetter_exposed_filters%2Fgeneral%2Cbig_pipe%2Fbig_pipe%2Cckeditor%2Fdrupal.ckeditor%2Cckeditor%2Fdrupal.ckeditor.plugins.drupalimagecaption%2Cclassy%2Fbase%2Cclassy%2Fmessages%2Cclassy%2Fnode%2Ccontextual%2Fdrupal.contextual-links%2Ccontextual%2Fdrupal.contextual-toolbar%2Ccore%2Fdrupal.active-link%2Ccore%2Fhtml5shiv%2Ccore%2Fnormalize%2Cdevel%2Fdevel-toolbar%2Ceditor%2Fquickedit.inPlaceEditor.formattedText%2Cexamples%2Fexamples.icons%2Cshortcut%2Fdrupal.shortcut%2Csystem%2Fbase%2Ctoolbar%2Ftoolbar%2Ctoolbar%2Ftoolbar.escapeAdmin%2Cuser%2Fdrupal.user.icons%2Cviews%2Fviews.ajax%2Cviews%2Fviews.module%2Cwebform%2Fwebform.contextual%2Cwebform%2Fwebform.element.details.save%2Cwebform%2Fwebform.element.details.toggle%2Cwebform%2Fwebform.form%2Cwebform%2Fwebform.theme.bartik",
        async: true,
        success: function(data){
          var arr1 = (JSON.stringify(data, ["data"]));
          $.each(JSON.parse(arr1), function(i,obj){
            if(obj.data!=undefined){
              $(".path-search .home-banner .field div.block-unformatted").detach();
              $(".path-search .home-banner .field form:last-child").after("<div class=\"block-unformatted\">"+obj.data+"</div>");
              
              if($(".path-search .home-banner .field form.active").next().find(".block-unformatted").children(".views-row").length<1){
                $(".path-search .home-banner .field div.block-unformatted").detach();
                if(drupalSettings.path.currentLanguage == "zh-hans"){
                  $(".path-search .home-banner .field form.active").after("<div class=\"block-unformatted\">"+"<div class=\"no-res\">"+"匹配的瑞能产品个数: 0"+"</div>"+"</div>");
                }else{
                  $(".path-search .home-banner .field form.active").after("<div class=\"block-unformatted\">"+"<div class=\"no-res\">"+"Matching WeEn products: 0"+"</div>"+"</div>");
                }
                
              }else{
                $(".path-search .home-banner .field form.active").next().find(".block-unformatted").children(".views-row").each
              }
              dropdownWrap();
              $(".path-search .home-banner .dropdown-rows-wrapper .views-row")
                .each((i,el)=>{
              $(el).find("a").html(getNumber($(el).find("a").text(),str1.toLowerCase()));
            })
            }
          })
        }
      })
    }else{
      $(".path-search .home-banner .field div.block-unformatted").detach();
    }
    })

    $(".path-search .home-banner .field form:nth-last-child(2)").submit(function(ev){
      ev.preventDefault();
      let t = $(this).find("input[type='text']").val();
      if(t.trim().length>0){
        if(drupalSettings.path.currentLanguage == "zh-hans"){
          window.location.href=window.location.href.substring(0,window.location.href.length-17)+"product-search?combine="+t;
        }else{
          window.location.href=window.location.href.substring(0,window.location.href.length-17)+"product-search?combine="+t;
        }
        
      }
    })
    $(".path-search .home-banner .field form:last-child").submit(function(ev){
      ev.preventDefault();
      let t = $(this).find("input[type='text']").val();
      if(t.trim().length>0){
        if(drupalSettings.path.currentLanguage == "zh-hans"){
          window.location.href=window.location.href.substring(0,window.location.href.length-17)+"cross-reference?field_cross_reference_value="+t;
        }else{
          window.location.href=window.location.href.substring(0,window.location.href.length-17)+"cross-reference?field_cross_reference_value="+t;
        }
        
      }
    })
  }
  
  searchAutocomplete();

  function searchSearchTabs() {
    let $tabs = $(".home-banner .field ul li");
    let $wraps = $('.home-banner .field form');
    
    $tabs.each((i, el) => {
      $(el).click(() => {
        $tabs.removeClass("active");
        $wraps.removeClass("active");
        $(el).addClass("active");
        $wraps.eq(i).addClass("active");
        $(".path-search .home-banner .field div.block-unformatted").detach();
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
  
  searchSearchTabs();

  function modifytitle(){
    if(drupalSettings.path.currentLanguage == "zh-hans"){
      $(".path-search .home-banner h1").text("瑞能搜索")
      $(".path-search .home-banner h1").css("visibility","visible")
    }else{
      $(".path-search .home-banner h1").text("WeEn Searches");
      $(".path-search .home-banner h1").css("visibility","visible")
    }
      $(".path-search .home-banner h3").hide();
  }

  modifytitle();

  function productSearch(){
    var res_search = $(".path-product-search #edit-combine").val();
    if(drupalSettings.path.currentLanguage == "zh-hans"){
      $(".path-product-search #block-bartik-content").prepend("<h1>关键字为: \'<span style=\"color:#0092af\">"+res_search+"</span>\' 的结果</h1>");
    }else{
      $(".path-product-search #block-bartik-content").prepend("<h1>Search result for:<span style=\"color:#0092af\">\'"+res_search+"\'</span></h1>");
    }
    
    $(".path-product-search #block-bartik-content table tbody td").each(function(){
      var reg = new RegExp(res_search, 'i');
      if($(this).text().trim().toLowerCase().match(res_search.toLowerCase())){
        // $(this).css("background", "yellow");
        if($(this).find("a").length>0){
          let a = $(this).find("a").text().trim();
          let h = $(this).find("a").attr("href");
          let s = a.toLowerCase().indexOf(res_search.toLowerCase());
          let e = s+res_search.length;
          let keyword = a.substring(s,e);
          $(this).find("a").detach();
          $(this).append("<a href=\""+h+"\">"+a.split(keyword).join("<span style=\"background:yellow;\">"+keyword+"</span>")+"</a>")  
        }else{
          let a = $(this).text().trim();
          $(this).text('');
          $(this).append(a.split(res_search).join("<span style=\"background:yellow;\">"+res_search+"</span>"))
        }
      }
    })
    if($(".path-product-search #block-bartik-content table").length<1){
      $(".path-product-search #block-bartik-content").append("<h4>Your search text did not match any documents.</h4>");
      $(".path-product-search #block-bartik-content").append("<h4>Suggestions:</h4>");
      $(".path-product-search #block-bartik-content").append("<ul><li>Make sure that all words are spelled correctly.</li><li>Try different keywords.</li><li>Try more general keywords.</li><li>Try fewer keywords.</li></li></ul>")
    }
  }

  productSearch();

  function crossReference(){
    $(".path-cross-reference #block-bartik-content").prepend("<h3>Enter Part Number to be crossed to WeEn</h3>");
    $(".path-cross-reference #block-bartik-content").prepend("<h1>Cross Reference Search</h1>");
    $(".path-cross-reference input#edit-field-cross-reference-value").after("<p style=\"color:red;width:550px;display:none;\">min 3 chars</p>");
    $(".path-cross-reference input#edit-field-cross-reference-value").attr("autocomplete","off");
    $(".path-cross-reference form").submit(function(ev){
      if($(".path-cross-reference input#edit-field-cross-reference-value").val().length<3){
        ev.preventDefault();
        $(".path-cross-reference form p").show();
      }
    })
    if($(".path-cross-reference #block-bartik-content table").length<1){
      if(drupalSettings.path.currentLanguage == "zh-hans"){
        $(".path-cross-reference #block-bartik-content").append("<h4>匹配的瑞能产品个数: 0;</h4>");
      }else{
        $(".path-cross-reference #block-bartik-content").append("<h4>Matching WeEn products: 0;</h4>");
      }
      
      $(".path-cross-reference #block-bartik-content").append("<h4> Sorry, we could not find the equivalent product.</h4>");
    }
  }
  crossReference();

  function dropdownWrap() {
    $(".block-unformatted .view-product .block-unformatted").each(function(){
      $(this).find(".views-row").wrapAll("<div class=\"dropdown-rows-wrapper\"></div>");
    });
  }

  function backToprev(){
    $('.btn-back').bind('click',function(){
        history.back();
    })
  }
  
  backToprev();

  function crsMatch(){
    if(drupalSettings.path.currentLanguage == "zh-hans"){

    }else{
      $(".path-cross-reference #block-bartik-content input#edit-field-cross-reference-value")
      .after("<p>Matching WeEn product</p>")
    }

    $(".path-cross-reference table").wrap("<div class=\"crs-table-wrapper\"></div>")
    $(".path-product-search table").wrap("<div class=\"pps-table-wrapper\"></div>")
    $(".pps-table-wrapper").before("<div class=\"click-me-drag\"><img src=\"/sites/default/files/images/click-me.png\"></div>")
  }
  crsMatch();
  
  