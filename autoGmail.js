function createDraft() {
  
  const values = SpreadsheetApp.openById('1-HzZt_NCq64UuSutkfQhhhgP__qdwjMkzQ-NpQiIlXM').getDataRange().getValues();
  const to = values[1][1]; 
  const cc = values[2][1];
  const subject = values[3][1];

  let body = '';

  body += values[4][1] + 'nn';
  body += values[5][1] + 'nn';
  body += values[6][1] + 'nn';
  body += values[7][1] + 'nn';
  body += values[8][1] + 'nn';
  body += values[9][1] + 'nn';
  body += values[10][1] + 'nn';
  body += values[11][1] + 'nn';
  body += values[12][1] + 'nn';
  body += values[13][1];



  GmailApp.createDraft(to,cc,subject,body);

}
