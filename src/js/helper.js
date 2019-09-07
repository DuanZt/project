import NP from 'number-precision'

const _ = {
  roundFun: (value, n) => {
    //return Math.round(value * Math.pow(10, n)) / Math.pow(10, n);
    //return value.toFixed(2)
    return value
  },
  B: (val) => {
    return '<b>' + val + '</b>';
  },
  BI: (val) => {
    return '<b><i>' + val + '</i></b>';
  },
  tr: (val, colspan) => {
    return '<tr><td style="text-align:left" colspan="' + colspan + '">' + val + '</td></tr>'
  },
  ccellsFormat: cells => {

    console.log(cells);

    var wb = cells.Sheets[cells.SheetNames[0]];
    
    let bigCReg = /[^0-9]*/;
    let numReg = /[0-9].*/;
    
    let table = [];
    let cher = '';

    for (const k in wb) {
      let big = bigCReg.exec(k);
      let num = numReg.exec(k);
      if(big&&big[0]&&num&&num[0]){
        let el = wb[k];
        table[big[0]] = table[big[0]]|| [];
        table[big[0]].push(el.h);
      }
    }
    var fields = ['External Type','Material Group','Substances','CAS Number','Mass(%)','Mass Percentage in Leaf (%)','Mass(mg)'];
    var tofields = [
      'External_Type',
      'Material_Group',
      'Substances',
      'CAS_Number',
      'Mass',
      'Mass_Percentage_in_Leaf',
      'Massmg'
    ]
    var keys = [];
    var new_cells = [];
    table = Object.keys(table).map(function(e) {
      return table[e]
    })
    table.forEach((tr2,j)=>{
      table[0].forEach((tr,i)=>{
        new_cells[i] = new_cells[i] || [];
        new_cells[i].push(tr2[i]);
      })
    })

    var newnew_cells = [];
    new_cells[0].forEach((el,i)=>{
      fields.forEach((el2,i2)=>{55
        if(el==el2){
          keys[tofields[i2]] = i;
        }
      })
    })

    let cher_key = keys['External_Type'];

    new_cells.forEach((el,i)=>{
      if(el[cher_key]){
        cher = el[cher_key];
      }else{
        el[cher_key] = cher;
      }
      if(i>0){
        let tr = {};
        for (const key in keys) {
          tr[key] = el[keys[key]]
        }
        newnew_cells.push(tr);
      }
    })
    
    cells = newnew_cells;

    new_cells = []
    new_cells[0] = []
    let exist_fields = [
      'External_Type',
      'Mass',
      'Mass_Percentage_in_Leaf',
      'Massmg'
    ]
    let hide_fields = ['typeid', 'Leaf_Key_Identifier']
    jQuery.getScript("https://cdnjs.cloudflare.com/ajax/libs/core-js/2.4.1/core.min.js")
    new_cells[0].push('External_Type')
    for (const key in cells[0]) {
      if (!exist_fields.includes(key) && !hide_fields.includes(key)) {
        new_cells[0].push(key)
      }
    }

    new_cells[0] = new_cells[0].concat([
      'Mass',
      'Mass_Percentage_in_Leaf',
      'Massmg'
    ])

    let External_Type_Flag = 0
    let cell_totals = {
      Mass: 0,
      Mass_Percentage_in_Leaf: 0,
      Massmg: 0
    }
    let all_totals = {
      Mass: 0,
      Mass_Percentage_in_Leaf: 0,
      Massmg: 0
    }
    let group_length = 0

    cells.forEach((el, i) => {
      let cell = []

      if (i === 0) {
        group_length = 1
        cell.push(_.B(el.External_Type))
        External_Type_Flag = el.External_Type
      } else {
        if (External_Type_Flag != el.External_Type) {
          new_cells.push([
            [new_cells[0].length - 3, _.BI('Subtotal')],
            _.BI(_.roundFun(cell_totals.Mass, 2)),
            _.BI(_.roundFun(cell_totals.Mass_Percentage_in_Leaf, 2)),
            _.BI(_.roundFun(cell_totals.Massmg, 2))
          ])
          cell_totals = {
            Mass: 0,
            Mass_Percentage_in_Leaf: 0,
            Massmg: 0
          }
          group_length = 1
          cell.push(_.B(el.External_Type))
          External_Type_Flag = el.External_Type
        } else {
          group_length++
          cell.push('')
        }
      }

      cell_totals.Mass = NP.plus(cell_totals.Mass, el.Mass);
      cell_totals.Mass_Percentage_in_Leaf = NP.plus(cell_totals.Mass_Percentage_in_Leaf, el.Mass_Percentage_in_Leaf);
      cell_totals.Massmg = NP.plus(cell_totals.Massmg, el.Massmg);
      console.log("cell:"+cell_totals.Massmg)
      all_totals.Mass = NP.plus(all_totals.Mass, el.Mass);
      all_totals.Mass_Percentage_in_Leaf = NP.plus(all_totals.Mass_Percentage_in_Leaf, el.Mass_Percentage_in_Leaf);
      all_totals.Massmg = NP.plus(all_totals.Massmg, el.Massmg);
      console.log("all:"+all_totals.Massmg)
      // cell_totals.Mass += el.Mass
      // cell_totals.Mass_Percentage_in_Leaf += el.Mass_Percentage_in_Leaf
      // cell_totals.Massmg += el.Massmg
      // all_totals.Mass += el.Mass
      // all_totals.Mass_Percentage_in_Leaf += el.Mass_Percentage_in_Leaf
      // all_totals.Massmg += el.Massmg
      
      new_cells[0].forEach(key => {
        if (!exist_fields.includes(key) && !hide_fields.includes(key)) {
          if (el[key]) {
            key === 'Substances' && (el[key] = _.B(el[key]))
            cell.push(el[key])
          } else {
            cell.push('')
          }
        }
      })

      cell = cell.concat([
        _.roundFun(el.Mass, 2),
        _.roundFun(el.Mass_Percentage_in_Leaf, 2),
        _.roundFun(el.Massmg, 2)
      ])
      
      new_cells.push(cell)

      if (i === cells.length - 1) {
        new_cells.push([
          [new_cells[0].length - 3, _.BI('Subtotal')],
          _.BI(_.roundFun(cell_totals.Mass, 2)),
          _.BI(_.roundFun(cell_totals.Mass_Percentage_in_Leaf, 2)),
          _.BI(_.roundFun(cell_totals.Massmg, 2))
        ])
        new_cells.push([
          [new_cells[0].length - 3, _.BI('Total')],
          _.BI(_.roundFun(all_totals.Mass, 2)),
          _.BI(_.roundFun(100, 2)),
          _.BI(_.roundFun(all_totals.Massmg, 2))
        ])
      }
    })

    var htmlStr = '<table><thead><tr>'
    var header = new_cells.shift()
    header.forEach(o => {
      htmlStr += `<th>${o}</th>`
    })
    htmlStr += '</tr></thead><tbody>'
    new_cells.forEach(row => {
      htmlStr += '<tr>'
      if (row.length === header.length) {
        row.forEach(o2 => {
          htmlStr += `<td>${o2}</td>`
        })
      } else {
        htmlStr += `<td colspan="${row[0][0]}" >${row[0][1]}</td>`
        htmlStr += `<td>${row[1]}</td>`
        htmlStr += `<td>${row[2]}</td>`
        htmlStr += `<td>${row[3]}</td>`
      }
      htmlStr += '</tr>'
    });
    $(".notes p").toArray().forEach((el) => {
      htmlStr += _.tr($(el).html(), header.length);
    })
    htmlStr += '</tbody></table>'
    return htmlStr
  },
  chinaRoshInformationcellsFormat: cells => {
    let new_cells = [];
    new_cells[0] = []

    for (const key in cells[0]) {
      new_cells[0].push(key)
    }


    cells.forEach((el, i) => {
      let cell = [];
      for (const key in el) {
        cell.push(el[key]);
      }
      new_cells.push(cell);
    })

    new_cells.forEach((el, i) => {
      if (el.length === 1) {
        new_cells[i] = [
          [new_cells[0].length, el[0]]
        ]
      }
    })

    console.log(new_cells)


    var htmlStr = '<table class="crh" ><thead><tr>'
    var header = new_cells.shift()
    header.forEach(o => {
      htmlStr += `<th>${o}</th>`
    })
    htmlStr += '</tr></thead><tbody>'
    new_cells.forEach(row => {
      htmlStr += '<tr>'
      if (row.length === header.length) {
        row.forEach(o2 => {
          htmlStr += `<td>${o2}</td>`
        })
      } else {
        htmlStr += `<td colspan="${row[0][0]}" >${row[0][1]}</td>`
      }
      htmlStr += '</tr>'
    })
    htmlStr += '</tbody></table>'
    return htmlStr
  }
}

export default _
