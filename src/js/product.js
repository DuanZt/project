import TableFilter from 'tablefilter'
import Table2Excel from 'table2excel.js'
import _ from './helper'
import XLSX from 'xlsx'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf/dist/jspdf.debug';

(function () {
  var filtersConfig = {
    // instruct TableFilter location to import ressources from
    base_path: '/themes/bartik/project/node_modules/tablefilter/dist/tablefilter/',
    col_0: 'none',
    col_1: 'checklist',
    col_2: 'checklist',
    col_3: 'checklist',
    col_4: 'checklist',
    col_5: 'checklist',
    col_6: 'checklist',
    col_7: 'checklist',
    col_8: 'checklist',
    col_9: 'checklist',
    col_10: 'checklist',
    col_11: 'checklist',
    col_12: 'checklist',
    col_13: 'checklist',
    col_14: 'checklist',
    col_15: 'checklist',
    col_16: 'checklist',
    col_17: 'checklist',
    col_types: [],
    sort_num_asc: [1, 17],
    popup_filters: true,
    alternate_rows: true,
    rows_counter: true,
    btn_reset: {
      text: 'Reset Filters'
    },
    loader: true,
    mark_active_columns: true,
    highlight_keywords: true,
    no_results_message: true,
    extensions: [{
      name: 'sort'
    }]
  }

  $('.path-product .view-product table').each((i, el) => {
    
    // filtersConfig["col_types"].push("boolean")
      var l = $("table > tbody > tr:first > td").length;
      console.log("Cols:"+l)
      $("table > tbody > tr:first > td").each((k,eo)=>{
        var flag=0;
        // console.log($(eo).text().trim())
        $("table tbody tr").each((l,ep)=>{
          $(ep).find("td").eq(k).each((j,em)=>{
            // console.log($(em).text().trim()+"///")
              if(/^[0-9]+.?[0-9]*$/.test($(em).text().trim())){
                flag=1;
              }
          })
        })

        if(flag){
          filtersConfig["col_types"].push("number")
        }else{
          filtersConfig["col_types"].push("string")
        }
        // console.log(flag)
      })
      // console.log(filtersConfig["col_types"])


    let tf = new TableFilter(el, filtersConfig)
    tf.init()
  })

  $('.view-product .btn').click(() => {
    new Table2Excel('.view-product table').export()
  })
})();
(function () {
  /* set up an async GET request */
  let texts = ["Chemical Content","Chinese RoHS"];
  $('.page-node-type-chemical-content .field--name-field-excels a').each(
    (i, el) => {
      console.log("work")
      var req = new XMLHttpRequest()
      var _this = $(el)
      var url = _this.attr('href')
      req.open('GET', url, true)
      req.responseType = 'arraybuffer'

      req.onload = function (e) {
        /* parse the data when it is received */
        var data = new Uint8Array(req.response)
        var wb = XLSX.read(data, {
          type: 'array',
          cellStyles: true
        })

        let cells = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], {
          raw: false,
          h: true
        })
        console.log("wb:"+wb)

        let htmlstr = '<div class="xlsx-table">'
        if (i === 0) {
          htmlstr += _.ccellsFormat(wb)
        } else {
          htmlstr += _.chinaRoshInformationcellsFormat(cells)
        }
        htmlstr += '</div>'

        _this.after(htmlstr)

        _this.before('<button class="toPDF" >Save PDF</button>')
        _this.before('<button class="toExcel" >Save EXCEL</button>')

        _this.siblings("button.toPDF").click(() => {
          html2canvas(_this.siblings(".xlsx-table")[0], {
            scale: 2
          }).then(function (canvas) {
            var imgData = canvas.toDataURL('image/jpeg', 1)
            var doc = new jsPDF('p', 'mm', 'a4')
            var width = doc.internal.pageSize.getWidth() - 20
            var height = doc.internal.pageSize.getHeight() - 20
            var scale_w = width / canvas.width
            var scale_h = height / canvas.height

            if (canvas.width / canvas.height > 0.71) {
              height = canvas.height * scale_w
            } else {
              width = canvas.width * scale_h
            }

            doc.addImage(imgData, 'JPEG', 10, 10, width, height)
            doc.save(texts[i]+'.pdf')
          })
        })

        _this.siblings("button.toExcel").click(() => {
          (() => {
            let t2e = new Table2Excel()
            t2e.tables = [_this.siblings('.xlsx-table').find("table")[0]];
            t2e.export(texts[i],"xlsx")
          })()
        })

          $(".file-convert").append("<button class='dlExcel"+i+"'>"+texts[i]+"</button>");
          $(".file-convert").find(".dlExcel"+i).click(function(){
            _this.siblings("button.toExcel").click();
          })
          $(".file-convert").append("<button class='dlPDF"+i+"'>"+texts[i]+"</button>");
          $(".file-convert").find(".dlPDF"+i).click(function(){
            _this.siblings("button.toPDF").click();
          })
        /* DO SOMETHING WITH workbook HERE */
      }
      req.send()
    }
  )
})()


