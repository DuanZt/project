function descNews(){
    // $(".page-node-type-news .field--name-field-date").after($('.page-node-type-news .field--name-title'));
    $('.page-node-type-news .field--name-title').before($(".page-node-type-news .field--name-field-date"));
    $('.page-node-type-exhibitions .field--name-title').before($(".page-node-type-exhibitions .field--name-field-date-range"));
}

descNews();

function imgLink(){

    $('.path-news .home-news .views-row').each((i, el) => {
        $(el).find("img").click(() => {
          window.location.href=$(el).find("a")[0].href
        })
    })

    $('.path-exhibitions #block-bartik-content .views-row').each((i, el) => {
        $(el).find("fieldset.head").click(() => {
          window.location.href=$(el).find("a")[0].href
        })
    })

    // $('.path-news .home-news .views-row').each((i, el) => {
    //     $(el).find(".views-field-body").empty();
    //     $(el).find(".views-field-body").append("<div class=\"field-content\"><p>"+$(el).find("img").attr("alt")+"</p></div>")
    // })
    // $('.path-notice .block-unformatted .views-row').each((i, el) => {
    //     $(el).find(".views-field-body").empty();
    //     $(el).find(".views-field-body").append("<div class=\"field-content\"><p>"+$(el).find("img").attr("alt")+"</p></div>")
    // })
    // $('.path-latest .block-unformatted .views-row').each((i, el) => {
    //     $(el).find(".views-field-body").empty();
    //     $(el).find(".views-field-body").append("<div class=\"field-content\"><p>"+$(el).find("img").attr("alt")+"</p></div>")
    // })
}

imgLink();
