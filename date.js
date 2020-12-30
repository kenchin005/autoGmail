const values = SpreadsheetApp.getActiveSheet().getDataRange().getValues();
var ary = ['日','月','火','水','木','金','土'];


for(i=1,y=0;i<=31;i++,y++){
    values[0][0] = "2021/1/i(y)"
    if(y=6){
        y=0
    }
}