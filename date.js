function shift() {
    const values = SpreadsheetApp.getActiveSheet().getDataRange().getValues();
    var ary = ['金','土','日','月','火','水','木'];
    
    
    for(i=1,y=0,t=4;i<=31;i++,y++,t++){
        if(y>6){
            y=0
        }
      var week = "("+ary[y]+")"
      values[1][t] = "2021/1/"
      values[1][t] += i
      values[1][t] += week
      console.log(values[1][t])
    
    }
    
    }