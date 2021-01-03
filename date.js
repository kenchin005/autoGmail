function shift() {
    const values = SpreadsheetApp.getActiveSheet().getDataRange().getValues();
    var ary = ['金','土','日','月','火','水','木'];
    
    
    for(i=1,t=4;i<=31;i++,t++){
        if(y>6){
            y=0
        }

      var date = new Date(2021,1,i);
      var day = date.getDay();

      var week = "("+ary[day]+")"
      values[1][t] = "2021/1/"
      values[1][t] += i
      values[1][t] += week
      console.log(values[1][t])
    
    }
    
    }