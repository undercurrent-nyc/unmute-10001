import { helper } from '@ember/component/helper';

export default helper(function formatDate(date) {
  let month = date[0].getMonth() + 1;
  let day = date[0].getDate();
  if(month <= 9) {
    month = "0" + month;
  }
  if(day <= 9) {
    day = "0" + day;
  }

  return `${month}/${day}`;
});
