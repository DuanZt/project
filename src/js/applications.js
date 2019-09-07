let addAppname = () => {
    $(".path-applications #block-bartik-content .block-unformatted").each((i,el) => {
        let $tmp = $(el).find('.uf-attr-cloned').text();
        $(el).find('.views-row').wrapAll("<div class=\"uf-hover\"></div>");
        $(el).find('.uf-hover').prepend("<div class=\"views-row\">"+$tmp+"</div>");
        $(el).append("<div class=\"uf-hover-bg\"></div>");
        $(el).find(".uf-attr-cloned").text($(el).find(".uf-attr-cloned div.field--name-name").text());
        // $(el).find(".uf-attr-cloned").append("<div class=\"cloned-text\"></div>");
        // $(el).find(".cloned-text").text($(el).find(".uf-attr-cloned div.field--name-name").text());
        
    });
}

addAppname();

let descContent = () =>{
    $(".page-node-type-news .field--type-datetime").after()
}

let rowsWrap = () =>{
    $(".path-applications #block-bartik-content .block-unformatted .uf-hover .views-row:first-child").addClass("first-row");
    $(".path-applications #block-bartik-content .block-unformatted").each(function(){
        $(this).find(".uf-hover .views-row").not(".first-row").wrapAll("<div class=\"rows-container\"></div>");
    })
}

rowsWrap();

let countRows = () =>{
    $(".path-applications #block-bartik-content .block-unformatted .uf-hover .views-row").each((i,el) => {
        if(($(el).index(this))<=4){
            $(el).addClass("arrowed");
        };
    })

    // $(".path-applications #block-bartik-content .block-unformatted .uf-hover .views-row")
}

countRows();

let appHover = () => {
    $(".path-applications #block-bartik-content .block-unformatted .uf-hover .views-row a").mouseenter(function(){
        $(this).parent().parent().parent().siblings().find("a").css("opacity", "0.5");
    }).mouseleave(function(){
        $(this).parent().parent().parent().siblings().find("a").css("opacity", "1");
    })
}
// appHover();

let removeArrow = () => {
    $(".path-applications #block-bartik-content .block-unformatted .uf-hover .views-row")
    .each((i,el)=>{
        if($(el).find(".views-field-field-isnull").text().trim()==1){
            $(el).find(".views-field-title a").attr("href", "javascript:void(0)");
        }else{
            $(el).find(".views-field-title").append("<span class=\"not-null\"></span>");
            $(el).find(".views-field-title a").css("opacity", "1")
            $(el).css("cursor", "pointer")
        }
    })

    $(".path-applications #block-bartik-content .block-unformatted .rows-container").each(function(){
        $(this).scroll(function(){
            if($(this).scrollTop()>0){
                $(this).find("span.not-null").hide()
            }else{
                $(this).find("span.not-null").show()
            }
        })

    })
}
removeArrow()

function applicationTableWrap(){
    $(".page-node-type-application table").wrap("<div class=\"app-table-wrapper\"></div>")
    $(".path-applications #block-bartik-content .block-unformatted").click(function(){
        $(this).toggleClass("active")
    })
}
applicationTableWrap();


