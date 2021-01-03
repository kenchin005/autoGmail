function shift() {
  const values = SpreadsheetApp.getActiveSheet().getDataRange().getValues();
  var sh = SpreadsheetApp.getActiveSheet();
  var lRow = sh.getDataRange().getLastRow();
  var lRow2 = lRow;
  var ary = ['日','月','火','水','木','金','土'];
  
  
  for(i=1,t=0;i<=31;i++,t++){


    var date = new Date(2021,1-1,i);
    var day = date.getDay();
   
    

    var week = "("+ary[day]+")"
    values[1][t] = "2021/1/"
    values[1][t] += i
    values[1][t] += week
    console.log(values[1][t])
    sh.getRange(i+1,1).setValue(values[1][t]);
  
  }
//  sh.getRange(1+lRow,1,lRow2,3).setValues(values);

  
  }