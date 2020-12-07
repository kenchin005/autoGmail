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