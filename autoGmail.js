
function work(fn){
  var sheet = SpreadsheetApp.openById("197b40m1Y2WiFNEleVmFLEtVeiGZMjlYOBtE2fBDNbMM");
  var shift = sheet.getSheetByName("12月(光通信)  ");
  var range = shift.getDataRange().getValues();
  var date = new Date();
  console.log(range)
  console.log(date)

function findRow(){
  const values = SpreadsheetApp.openById("197b40m1Y2WiFNEleVmFLEtVeiGZMjlYOBtE2fBDNbMM").getSheetByName("12月(光通信)  ").getDataRange().getValues();
  var lastRow = values.getLastRow();
  var date = new Date();
    for(var i=1;i<=lastRow;i++){
      if(shift2.getRange(0,i).getValue === date){
        switch(values[2][i]){
          case "出勤":
            return 1;
            break;
          case "公休":
            return 2;
            break;
          default:

        }
      }
    }
  }
  console.log(findRow());
}


function createDraft() {
  
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
}

// switch(tuesday){
 
//   case "出勤":
  
// }


// if(tuesday + wednesday){
//   if(tuesday + wednesday === 1)  {
//     tuesday = 10:30;
//   }elseif(tuesday  wednesday === 2){

//   }
// }

// https://docs.google.com/spreadsheets/d/1-EeaLnQxYxlfIbZzzwRMuwW95hRNSlFxOcWNOSx1gTk/edit?usp=sharing

