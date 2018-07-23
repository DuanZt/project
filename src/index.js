let $ = require("jquery");
window.$ = window.jQuery = $;
require("flexslider");

import 'normalize.css';
require("bootstrap/dist/css/bootstrap.min.css");
require("flexslider/flexslider.css");
require("./scss/index.scss");

let slider = () => {
    let $banner = $("#banner");
    let images = $("#banner figure.image_container.float_above img").clone();
    let panels = $("#banner .ce_text").clone().map((i,el)=>{
        $(el).find("figure.image_container").remove();
        return $(el);
    });

    let $flexslider = $("<div class='flexslider banner'></div>");
    let $sliders = $("<ul class='slides'></ul>");
    
    images.each(function(i,el) {
        let $li = $('<li></li>');
        $li.append($(el));
        $li.append(panels[i]);
        $sliders.append($li);
    });
    
    $flexslider.append($sliders);
    $banner.after($flexslider);

    $('.flexslider').flexslider({
        animation: "slide"
    });
}



slider();