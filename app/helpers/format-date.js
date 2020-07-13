import { helper } from '@ember/component/helper';

export default helper(function formatDate(date) {
  return date.toLocaleString("en-US", {
    month: "numeric",
    day: "numeric",
  });
});
