function loadedFix(){
        let isIE = navigator.userAgent.match(/Trident\/(\d)/i);
        isIE = isIE ? isIE[1] : undefined;
        let isFF = /FireFox/i.test(navigator.userAgent);
        if (isIE < 9){ //传统浏览器使用MouseWheel事件
            // console.log("You are now using IE Browser,you may try Chrome to get a better experience");
            // $(".path-product #block-bartik-content .block-unformatted .views-row.active")
            //     .css("margin-top","-3.5%")
            $(".path-frontpage #main .videos ul:nth-last-child(3) li .views-row .views-field-title a")
            .click(function(e){
                e.preventDefault();
            })
            $(".path-frontpage .home-banner").addClass("home-banner-ie")
            $(".highlighted #block-webform ").css("right","16px")
            $(".path-frontpage .home-banner").show()
        }else if (!isFF){
            // console.log("You are now using Modern Browser") //除火狐外的现代浏览器也使用MouseWheel事件
        }else{
            console.log("You are now using FireFox Browser") //火狐使用DOMMouseScroll事件
                // $(".path-product #block-bartik-content .block-unformatted .views-row.active")
                //     .css("margin-top","-3.5%")//Locate selected active block
                // $(".path-about .about-popup").css("background","rgba(0,0,0,0.9)");// Add Backgrouond Cover on Firefox
        }
    
}
loadedFix();

function preFix(){
    let isIE = navigator.userAgent.match(/MSIE (\d)/i);
    isIE = isIE ? isIE[1] : undefined;
    let isFF = /FireFox/i.test(navigator.userAgent);
    
}
preFix();




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
function renameDownloaded(){
    let $address = $(".pd-tabs li a").attr("href")
    let $filename = $(".pd-tabs li a").attr("download")
    $(".pd-tabs li").each((i ,el) =>{
        if($(el).find("a").length>0){
            $(el).bind("click", function(){
                download($address, $filename)
                $(el).find("a").removeAttr("download");
                $(el).find("a").removeAttr("href")
            })

        }
    })

    $(".path-product .table-wrap span.file a").each(function(){
        let $address1 = $(this).attr("href")
        let $filename1 = $(this).attr("download")
        $(this).parent().parent().css("cursor","pointer")
        $(this).parent().parent().bind("click", function(){
            download($address1, $filename1)

        })
        $(this).removeAttr("download");
        $(this).removeAttr("href")

    })
}
//renameDownloaded();

function wrapPdfDownload(){
    if($(".pd-tabs li a").length>0){
        let isIE = navigator.userAgent.match(/MSIE (\d)/i);
        isIE = isIE ? isIE[1] : undefined;
        let isFF = /FireFox/i.test(navigator.userAgent);
    
        if (isIE < 9){
            // $(".pd-tabs li a").parent().click(function(){
            //     // window.location.href = $(this).find("a").attr("href");
            //     window.open(
            //         $(this).find("a").attr("href"),
            //         "_blank"
            //     );
            // })
        }else{
            // $(".pd-tabs li a").parent().click(function(){
            //     // window.location.href = $(this).find("a").attr("href");
            //     window.open(
            //         $(this).find("a").attr("href"),
            //         "_blank"
            //     );
            // })
            // $(".pd-tabs li a").css("pointer-events","none");
        } //传统浏览器使用MouseWheel事件
    }
}
wrapPdfDownload();
