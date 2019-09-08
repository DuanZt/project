function homeCN(){
    if(window.location.href.match(".com/cn")){
        $(".home-banner .field form:first-of-type input:first-of-type")
        .attr("placeholder", "搜索")
        $(".home-banner .field form input:last-of-type").attr("value", "搜索")        
        $(".home-banner .field form:nth-of-type(2) input:first-of-type")
        .attr("placeholder", "相互参照")
        $("#search-notice").text("输入零件型号，进入瑞能相关产品页面")
        $(".path-frontpage #main .wrap .l-wrap .btn").attr("href","/cn/about")

        $(".path-frontpage #main .news ul:first-of-type li:first-of-type").text("新闻动态");
        $(".path-frontpage #main .news ul:first-of-type li:nth-of-type(2)").text("企业公告");
        $(".path-frontpage #main .news ul:first-of-type li:last-of-type").text("展会信息");

        $(".path-frontpage #main .news .more-link a").text("查看更多")
        $(".path-frontpage #main .news .more-link a").attr("href","cn/"+$(".path-frontpage #main .news .more-link a").attr("href"))
        $(".path-frontpage .videos ul:first-of-type li:first-of-type h2").text("公司相关")
        $(".path-frontpage .videos ul:first-of-type li:last-of-type h2").text("技术相关")

        $(".path-frontapge .videos ul:nth-of-type(2) li:first-of-type he2").text()
        $(".highlighted #block-webform .captcha .js-form-required.form-required")
        .text("请输入图片中的文字")
        console.log("欢迎使用WeEn中文");
        $(".path-cross-reference #block-bartik-content h1").text("相互参照搜索结果")
        $(".path-cross-reference #block-bartik-content h3").text("输入产品号搜索同系列其他产品")
        // $(".path-cross-reference #block-bartik-content h4:first-of-type").text("符合瑞能产品结果：")
        $(".path-cross-reference #block-bartik-content h4:last-of-type").text("无法找到相关产品.")
        $(".path-frontpage #main .news ul:nth-child(2) li").addClass("home-news-zh");

        $(".path-product-search #block-bartik-content h4:first-of-type").text("未能找到与输入文本匹配的文档.")
        $(".path-product-search #block-bartik-content h4:last-of-type").text("建议:");
        $(".path-product-search #block-bartik-content ul li:first-child").text("确保所有单词拼写正确.");
        $(".path-product-search #block-bartik-content ul li:nth-child(2)").text("尝试不同的关键字.");
        $(".path-product-search #block-bartik-content ul li:nth-child(3)").text("尝试较常见的关键字.");
        $(".path-product-search #block-bartik-content ul li:last-child").text("尝试更短的关键字.");
        $(".click-me-drag").addClass("zhcmd")
        $(".path-search .home-banner h1").text("瑞能搜索")
        $(".path-product #block-bartik-content .view-product .wrap .inner .block button").addClass("zhbtn")
        .append("<style>.zhbtn::before{content:'左右滚动查看完整表格内容'}</style>");
        $(document).ready(function(){
            $(".highlighted #block-webform #w-before").text("帮助中心")
            // $(".path-distributors select option[value='All']").text("请选择")
            $(".path-about .op-zh").addClass("zh-active")
            $(".path-about .op-zh").addClass("active")
            $(".path-about .ideal-tabs").after($(".path-about .op-zh"))

            $(".path-about .op-zh:last-of-type").change(function(){
                console.log("change")
                $(".path-about .op-zh").addClass("zh-active")
                $(".path-about .op-zh").addClass("active")
            })
            
            $(".path-about .op-zh select.simpler-select option[value='All']").text("-请选择-")
            $(".path-about .op-zh .js-form-item:first-of-type label").text("地点")
            $(".path-about .op-zh .js-form-item:nth-of-type(2) label").text("部门")
            $(".path-about .op-zh .js-form-item:nth-of-type(3) label").text("工作性质")
            $(".path-about .op-zh .js-form-item:last-of-type label").text("选择文件")
            $(".path-about .about-us .op-zh").remove()

            $("#header-navlist-item-home .header-navlist-item .uf-attr-cloned").each((i,el) => {
                if($(el).text().trim()=="Diodes"){
                    $(el).text("二极管")
                }
                if($(el).text().trim()=="Thyristors"){
                    $(el).text("可控硅开关")
                }
                if($(el).text().trim()=="Automotive Grade Products"){
                    $(el).text("汽车产品")
                }
                if($(el).text().trim()=="Wafers"){
                    $(el).text("晶圆")
                }
                if($(el).text().trim()=="Transistors"){
                    $(el).text("双极性晶体管")
                }
                $("a.reset").text("重置筛选")
                $(".path-product #block-bartik-content button.btn").text("保存表单")
            })

            $(".path-product #block-bartik-content >h2").each((j,em) => {
                if($(em).text().trim()=="Diodes"){
                    $(em).text("二极管")
                }
                if($(em).text().trim()=="Thyristors"){
                    $(em).text("可控硅开关")
                }
                if($(em).text().trim()=="Automotive Grade Products"){
                    $(em).text("汽车产品")
                }
                if($(em).text().trim()=="Wafers"){
                    $(em).text("晶圆")
                }
                if($(em).text().trim()=="Transistors"){
                    $(em).text("双极性晶体管")
                }
                $("a.reset").text("重置")
                $(".path-product #block-bartik-content button.btn").text("保存为Excel")
            })

            $(".no-ideal #ajax-wrapper .form-item-file-upload:after, .no-ideal [id^='ajax-wrapper'] .form-item-file-upload").addClass("zhaf")
            $(".no-ideal #ajax-wrapper .form-item-file-upload:after, .no-ideal [id^='ajax-wrapper'] .form-item-file-upload span").addClass("zhbf")

        })
        $("footer p a").each((i,el)=>{
            if(i!=0){
                $(el).attr("href", "/cn"+$(el).attr("href"));
            }
        })

        $(".no-ideal form .captcha .js-form-required.form-required").text("请输入图片中的文字")
        $(".path-about .about-team .about-member .about-member-teaser h2").css("padding-left", "0")
        $(".path-about .about-team .about-member .about-member-teaser a").css("padding-left", "0")
        $("#header .navigation > ul > li:nth-of-type(3) a").text("产品")
        $(".path-about #block-bartik-content .ideal-tabs li:first-of-type").text("开放职位")
        $(".path-about #block-bartik-content .ideal-tabs li:last-of-type").text("没有找到合适职位")
        $(".path-applications #block-bartik-content .inner > h2").text("适合多元应用的双极型功率半导体器件");
        $(".path-applications #block-bartik-content .inner > p").text("瑞能丰富多元的产品组合已满足了众多应用领域的客户需求。我们将持续不断地创新研发双极功率半导体产品，让更多的应用受益于我们的产品。")
    
        $(".field--name-field-quality-reliability-p table th").each((i,el)=>{
            // console.log($(el).text())
            if($(el).text()=="化学含量" || $(el).text()=="Chemical content"){
                $(el).parent().parent().parent().find("tbody td").each((j,em)=>{
                    if(j==i){
                        $(".vccc").remove()
                        $(".field--name-field-quality-reliability-p").append("<div class=\"vccc\"><a href=\""+"/cn"+$(em).find("a").attr("href")+"\">查看化学含量表</a></div>")
                    }
                })
                $(".field--name-field-quality-reliability-p table td.center a").each((el)=>{
                    $ss = $(el).attr("href");
                    $(el).attr("href", "/cn"+$ss);
                });
                
                $(".vccc").hide();
            }
        })
        
        $(".path-product-search .pps-table-wrapper th").each(function(){
            if($(this).text().trim()=="Type number"){
                $(this).text("型号")
            }
            if($(this).text().trim()=="Orderable part number"){
                $(this).text("订单编号")
            }
            if($(this).text().trim()=="Description"){
                $(this).text("描述")
            }
            if($(this).text().trim()=="Type"){
                $(this).text("类型")
            }
        })
        $(".path-cross-reference .crs-table-wrapper th").each(function(){
            if($(this).text().trim()=="Type number"){
                $(this).text("型号")
            }
        })
        $(".path-product-search .pps-table-wrapper td.views-field-type").each(function(){
            if($(this).text().trim()=="Product"){
                $(this).text("产品")
            }
        })
        window.onload=function(){
            $(".highlighted .links .field ul li a").each(function(){
                $(this).attr("href","/cn"+$(this).attr("href"))
            })
        }
    }
}
homeCN();

function mobileCN(){
    if(window.location.href.match(".com/cn")){
        $(".mobile-menu .mobile-menu-body >ul >li >a").each(function(){
            if($(this).text().trim()=="Products"){
                $(this).text("产品")
            }
            
        })
    }
    
}   
mobileCN();

function preloadHidden(){
    $(".path-applications #block-bartik-content .block-unformatted").css("display", "block");
    $(".page-node-type-product article").css("display", "block");
    $(".path-product #block-bartik-content .table-wrap").ready(function(){
        $(".path-product #block-bartik-content .view-product .wrap .inner").addClass("active");
        $(".path-product #block-bartik-content .view-product .wrap .inner table").css("visibility", "visible")
    })
    window.onload=function(){
    $(".table-wrap table th:first-child").click();
    $(".table-wrap table th:nth-child(2)").click();
    $(".table-wrap table th:nth-child(2)").click();
    }
    $("body >*:not(.videos)").ready(function(){
        setTimeout(function(){$("body >*:nth-of-type(n+2)").css("opacity", "1")
        $(".global-preloading").fadeOut(100);},0)
        $("body").show()
    })
    $(".path-frontpage .home-banner").show()
    $(".block-language").show()
    $(".path-applications #block-bartik-content .inner").css("display","block")

    $(".page-node-type-product #block-bartik-content article .node__content div:nth-child(n+4)")
    .css("visibility","visible")
}
preloadHidden();