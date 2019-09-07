let wrapContent = () => {
    $(".path-contact-us #main-wrapper .views-row .views-field-field-office .field-content").addClass("need-wrap");
    $(".path-distributors #main-wrapper .js-form-item").wrapAll("<div class='wrapper'></div>");
    let contents = $(".need-wrap");
    contents.each((i,el)=>{
        let content = $(el).children("p");
        content.wrapAll("<div class='wrapper'></div>");
    });
}

let passwordRecover = () => {
    $(document).ready(function(){
        setTimeout(function(){
            // console.log($(".path-user ul.tabs.primary li:nth-child(2) a").length)
            $(".path-user #block-bartik-content form").append($(".path-user ul.tabs.primary li:nth-child(2) a").clone())
            $(".path-user #block-bartik-content form a").text("Forgot Password?");
            $(".path-user #block-bartik-content form").prepend("<h2>LOGIN</h2>");
        
            if($("title").text().match("Reset your password")){
                $("#block-bartik-content form a").hide();
            }
        }, 500)
    })

}

passwordRecover();

let addCover = () => {
    $(".path-contact-us #main-wrapper .views-row .views-field-title").append("<div class=\"bottom-cover\"></div>");
}

addCover();

let addMinHeight = () => {
    $(".path-distributors .inner").change(function(){
        setTimeout(function(){
            if($(".path-distributors table").length<=0){
            }else{
            }
        }, 1000)
    })
}
addMinHeight();

let locationFilter = () => {
        $(".path-distributors form .js-form-item:nth-child(3) select:last-child").bind("change",function(e){
            var s1 = $(this).val();
            $(".path-distributors form .js-form-item:nth-child(3) select:last-child option").each((i,el)=>{
                if($(el).attr("value")==s1){
                    $(".path-distributors form .js-form-item:first-child >.select-wrapper select:last-child option").each((j,em)=>{
                        if($(em).text().trim()==$(el).text().trim()){
                            $(".path-distributors form .js-form-item:first-child select:last-child").val($(em).attr("value"))
                            // console.log($(em).attr("value"))
                        }
                    })
                }
            })
        })
}

// $(document).ready(function(){
//     locationFilter();
// })
let contactClick = () => {
    $(".path-contact-us #main-wrapper").bind("click",function(){
        $(this).toggleClass("cked")
        alert("fuck")
    })
}

function contactClicked(){
    $(".path-contact-us #main-wrapper").bind("click",function(){
        $(this).toggleClass("cked")
    })
}
contactClicked();