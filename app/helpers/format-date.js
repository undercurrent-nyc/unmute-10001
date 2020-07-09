import { helper } from '@ember/component/helper';

export default helper(function formatDate(date) {
  const dateTimeFormat = new Intl.DateTimeFormat("en", { month: "numeric", day: "2-digit" });
  const [{ value: month },,{ value: day }] = dateTimeFormat.formatToParts(Date.parse(date)) ;
  console.log(month, day);
  return `${month}/${day}`;
});
