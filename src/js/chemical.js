function cc(){
    // $(".page-node-type-chemical-content article .node__content >div >.section")
    // .append("<div class=\"file-convert\"></div>");
    $(".page-node-type-chemical-content article table")
    .before("<div class=\"file-convert\"></div>");
    $(".page-node-type-chemical-content article table").wrap("<div class=\"tmp-wrap\" style=\"overflow-x:auto;\"></div>")
    $(".page-node-type-chemical-content article .field__item span.file a").each((j,em)=>{
        $(".page-node-type-chemical-content .field--name-field-excel-label .field__item").each((i,el)=>{
            if(i==j){
                $(em).text($(el).text())
            }
        })
    })

    
    $(".page-node-type-chemical-content article div.section .field--name-field-excels .field__item").each(function(){
        $(this).prepend("<img src=\"/sites/default/files/images/xlsx.png\">")
    })

    // $(".page-node-type-chemical-content article div.section .field--name-field-excels .field__items")
    // .append("<div class=\"field__item btn-convert\"><img src=\"/sites/default/files/page/pdf.png\"><span>Chemical Content</span></div>")

    // $(".page-node-type-chemical-content article div.section .field--name-field-excels .field__items")
    // .append("<div class=\"field__item btn-convert\"><img src=\"/sites/default/files/page/pdf.png\"><span>Chinese RoHS</span></div>")
    // // $(".btn-convert").css("cursor","pointer")
    // $(".btn-convert:nth-last-child(2)").click(function(){
    //     $(".toPDF")[0].click()
    // })
    // $(".btn-convert:last-child").click(function(){
    //     $(".toExcel")[0].click()
    // })
}
cc();

function ccTabs(){
    $(".page-node-type-chemical-content article .tmp-wrap")
    .after("<ul class=\"cc-tabs\"><li>Chemical Content</li><li>China RoHS Information</li></ul>")
    $(".page-node-type-chemical-content article .cc-tabs li:first-child").addClass("active");

    $(".page-node-type-chemical-content article .cc-tabs li").each((i,el)=>{
        $(el).click(function(){

            $(el).addClass("active").siblings().removeClass("active");
            if($(".cc-tabs li:last-child").hasClass("active")){
                let $h = $(".page-node-type-chemical-content article .field__items .field__item:last-child span.file").css("height")
                $(".page-node-type-chemical-content .field--name-field-excels").css("height",$h);
            }else{
                $(".page-node-type-chemical-content .field--name-field-excels").css("height","auto");
            }
            if(i==1){
                $(".page-node-type-chemical-content article .field__items").addClass("active");
            }else{
                $(".page-node-type-chemical-content article .field__items").removeClass("active");
            }
        })
    })
}
ccTabs();

function correctColspan(){
    $(".page-node-type-chemical-content table tr").each((i,el)=>{
        // if($(el).attr("colspan")>0)
    })
}

function tableBgcolor(){
    $(window).ready(function(){
        var $flag=1;
        $(".page-node-type-chemical-content .field__items .field__item:first-child .xlsx-table table tbody tr")
        .each((i,el)=>{
            let flag=0;
            if($flag){
                $(el).css("background","#e9e8e8")
                
            }else{
                $(el).css("background","#fff;")
            }
            $(el).find("td").each((j,ek)=>{
                if($(ek).find("i").length>0){
                    flag=1;
                }
            })
            if(flag){
                $flag=!$flag
            }
        })
    })
}

tableBgcolor();

function correctHeight(){
    $("ul.cc-tabs li").click(function(){
    })
   
}
correctHeight()
