/*
  Responsible for dealing with event listners
*/
import * as Main from './main';

chrome.extension.onMessage.addListener((request) => {
  console.log(request);
  switch (request.type) {
    case 'getDataFromBackground':
      Main.getData(request.query);
      break;
    case 'saveDataInBackground':
      Main.saveData(request.data);
      break;
    case 'sendAjaxRequest':
      Main.sendAjaxRequest('https://reqres.in/api/users');
      break;
    default:
      console.warn('Invalid request type', request.type);
  }
});
