
function work(fn){
  var sheet = SpreadsheetApp.openById("197b40m1Y2WiFNEleVmFLEtVeiGZMjlYOBtE2fBDNbMM");
  var shift = sheet.getSheetByName("12月(光通信)  ");
  var range = shift.getDataRange().getValues();
  var date = new Date();
  console.log(range)
  console.log(date)

function findRow(shift,date,col){
  var lastRow = shift.getDataRange().getLastRow();
  for(var i=1;i<=lastRow;i++){
    if(shift.getRange(0,i).getValue === date){
      return values[2][i];
    }
  }

  }
  
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

