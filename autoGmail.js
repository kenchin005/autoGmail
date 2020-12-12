
function work(fn){
  var spreadsheet = SpreadsheetApp.openById("197b40m1Y2WiFNEleVmFLEtVeiGZMjlYOBtE2fBDNbMM");
  var sheet = spreadsheet.getSheetByName("12月(光通信)  ");
  var lastrow = sheet.getLastRow();
  var values = sheet.getDataRange().getValues();
  var date = new Date();
  console.log(range)
  console.log(date)

// function findRow(sheet,val,col){
//   var spreadsheet = SpreadsheetApp.openById("197b40m1Y2WiFNEleVmFLEtVeiGZMjlYOBtE2fBDNbMM");
//   var sheet = spreadsheet.getSheetByName("12月(光通信)  ");
//   var lastrow = sheet.getLastRow();
//   var values = lastrow.getDataRange().getValues();
//   var date = new Date();
//     for(var i=1;i<=31;i++){
//       if(sheet.getRange(1,i+1).getValue === date){
//         switch(values[2][i]){
//           case "出勤":
//             return 1;
//             break;
//           case "公休":
//             return 2;
//             break;
//           default:

//         }
//       }
//     }
//   }
//   console.log(findRow());
}


function findRow(sheet,val,col){
  var spreadsheet = SpreadsheetApp.openById("197b40m1Y2WiFNEleVmFLEtVeiGZMjlYOBtE2fBDNbMM");
  var sheet = spreadsheet.getSheetByName("12月(光通信)  ");
  var lastrow = sheet.getLastRow();
  var values = sheet.getDataRange().getValues();
  var date = new Date();
    for(var i=1;i<=values.length;i++){
            if(values[i][col-1] === val){
              return i+1;
      }
      return 0
    }
};

findRow(sheet,date,);



function findAll(){
  var spreadsheet = SpreadsheetApp.openById("197b40m1Y2WiFNEleVmFLEtVeiGZMjlYOBtE2fBDNbMM");
  var sheet = spreadsheet.getSheetByName("12月(光通信)  ");
  var lastrow = sheet.getLastRow();
  var values = sheet.getDataRange().getValues();
  var date = new Date();

  var textFinder = sheet.createTextFinder(date);
  var ranges = textFinder.findAll();


  for ( var i = 0; i < ranges.length; i++ ) {
    Logger.log('A1Notation = ' + ranges[i].getA1Notation()) ;
}

    // for(var i=2;i<=32;i++){
    //         if(sheet.getRange(1,i).getValue() === date){
    //           return i;
    //   }
    //   return 0
    // }
  };





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

