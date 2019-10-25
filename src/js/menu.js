function dropHomemenu() {
    $(".header-navlist-item.col-1").wrapAll("<div class='header-navlist-item-group header-navlist-item-col-1'></div>");
    $(".header-navlist-item.col-2").wrapAll("<div class='header-navlist-item-group header-navlist-item-col-2'></div>");
    $(".header-navlist-item.col-3").wrapAll("<div class='header-navlist-item-group header-navlist-item-col-3'></div>");
    let $nav = $(".header-navlist-item-group");
    let $home = $(".navigation >ul.menu >li:nth-child(3)");

    $nav.wrapAll("<div id=\"header-navlist-item-home\"></div>");
    let $navhome = $("#header-navlist-item-home");
    $home.hover(()=>{
        $nav.show();
        $navhome.addClass("home-active");
    }).mouseleave(()=>{
        $navhome.removeClass("home-active");
    })

    let $d = $("#header-navlist-item-home .views-row");
    $d.each(function(){
        $(this).find(".views-field").wrapAll("<div class=\"row-wrap\"></div>");
    })
    //$home.css("pointer-events","auto")
    $home.css("pointer-events","auto")
  }
  
  dropHomemenu();

  function appendBorder() {
    $('#header ul.menu li.menu-item').each((i, el) => {
        //console.log($(el).find(">a").text().toLowerCase().trim())
        if (window.location.href.replace(/[/]/g,"").toLowerCase().match($(el).find(">a").text().toLowerCase().trim())){
            $(el).find(">a").addClass("is-active");
            console.log("1st"+window.location.href.replace(/[/]/g,"").toLowerCase().match($(el).find(">a").text().toLowerCase().trim()))
        }else if($(el).children("ul").length>0){
            var p = new Array();
            $(el).find("a").each((k,en) => {
                $(en).text().split(' ').forEach((l,eo) => {
                    if (window.location.href.replace(/[/]/g,"").match(l.toLowerCase()) && !window.location.href.match("use")){
                        console.log(window.location.href.replace(/[/]/g,"").match(l.toLowerCase()));
                        console.log(window.location.href.replace(/[/]/g,""));
                        console.log(l.toLowerCase);
                        $(en).addClass("is-active");
                        $(el).children("a").addClass("is-active");
                    }
                });
            });
        }else if(window.location.href.match("product")){
            if($(el).text().trim().toLowerCase()=="products"){
                $(el).find("a").addClass("is-active");
            }
        }
    })

    $('.mobile-menu-body ul.menu li.menu-item').each((i, el) => {
        //console.log($(el).find(">a").text().toLowerCase().trim())
        if (window.location.href.toLowerCase().match($(el).find(">a").text().toLowerCase().trim())){
            $(el).find(">a").addClass("is-active");
        }else if($(el).children("ul").length>0){
            var p = new Array();
            $(el).find("a").each((k,en) => {
                $(en).text().split(' ').forEach((l,eo) => {
                    if (window.location.href.match(l.toLowerCase()) && !window.location.href.match("use")){
                        $(en).addClass("is-active");
                        $(el).children("a").addClass("is-active");
                    }
                });
            });
        }else if(window.location.href.match("product")){
            if($(el).text().trim().toLowerCase()=="products"){
                $(el).find("a").addClass("is-active");
            }
        }
    })
  }
  appendBorder();

  function disableLangbtn(){
    //   let lan = $("#header .block-language ul.links li");
    //   lan.each((i, el) => {
    //     if (window.location.href.match($(el).find("a").attr("href").substring(1,3))){
    //         $(el).find("a").attr("href", "#");
    //     }
    //   })

      //disable product btn of menu
      $("#header .navigation >ul.menu >li:nth-child(3) a").attr("href", "javascript:void(0)") ;
  }
  disableLangbtn();
