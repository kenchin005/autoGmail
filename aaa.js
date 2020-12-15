
function findRow(sheet,today,col){

  var today = new Date();
  today = Utilities.formatDate(today,"JST", "yyyy/MM/dd");
  console.log(today)
  
    for(var i=1;i<=31;i++){
            if(values[i][0] === today){
              console.log(values[i][1]);
                 
              switch(values[i][1]){
                     
                    case "出勤":
                    console.log("作成します")
                    
                    
  
                      const values = SpreadsheetApp.getActiveSheet().getDataRange().getValues();
                      const to = values[1][1]; 
                      const subject = values[3][1];
                    
                      const option = {
                      cc:values[2][1]
                      };
                    
                      let body = '';
                    
                      body += values[4][1] ;
                      body += values[5][1] ;
                      body += values[6][1] ;
                      body += values[7][1] ;
                      body += values[8][1] ;
                      body += values[9][1] ;
                      body += values[10][1] ;
                      body += values[11][1] ;
                      body += values[12][1] ;
                      body += values[13][1];
                    
                    
                    
                      GmailApp.createDraft(to,subject,body,option);
                    
                    
                 break;
                     
                     
                    case "公休":
                    console.log("作成しません")
                    break;
                    default:

        　　　　}
              
              
            }
      
    }
};