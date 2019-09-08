function cloneOverview(){
    if($('.path-product').length>0 && window.location.href.substring(window.location.href.length-6)!="search"){
        var start = window.location.href.match("product").index+8;
        var end = window.location.href.substring(start).match('/').index+start;
        var cg = window.location.href.substring(start,end);
        if(cg=="agp"){
            cg="automotive grade products"
        }
        $(".path-product .uf-attr-cloned").each(function(){
            if($(this).text().toLowerCase().match(cg)!=undefined){
                let $product = $(this).parent().clone();
                $(".path-product #block-bartik-content>h2").after($product);
            }
        })

        // let bh2 = $(".path-product #block-bartik-content>h2").text().substring(13);
        // $(".path-product #block-bartik-content>h2").text(bh2);
        // $(".path-product #block-bartik-content>h2").show();
    }
}

cloneOverview();

window.onload = function(){
    $("#header .block-language").css("visibility", "visible");
}



function productActive(){
    $(".path-product #block-bartik-content.block table").wrap("<div class=\"table-wrap\"></div>")
    if(window.location.href.match("diodes")){
        $(".path-product #block-bartik-content .block-unformatted").addClass("active")   
    }
    $(".path-product #block-bartik-content .block-unformatted .views-row a").each(function(){

        if(window.location.href.match($(this).attr("href"))){
            $(this).parent().parent().parent().addClass("active");
        }
    })
}

productActive();

function chemicalContent(){
    $(".page-node-type-chemical-content .btn-back").bind("click", function(){
        window.history.back(); 
    })
}

chemicalContent();

function kennyFilter(){
    let $needflt = $(".path-product #block-bartik-content .table-wrap thead tr:last-child th");
    let $options = $(".path-product #block-bartik-content .table-wrap thead tr.fltrow select");
    let $order = $(".path-product #block-bartik-content .table-wrap thead tr:last-child th img.sort-arrow");
    $order.each(function(){
        let a = $(this).clone();
        $(this).parent().append(a);
    })

    $options.parent().each((i, el) => {
        // $wraps.eq(i).addClass("active");
        // console.log($(el).find("option").text())
        $needflt.eq(i+1).append("<div class=\"kenny-filter\"><i class=\"fa fa-filter\"></div>");
        $needflt.eq(i+1).prepend("<div class=\"kenny-filter-pop\"><i class=\"fa fa-close\"></div>");
    })
    $(".path-product #block-bartik-content .kenny-filter-pop i.fa-close").bind("click", function(){
        $(this).parent().hide();
    })
    $(".path-product #block-bartik-content .kenny-filter").each((i, el) => {
        $(el).click(()=>{
            $(el).parent().find(".kenny-filter-pop").show();
        })
    })

    var sets = new Array();
    $(".path-product .kenny-filter").each((j,em) => {
        $(".path-product #block-bartik-content .table-wrap tbody tr td").eq(j).each((k,eo)=>{
            sets.push($(eo).text().replace(/[\r\n]/g,"").trim());
        })
        var x;
        for(x in sets){
            if(sets[x].length>0){
                $(em).parent().find(".kenny-filter-pop").append("<div class=\"checkbox-wrap\"><input type=\"checkbox\">"+sets[x]+"</input></div>")
            }
        }
    })
    $(".kenny-filter-popup").click(function(e){
            
    })
    // $(":checkbox").on("change",function(){
    //     var $checkbox = new Array();
    //     console.log($('input:checked').parent().text());
    //     $('input:checked').each((k,ek)=>{
    //         $checkbox.push($(ek).parent().text());
    //         $(".path-product .table-wrap tr").hide();
            
    //         $(".path-product .table-wrap td").eq(ek).each(function(){
    //             if($(this).text()==$(ek)){
    //                 $(this).parent().show();
    //             }
    //         })
    //     })

    // });
}

// kennyFilter();

function hideDetails(){
    var dic = ["Features and Benefits", "Applications", "Product Parametric", "Package", "Quality, reliability & chemical content", "Ordering & availability"];
    $(".page-node-type-product .field__label").each(function(){
        let flag=0;
        for(let i=0;i<dic.length;i++){

            if($(this).text()==dic[i]){
                flag=1;
                break;
            }
        }
        if(flag==0){
            $(this).parent().hide()
            
        }
        // else{
        //     if(!$(this).find("table").hasClass("active")){
        //         $(this).parent().hide()
        //     }
        // }
    })
    $(".field--name-field-ordering-availability th:last-child").remove()
    $(".field--name-field-ordering-availability tr:first-child td:last-child").remove()
    //$(".pd-table-wrapper table:first-child").show();
    //$(".pd-table-wrapper table:first-child").parent().parent().parent().show();
    //$(".page-node-type-product #block-bartik-content article .node__content table").eq(0).parent().parent().parent().show()
}

hideDetails();
function addChemicalContent(){
    $(".field--name-field-quality-reliability-p table th").each((i,el)=>{
        // console.log($(el).text())
        if($(el).text()=="Chemical content"){
            $(el).parent().parent().parent().find("tbody td").each((j,em)=>{
                if(j==i){
                    $(".field--name-field-quality-reliability-p").append("<div class=\"vccc\"><a href=\""+$(em).find("a").attr("href")+"\">View Chemical Content Chart</a></div>")
                }
            })           
        }
    })
}

addChemicalContent();
function addProductDetailTabs(){
    var $link = $(".page-node-type-product .field--name-field-datasheet span.file a").attr("href");
    if(typeof($link) == "undefined"){
        $link = "javascript:void(0)";
    }
    $(".page-node-type-product #block-bartik-content article .node__content >div:nth-child(3)")
    .after("<ul class=\"pd-tabs\"><li>Parametric</li><li>Package</li><li>Quality, reliability & chemical content</li><li>Ordering</li><li><a href=\""+$link+"\" target=\"_blank\">DataSheet</a></li></ul>")
    // $(".page-node-type-product #block-bartik-content article .node__content ul.pd-tabs li:first-child")
    // .prepend("<img src=\"/sites/default/files/images/parametric-dark.svg\">");

    // $(".page-node-type-product #block-bartik-content article .node__content ul.pd-tabs li:nth-child(2)")
    // .prepend("<img src=\"/sites/default/files/images/package-dark.svg\">");

    // $(".page-node-type-product #block-bartik-content article .node__content ul.pd-tabs li:nth-child(3)")
    // .prepend("<img src=\"/sites/default/files/images/quality-dark.svg\">");

    // $(".page-node-type-product #block-bartik-content article .node__content ul.pd-tabs li:nth-child(4)")
    // .prepend("<img src=\"/sites/default/files/images/ordering-dark.svg\">");

    // $(".page-node-type-product #block-bartik-content article .node__content ul.pd-tabs li:nth-child(5)")
    // .prepend("<img src=\"/sites/default/files/images/parametric-dark.svg\">");
    $(".pd-tabs").after("<div class=\"pd-tabs-mobile\"><select><option>Parametric</option><option>Package</option><option>Quality, reliability & chemical content</option><option>Ordering</option><option>Datasheet</option></select></div>")
    $(".page-node-type-product .pd-tabs-mobile").after("<div class=\"click-me-drag\"><img src=\"/sites/default/files/images/click-me.png\"></div>")
    

    $(".pd-tabs-mobile select").bind("change",function(){
        $(".click-me-drag").removeClass("ds");
        $(".pd-tabs-blank").removeClass("active")
        let i = $(this).get(0).selectedIndex;
        let $table = $(".pd-table-wrapper table");
        if(i==2){
            $(".vccc").show()
        }else{
            $(".vccc").hide()
        }
        if(i==3){
            $("#block-webform-4").show()
            $(".field--name-field-ordering-availability thead th").each((k,en)=>{
                console.log($(en).text())
                if($(en).text()=="Type number" || $(en).text()=="型号"){
                    $(".field--name-field-ordering-availability tbody td").each((l,eo)=>{
                        if(k==l){
                            $(".page-node-type-product .order-sample .form-item:first-child input").val($(eo).text());
                        }
                    })
                }
            })
        }else{
            $("#block-webform-4").hide()
        }
        //
        if(i==4){
            $(".pd-tabs li a").attr("target", "_blank")
            $(".pd-tabs li a").attr("type","application/pdf")
            $(".pd-tabs li a").css("pointer-events", "auto")
            let $address = $(".pd-tabs li a").attr("href")
            //window.open($address);
            $(".pd-tabs-blank").addClass("active")
            $(".pd-tabs-blank a").text("Download PDF")
            // window.location.href=$address;
            $(".click-me-drag").addClass("ds");
            // let $filename = $(".pd-tabs li a").attr("download")
            // download($address, $filename)
            // $(el).find("a").removeAttr("download");
            // $(el).find("a").removeAttr("href")
        }
        
        console.log($table.eq(i))
        $table.removeClass("active")
        $table.eq(i).addClass("active")
        $table.parent().parent().parent().hide()
        $table.eq(i).parent().parent().parent().show()
        // $(".pd-table-wrapper").each(function(){
        //     if($(this).find(table).hasClass("active"))
        // })
    })
    $(".click-me-drag").after("<div class=\"pd-tabs-blank\"></div>")
    $(".pd-tabs-blank").append($(".pd-tabs li a").clone())
    $(".page-node-type-product #block-bartik-content article .node__content ul.pd-tabs li").each((i,el)=>{
        let $table = $(".page-node-type-product #block-bartik-content article .node__content table");
        $table.eq(0).addClass("active");
        $(el).parent().find("li:first-child").addClass("active");
        $(".vccc").hide()
        
        $(el).click(()=>{
            $(el).addClass("active").siblings().removeClass("active");
            if(i<4){
                $(".pd-tabs-blank").removeClass("active")
                $table.removeClass("active");
                if(i==2){
                    $(".vccc").show()
                }else{
                    $(".vccc").hide()
                }
                if(i==3){
                    $(".page-node-type-product .order-sample").show();
                    $(".field--name-field-ordering-availability thead th").each((k,en)=>{
                        console.log($(en).text())
                        if($(en).text()=="Type number" || $(en).text()=="型号"){
                            $(".field--name-field-ordering-availability tbody td").each((l,eo)=>{
                                if(k==l){
                                    $(".page-node-type-product .order-sample .form-item:first-child input").val($(eo).text());
                                }
                            })
                        }
                    })
                    
                    $(".page-node-type-product .order-sample form").submit(function(){
                        alert("Submit Successfully!");
                    })
                }else{
                    $(".page-node-type-product .order-sample").hide();
                }
            }else{
                $(".pd-tabs-blank").addClass("active")
                $(".page-node-type-product .order-sample").hide();
            }
            $table.removeClass("active")
            $table.eq(i).addClass("active")
            $table.parent().parent().parent().hide()
            $table.eq(i).parent().parent().parent().show()
            // if($(el).hasClass("active")){
            //     let $src = $(el).find("img").attr("src");
            //     $(el).find("img").attr("src", $src.substring(0,$src.length-8)+"white.svg");
            // }
        })
    })
}
addProductDetailTabs();

function changeFilterIcon(){
    $(".path-product .table-wrap table tr:last-child th span").append("<i class=\"fa fa-filter\"></i>");
    $(".path-product .table-wrap table tr:last-child div.div_checklist ul>label").append("<div class=\"p-close\"><img src=\"/sites/default/files/images/close.svg\"></div>")

    $(".path-product .table-wrap .p-close").bind("click", function(){
        $(this).parent().parent().parent().parent().hide();
    })
}


function productBactbtn(){
    $(".page-node-type-product #block-bartik-content").prepend("<p><a class=\"btn-back\" href=\"javascript::void(0)\">Back</a></p>")
}
productBactbtn();

function appendColname(){
    $(".path-product .table-wrap table th .flt_checklist").each((i,el)=>{
        var str = $(el).parent().parent().parent().parent().contents().filter(function (index, content) {
            return content.nodeType === 3;
        }).text();
        let $sub = $(el).parent().parent().parent().parent().find("sub").text()
        let $j = str.indexOf(" ")
        let $a=str.substring(0,$j)
        let $b=str.substring($j)
        $(el).prepend("<label>"+$a+$sub+$b+"</label>");
    })
}
appendColname();
changeFilterIcon();

function appendStar(){
    $(".path-product .table-wrap tbody tr").each((i,el)=>{
        var $a = $(".path-product .table-wrap thead tr:last-child th.views-field-field-star").index();
        $(el).find("td").each((j,ek)=>{
            if(j==$a){
                $(ek).hide();
                if($(ek).text().trim()=="True"){
                    $(ek).parent().find("td.views-field.views-field-title").prepend("<span></span>");
                    $(ek).parent().find("td.views-field.views-field-title")
                    .prepend("<div class=\"product-pop\">Our top selling products recommended for you.</div>")
                    $(ek).parent().find("td.views-field.views-field-title span").mouseenter(function(){
                        $(".product-pop").addClass("active");
                        $(".product-pop").css({'left':$(this).offset().left-40,'top':$(this).offset().top-$(window).scrollTop()-80});
                    }).mouseleave(function(){
                        $(".product-pop").removeClass("active");
                    })
                }
            }
            $(el).show()
        })
    })
    $(".path-product .table-wrap thead tr:last-child th.views-field-field-star").hide();
}
appendStar();

function horizontalScroll(){
    var container = $(".path-product .table-wrap")[0]

    let isIE = navigator.userAgent.match(/MSIE (\d)/i);
    isIE = isIE ? isIE[1] : undefined;
    let isFF = /FireFox/i.test(navigator.userAgent);

    if (isIE < 9){ //传统浏览器使用MouseWheel事件
    console.log("You are now using IE Browser,you may try Chrome to get better feeling")
    // setTimeout(function(){
    //     $(".path-product #block-bartik-content .block-unformatted .views-row.active")
    // .css("margin-top","-3.5%")
    // },300)
        if(container!=undefined){
            container.attachEvent("onmousewheel", function (e) {
                //计算鼠标滚轮滚动的距离
                //一格3行，每行40像素
                let v = e.wheelDelta / 2;
                container.scrollLeft += v;
                //阻止浏览器默认方法
                return false;
            });
        }
    }else if (!isFF){
        console.log("You are now using Modern Browser") //除火狐外的现代浏览器也使用MouseWheel事件
        if(container!=undefined){
            container.addEventListener("mousewheel", function (e) {
                //计算鼠标滚轮滚动的距离
                let v = -e.wheelDelta / 2;
                container.scrollLeft += v;
                //阻止浏览器默认方法
                e.preventDefault();
            }, false);
        }
    }else{
        console.log("You are now using FireFox Browser") //火狐使用DOMMouseScroll事件
        
    //     setTimeout(function(){
    //         $(".path-product #block-bartik-content .block-unformatted .views-row.active")
    // .css("margin-top","-3.5%")
    //         $(".path-about .about-popup").css("background","rgba(0,0,0,0.9)");}
    //         ,300)
        if(container!=undefined){
            container.addEventListener("DOMMouseScroll", function (e) {
                //计算鼠标滚轮滚动的距离
                //一格是3行，但是要注意，这里和像素不同的是它是负值
                container.scrollLeft += e.detail * 80;
                //阻止浏览器默认方法
                e.preventDefault();
            })
        }
    }
}

// horizontalScroll();

// function sortArrow(){
//     $(".path-product .table-wrap thead tr:last-child th").each((i,el)=>{
//         var imgs = $("img").clone();
//         console.log(imgs)
//     })
// }

// sortArrow();

function appendSortbtn(){
    $(".path-product .table-wrap tr:last-child th").each((i,el)=>{
        // $(el).append("<img src=\"/sites/default/files/images/down-flt.svg\">");
        // $(el).append("<img src=\"/sites/default/files/images/up-flt.svg\">");
        $(el).append("<div class=\"th-flt-wrap\"><span class=\"up-flt\"></span></div>")
        $(el).find(".th-flt-wrap").append("<span class=\"down-flt\"></span>")
        $(el).bind("click", function(){
            if($(this).find("img.sort-arrow").hasClass("ascending")){
                $(this).find("span.down-flt").hide();
                $(this).find("span.up-flt").show();
            }else{
                $(this).find("span.up-flt").hide();
                $(this).find("span.down-flt").show();
            }
            $(el).siblings().find("span.up-flt").show()
            $(el).siblings().find("span.down-flt").show()
        })

        $(el).find(".fa-filter").bind("click", function(){
            let $w = $(this).parent().parent().parent().find(".popUpFilter").width() / 2;
            let $w1 = $(el).width() / 2;
            let $h = $(el).height() + 25;
            console.log($w1-$w)
            $(this).parent().parent().parent().find(".popUpFilter").css("margin-left",$w1-$w);
            $(this).parent().parent().parent().find(".popUpFilter").css("margin-top",$h);
        })
    })
}
appendSortbtn();

function extendWidth(){
    let $w = $(".path-product #block-bartik-content .block-unformatted .views-row").length;
    if($(window).width()>1140){
        $(".path-product #block-bartik-content >.block-unformatted .views-row.active").css("width", "calc(100%/"+$w+")");
    }
}
    // extendWidth();

function addLinkToTabs(){
    $(".path-product #block-bartik-content .block-unformatted .views-row").each((i,el)=>{
        let $url = $(el).find("a").attr("href");
        $(el).click(function(){
            window.location.href=$url;
        })
        $(el).find("div").wrapAll("<div class=\"inner-wrap\"></div>")
    })
}

addLinkToTabs();

function orderablePartNumber(){
    $(".page-node-type-product .field--name-field-quality-reliability-p table th").each((i,el)=>{
        if($(el).find("span").text()=="Orderable part number" || $(el).find("span").text()=="订单编号"){
            $(el).append("<a href=\"/product/order-part-number-explanation\"><i class=\"fa fa-info-circle\" style=\"color:#fff;\"></i></a>")
        }
    })

    $(".page-node-type-product .field--name-field-ordering-availability table th").each((j,em)=>{
        if($(em).text()=="Orderable part number" || $(em).text()=="订单编号"){
            $(em).append("<a href=\"/product/order-part-number-explanation\"><i class=\"fa fa-info-circle\" style=\"color:#fff;\"></i></a>")
        }
    })

    $(".order-part-number-explanation table").wrap("<div class=\"opne-wrapper\"></div>")
    $(".order-part-number-explanation .opne-wrapper").before("<div class=\"click-me-drag\"><img src=\"/sites/default/files/images/click-me.png\"></div>")
}

orderablePartNumber();

function fixedLocate(){
    $(window).scroll(function(){
        $('.path-product .popUpFilter').each((i,el)=>{
            $(el).css({'left':$(el).parent().offset().left-$(el).width()/2+$(el).parent().width()/2,'top':$(el).parent().offset().top-$(window).scrollTop()});
        })
    })
    $(".path-product .table-wrap").scroll(function(){
        $('.popUpFilter').each((i,el)=>{
            $(el).css({'left':$(el).parent().offset().left-$(el).width()/2+$(el).parent().width()/2,'top':$(el).parent().offset().top-$(window).scrollTop()});
            // if($(el).offset().left<$(".table-wrap").offset().left){
            //     $(el).hide();
            // }else{
            //     $(el).show();
            // }
        })
    })
}
// fixedLocate();

function addResetBtn(){
    $(".path-product #block-bartik-content .view-product .wrap .inner .block")
    .append($(".path-product .table-wrap caption .rdiv span a.reset").clone()).before($(".wafer-des p"));
    $(".path-product #block-bartik-content .view-product .wrap .inner .block a.reset").click(function(){
        $(".path-product .table-wrap caption .rdiv span a.reset").click(function(){
        })
        $(".path-product .table-wrap caption .rdiv span a.reset")[0].click();
    })
}
addResetBtn();

function datasheetInline(){
    $(".path-product .popUpFilter").each(function(){
        if($(this).find("ul.flt_checklist li.flt_checklist_item").length>5){
            $(this).find("ul.flt_checklist li.flt_checklist_item:nth-child(2n+1)").css("float","left");
        }else{
            $(this).find("div.div_checklist").addClass("one-col")
        }
    })
}

datasheetInline();

function pdfProduct(){
    //let $d = $(".path-product .table-wrap span.file a").attr("href")
    $(".path-product .table-wrap span.file a").text("");
    $(".path-product .table-wrap span.file a").attr("target","_blank");
    $(".path-product .table-wrap span.file a").append("<img src=\"/sites/default/files/page/pdf.png\" style=\"width:80%;\">");
   //$(".path-product .table-wrap span.file a").attr("download",)
//    $(".path-product .table-wrap span.file a").each(function(){
//        let $h = $(this).attr("href")
//        let $arr = $h.split("/")
       
//        var index = $h.lastIndexOf("\/")
//        let $content = $h.substring(index + 1 , $h.length)
    
//        $(this).attr("download", $content.split(".")[0].toUpperCase()+".pdf")
//    }) 
}
pdfProduct();

function makelist(){
    if($(".page-node-type-product #block-bartik-content article .node__content >div:nth-child(2) div.field__item li").length==0){
        var arr =  new Array();
        $(".page-node-type-product #block-bartik-content article .node__content >div:nth-child(2) div.field__item div")
        .each(function(){
            arr.push($(this).text().substring(2).replace(/[\r\n]/g,"").trim());
            // console.log(arr)
        })
        $(".page-node-type-product #block-bartik-content article .node__content >div:nth-child(2) div.field__item div").detach();
        $(".page-node-type-product #block-bartik-content article .node__content >div:nth-child(2) div.field__item")
        .append("<ul></ul>")
        var x;
        for(x in arr){
            $(".page-node-type-product #block-bartik-content article .node__content >div:nth-child(2) div.field__item ul")
            .append("<li>"+arr[x]+"</li>")
        }

        $(".page-node-type-product #block-bartik-content article .node__content >div:nth-child(2) div.field__item p")
        .each(function(){
            arr=$(this).text().split("\n");
            var x2;
            for(x2 in arr){
                $(".page-node-type-product #block-bartik-content article .node__content >div:nth-child(2) div.field__item ul")
                .append("<li>"+arr[x2].substring(2)+"</li>")
            }
        })
        $(".page-node-type-product #block-bartik-content article .node__content >div:nth-child(2) div.field__item p").detach();
    }

    if($(".page-node-type-product #block-bartik-content article .node__content >div:nth-child(3) div.field__item li").length==0){
        var arr2 =  new Array();
        $(".page-node-type-product #block-bartik-content article .node__content >div:nth-child(3) div.field__item div")
        .each(function(){
            arr2.push($(this).text().substring(2));
            // console.log(arr2)
        })
        $(".page-node-type-product #block-bartik-content article .node__content >div:nth-child(3) div.field__item div").detach();
        $(".page-node-type-product #block-bartik-content article .node__content >div:nth-child(3) div.field__item")
        .append("<ul></ul>")
        var y;
        for(y in arr2){
            $(".page-node-type-product #block-bartik-content article .node__content >div:nth-child(3) div.field__item ul")
            .append("<li>"+arr2[y]+"</li>")
        }

        $(".page-node-type-product #block-bartik-content article .node__content >div:nth-child(3) div.field__item p")
        .each(function(){
            arr2=$(this).text().split("\n");
            var y2;
            for(y2 in arr2){
                $(".page-node-type-product #block-bartik-content article .node__content >div:nth-child(3) div.field__item p").detach();
                $(".page-node-type-product #block-bartik-content article .node__content >div:nth-child(3) div.field__item ul")
                .append("<li>"+arr2[y2].substring(2)+"</li>")
            }
        })
        

    }
}

makelist();

function hideLastFilter(){
    $(".path-product .table-wrap tr:last-child th:last-child span").hide()
}

hideLastFilter();

function clearBr(){
    $(".page-node-type-product table td br").remove();
}
clearBr();

function sortFileConvert(){
    

$(window).ready(function(){
    //sortFileConvert();
    $(".file-convert button").hide();
    $(".file-convert button:nth-child(3)").after($(".file-convert button:nth-child(2)"));
    $(".file-convert button").show();
})
}
sortFileConvert();

function popUpFilterSortByNumber(){
    $(".flt_checklist").each((i,el)=>{
        var arr =[];
        var flag=0;
        $(el).find("li").each(function(){
          var ele = $(this).text();
          if(ele!="Clear"){
            arr.push(ele);
          }
          if(/^[0-9]+.?[0-9]*$/.test(ele)){
              flag=1;
          }
        })
        if(flag){
            //console.log(flag);
            function sortNumber(a,b){
                return a - b;
              }
              arr = arr.sort(sortNumber);
              //console.log(arr)
        }else{
            arr = arr.sort()
        }
        //排序
        
        jQuery(".flt_checklist_item").each(function(){
            let arr1 = [];
            arr1.push($(this).clone());
            console.log(arr1)
        })
        
        var list=""
        for (var i = 0; i < arr.length; i++) {
          list +="<li>"+arr[i]+"</li>";
        };
        $(el).empty().append(list);
    })
}
//popUpFilterSortByNumber();
function showHiddenOption(){
    $(".path-product .div_checklist li.flt_checklist_item").each(function(){
        if($(this).text().length==0){
            $(this).show();
            $(this).find("label").append("null data")
        }
    });
}
// showHiddenOption();

function wrapTableTH(){
    $(".table-wrap table th >span").wrap("<div class=\"th-wrapper\"></div>")
    $(".th-wrapper").each(function(){
        $(this).append($(this).parent().find(".th-flt-wrap").clone())
        $(this).parent().children(".th-flt-wrap").detach();
    })
    $(".page-node-type-product article table").wrap("<div class=\"pd-table-wrapper\"></div>")
}
wrapTableTH();

function alterDefaultPDFname(){
    if($(".pd-tabs li a").length>0){
        let $h = $(".pd-tabs li a").attr("href");
        let $arr = $h.split("/")
        let $l = $arr.length - 1
       
        var index = $h.lastIndexOf("\/"); 
        let $content = $h.substring(index + 1, $h.length)
        //console.log($h.replace($content,$content.toUpperCase()))
        // let $a = $h.replace($content,$content.toUpperCase())
        // let $b = $a.replace("PDF","pdf")
        $(".pd-tabs li a").attr("download", $content.split(".")[0].toUpperCase()+".pdf"); 


    }
    // $(".pd-tabs li").each((i ,el) =>{
    //     if($(el).find("a").length>0){
    //         $(el).bind("click", function(){
    //             window.location.href = $(el).find("a").attr("href")
    //         })
    //     }
    // })
}
// alterDefaultPDFname();

function getBlob(url) {
    return new Promise(resolve => {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', url, true);
        xhr.responseType = 'blob';
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.response);
            }
        };

        xhr.send();
    });
}

/**
 * 保存
 * @param  {Blob} blob     
 * @param  {String} filename 想要保存的文件名称
 */
function saveAs(blob, filename) {
    if (window.navigator.msSaveOrOpenBlob) {
        navigator.msSaveBlob(blob, filename);
    } else {
        const link = document.createElement('a');
        const body = document.querySelector('body');

        link.href = window.URL.createObjectURL(blob);
        link.download = filename;

        // fix Firefox
        link.style.display = 'none';
        body.appendChild(link);
        
        link.click();
        body.removeChild(link);

        window.URL.revokeObjectURL(link.href);
    }
}

/**
 * 下载
 * @param  {String} url 目标文件地址
 * @param  {String} filename 想要保存的文件名称
 */
function download(url, filename) {
    getBlob(url).then(blob => {
        saveAs(blob, filename);
    });
}


function packageImg(){
    var img = $(".page-node-type-product .field--name-field-package table tbody tr:first-of-type td:nth-of-type(2)").text().trim();
    
    if($(".page-node-type-product .field--name-field-package table tbody td img").length>0){
        $(".page-node-type-product .field--name-field-package table tbody td img").attr("src","/sites/default/files/package/"+img+".jpg");
        $(".page-node-type-product .field--name-field-package table tbody td img").attr("alt","");
    }else{
        $(".page-node-type-product .field--name-field-package table tbody tr:first-of-type td:nth-of-type(2) span")
        .before("<img class=\"custom-max-image-size\" src=\"/sites/default/files/package/"+img+".jpg\">")
    }
}
packageImg();