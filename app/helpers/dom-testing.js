import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';

export default helper(function domTesting([param, ...rest]) {
  return htmlSafe(`<i>Hello</i> <strong>${param}</strong>`);
});
