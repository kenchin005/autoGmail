[20-12-13 01:31:26:745 JST] 公休
[20-12-13 01:31:26:747 JST] 出勤
[20-12-13 01:31:26:749 JST] MTG
[20-12-13 01:31:26:750 JST] 出勤
[20-12-13 01:31:26:752 JST] 出勤
[20-12-13 01:31:26:753 JST] 出勤
[20-12-13 01:31:26:755 JST] 公休
[20-12-13 01:31:26:758 JST] 出勤
[20-12-13 01:31:26:760 JST] 公休
[20-12-13 01:31:26:761 JST] 出勤
[20-12-13 01:31:26:763 JST] 出勤
[20-12-13 01:31:26:764 JST] 出勤
[20-12-13 01:31:26:766 JST] 公休
[20-12-13 01:31:26:767 JST] 出勤
[20-12-13 01:31:26:768 JST] 出勤
[20-12-13 01:31:26:770 JST] 公休
[20-12-13 01:31:26:771 JST] 出勤
[20-12-13 01:31:26:772 JST] 出勤
[20-12-13 01:31:26:773 JST] 出勤
[20-12-13 01:31:26:775 JST] 公休
[20-12-13 01:31:26:776 JST] 出勤
[20-12-13 01:31:26:777 JST] 公休
[20-12-13 01:31:26:778 JST] 公休
[20-12-13 01:31:26:780 JST] 出勤
[20-12-13 01:31:26:781 JST] 出勤
[20-12-13 01:31:26:782 JST] 出勤
[20-12-13 01:31:26:784 JST] 公休
[20-12-13 01:31:26:785 JST] 出勤
[20-12-13 01:31:26:787 JST] 公休


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