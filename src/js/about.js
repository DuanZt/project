function memberBio(){
    //Init
    $('.path-about').prepend("<div class=\"about-popup\"></div>");
    $('.about-popup').prepend("<div class=\"l-a\"><img src=\"/sites/default/files/about/white-left-arrow.svg\"></div>");
    $('.about-popup').prepend("<div class=\"a-close\"><img src=\"/sites/default/files/about/close.svg\"></div>")
    $('.about-popup').append("<div class=\"main-team\"></div>");
    $('.about-popup').append("<div class=\"r-a\"><img src=\"/sites/default/files/about/white-right-arrow.svg\"></div>");

    $('.about-popup .main-team').append("<div class=\"about-member-bio\"></div>");
    $('.about-popup .main-team').append("<div class=\"about-member-details\"></div>");
    $('.about-popup .main-team .about-member-bio').append("<h2></h2>");
    $('.about-popup .main-team .about-member-bio').append("<h3></h3>");


    $(".a-close img").bind("click", function(){
        $(".about-popup").fadeOut();
        $(".about-popup .main-team img").remove();
        $(".about-popup .main-team .about-member-bio h2").empty();
        $(".about-popup .main-team .about-member-bio h3").empty();
        $(".about-popup .main-team .about-member-details").empty()
    })

    var imgs= $(".about-member-img img").clone();
    var names = [];
    var titles = [];
    var bios = [];
    $('.about-member-teaser h2').each(function(){
        names.push($(this).text());
    })
    $('.about-member-teaser h3').each(function(){
        titles.push($(this).text());
    })
    $('.about-hidden').each(function(){
        bios.push($(this).text());
    })

    var obj_team;
        $(".about-member-bio").wrap("<div class=\"about-bio-wrapper\"></div>");
        $(".about-member").bind("click", function(){
            obj_team = $(".about-member").index(this);
            $(".about-popup").fadeIn();
            $(".about-popup .main-team .about-member-bio").prepend(imgs[obj_team]);
            $(".about-popup .main-team .about-member-bio h2").text(names[obj_team]);
            $(".about-popup .main-team .about-member-bio h3").text(titles[obj_team]);
            var j;
            for(j in bios[obj_team].split("\n")){
                $(".about-popup .main-team .about-member-details").append("<p>"+bios[obj_team].split("\n")[j]+"</p>")
            }
        })
        $(".l-a").bind("click", function(){
            if(obj_team>0){
                $(".about-popup .main-team .about-member-bio img").remove();
                obj_team-=1;
                
                $(".about-popup .main-team .about-member-bio").prepend(imgs[obj_team]);
                $(".about-popup .main-team .about-member-bio h2").text(names[obj_team]);
                $(".about-popup .main-team .about-member-bio h3").text(titles[obj_team]);
                $(".about-popup .main-team .about-member-details").text("");
                var j;
                for(j in bios[obj_team].split("\n")){
                    $(".about-popup .main-team .about-member-details").append("<p>"+bios[obj_team].split("\n")[j]+"</p>")
                }
            }
        })
        $(".r-a").bind("click", function(){
            if(obj_team<imgs.length-1){
                $(".about-popup .main-team  img").remove();
                obj_team+=1;
                
                $(".about-popup .main-team .about-member-bio").prepend(imgs[obj_team]);
                $(".about-popup .main-team .about-member-bio h2").text(names[obj_team]);
                $(".about-popup .main-team .about-member-bio h3").text(titles[obj_team]);
                $(".about-popup .main-team .about-member-details").text("");
                var j;
                for(j in bios[obj_team].split("\n")){
                    $(".about-popup .main-team .about-member-details").append("<p>"+bios[obj_team].split("\n")[j]+"</p>")
                }
            }
        })
}

memberBio();

function addTabs(){
    $(".path-about #block-bartik-content").prepend("<ul><li>Open Positions</li><li>Did Not Find Ideal Positions</li></ul>");
    $(".path-about #block-bartik-content >ul").wrap("<div class=\"ideal-tabs\"></div>");

    let $tabs = $(".path-about #block-bartik-content .ideal-tabs >ul li")
    $(".path-about #block-bartik-content .ideal-tabs >ul li:first-child").addClass("active");
    $(".path-about #block-bartik-content >div.views-element-container").addClass("active");
    
    $tabs.bind("click", function(){
        $(this).addClass("active").siblings().removeClass("active");
        if($(this).index()==0){
            $(".path-about #block-bartik-content >div.views-element-container").addClass("active");
            $(".no-ideal").removeClass("active");
            $(".no-ideal-block-bottom").removeClass("active");
            $(".path-about .op-zh").show()
        }else{
            $(".path-about #block-bartik-content >div.views-element-container").removeClass("active");
            $(".no-ideal").addClass("active");
            $(".no-ideal-block-bottom").addClass("active");
            $(".path-about .op-zh").hide()
        }
    })

    // $(".no-ideal form").submit(function(){
    //     alert("Submit Success!");
    // })
}
addTabs();
// function noidealText(){
//     $("#edit-file-upload-upload .description").hide
// }.no-ideal #ajax-wrapper .form-item-file-upload #edit-file-upload-upload.js-form-managed-file.form-managed-file
// noidealText();

function addtext2Upload(){
    $("#block-webform-3").hide();
}


// function addUploadWrapper(){
//     $(".no-ideal #ajax-wrapper").wrapAll("<div class=\"upload-wrapper\"></div>")
// }

// addUploadWrapper();

function submitForm(){
    setTimeout(function(){
        $(".no-ideal [id^='ajax-wrapper'] .form-item-file-upload").prepend("<span class=\"no-ideal-status\"></span>")
        $(".no-ideal").on("change", "input[type='file']", function(){
            $("span.no-ideal-status").hide();
            //$(".no-ideal [id^='ajax-wrapper'] .form-item-file-upload").prepend("<span class=\"filename\"></span>")
        })
        $(".no-ideal form").submit(function(){
            alert("Submit successfully!")
        })
    }, 500)
}
submitForm();

function alterJobform(){
    setTimeout(function(){
        $(".page-node-type-open-positions .no-ideal h2").text("Apply for: "+$(".page-node-type-open-positions #block-bartik-content >h2 span").text());
        $(".page-node-type-open-positions .no-ideal .js-form-item:nth-child(5)").hide()
    }, 500)
}

alterJobform();

function aboutMemberMobile(){
    if(window.location.href.match(".com/cn")){
        $("#block-bartik-content .about-member").eq(0).addClass("active");
        $("#block-bartik-content .about-team-imgs").prepend("<div class=\"about-arrow-left\"><img src=\"/sites/default/files/images/videos-left-arrow.svg\"></div>")
        $("#block-bartik-content .about-team-imgs").append("<div class=\"about-arrow-right\"><img src=\"/sites/default/files/images/videos-right-arrow.svg\"></div>")
        var i = $("#block-bartik-content .about-member.active").index();
        // console.log(i)
        $("#block-bartik-content .about-team-imgs .about-arrow-left").bind("click", function(){
            
            if(i>0){
                i-=1;
            }
            $("#block-bartik-content .about-member").removeClass("active");
            $("#block-bartik-content .about-member").eq(i).addClass("active")
        })

        $("#block-bartik-content .about-team-imgs .about-arrow-right").bind("click", function(){
            // console.log(i)
            if(i<$("#block-bartik-content .about-member").length-1){
                i+=1;
            }
            $("#block-bartik-content .about-member").removeClass("active");
            $("#block-bartik-content .about-member").eq(i).addClass("active")
        })
    }else{
        $(".about-member").eq(0).addClass("active");
        $(".about-team-imgs").prepend("<div class=\"about-arrow-left\"><img src=\"/sites/default/files/images/videos-left-arrow.svg\"></div>")
        $(".about-team-imgs").append("<div class=\"about-arrow-right\"><img src=\"/sites/default/files/images/videos-right-arrow.svg\"></div>")
        var i = $(".about-member.active").index();
        // console.log(i)
        $(".about-team-imgs .about-arrow-left").bind("click", function(){
            
            if(i>0){
                i-=1;
            }
            $(".about-member").removeClass("active");
            $(".about-member").eq(i).addClass("active")
        })
    
        $(".about-team-imgs .about-arrow-right").bind("click", function(){
            // console.log(i)
            if(i<$(".about-member").length-1){
                i+=1;
            }
            $(".about-member").removeClass("active");
            $(".about-member").eq(i).addClass("active")
        })
    }
}
aboutMemberMobile();

function moveOpenPositions(){
    if(window.location.href.match(".com/cn")){
        $(".about-us").hide();
        $(".about-careers >p").before($(".ideal-tabs"))
        $(".about-careers .ideal-tabs").after($(".ap-op"));
        // $(".about-careers #block-bartik-content").after($("#block-webform-3"))
        // $(".about-careers #block-webform-3").after($(".no-ideal-block-bottom"))
    }else{
        $(".about-careers >p").before($("#block-bartik-content"))
        $(".about-careers #block-bartik-content").after($("#block-webform-3"))
        $(".about-careers #block-webform-3").after($(".no-ideal-block-bottom"))
    }

}
moveOpenPositions();

function fixSearchBar(){
    $("#header #block-bartik-search form .form-submit").click(function(){
        window.location.href = "http://www.ween-semi.com/en/search/node?keys=";
    })
}
fixSearchBar();

