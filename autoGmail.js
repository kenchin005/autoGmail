var spreadsheet = SpreadsheetApp.openById("197b40m1Y2WiFNEleVmFLEtVeiGZMjlYOBtE2fBDNbMM");
var sheet = spreadsheet.getSheetByName("12月(光通信)  ");
var lastrow = sheet.getLastRow();
var values = sheet.getDataRange().getValues();

let today = new Date();

today = Utilities.formatDate(today,"JST", "yyyy/MM/dd");


function createDraft(time) {

  // switch(todays.match(DOW)){
  //   case "火":
  //   values[5][1] === "《出勤打刻時間》11:00";
  //   break;
  
  //   case "水":
  //   if()  
    
  // }
//悩み中1216




const values = SpreadsheetApp.getActiveSheet().getDataRange().getValues();
const to = values[1][1]; 
const subject = values[3][1];

const option = {
cc:values[2][1]
};

console.log(values[5][1])
values[5][1] = time;
console.log(values[5][1])

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

}


function createDraftOotsuka(sheet,today,col){

var ary = ['日','月','火','水','木','金','土'];
var today = new Date();
var weekNum = today.getDay();
var week = '('+ary[weekNum]+')';

today = Utilities.formatDate(today,"JST", "yyyy/MM/dd");
var todays = today+week
console.log(todays)

  for(var i=1;i<=31;i++){
          if(values[i][0] === todays){
            console.log(values[i][2]);
               
            switch(values[i][2]){
                   
                  case "出勤":
                  console.log("作成します");
                  if(todays.match("火"||"木")){
                    createDraft("《出勤打刻時間》10:30")
                  }else{
                    createDraft("《出勤打刻時間》11:00");
                  }
              
               　　break;
                   
              
                
                　case "研修":
                  console.log("研修作成します");
               　　break;
                   
                  case "公休":
                  console.log("作成しません");
                  break;
                  default:

      　　　　}
            
            
          }
    
  }
};