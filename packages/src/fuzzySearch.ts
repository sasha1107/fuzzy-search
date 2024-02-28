import searchFirstConsonant from './searchFirstConsonant';
import { FIRST_CONSONANT } from './constants';
import seperate from './seperate';
import sort from './sort';

function filterByInitialConsonants(
  items: any[],
  keyword: string,
  objKey?: string
) {
  // 키워드를 초성으로 분리
  const keywordInitials = keyword.split('');

  return items.filter((item) => {
    const target = objKey ? item[objKey] : item;
    const itemInitials = target
      .split('')
      .map((char: string) => seperate(char)?.first)
      .join('');
    const reg = new RegExp(keywordInitials.join(''));
    return reg.test(itemInitials);
  });
}

const fuzzySearch = (arr: any[], keyword: string, objKey?: string) => {
  if (keyword.split('').every((item) => FIRST_CONSONANT.includes(item))) {
    const filtered = filterByInitialConsonants(arr, keyword, objKey);
    return searchFirstConsonant(filtered, keyword, objKey);
  }

  const p1 = new RegExp(`^${keyword.replace(/\\/g, '\\\\')}$`, 'i');
  const p2 = new RegExp(keyword.replace(/\\/g, '\\\\'), 'i');

  const filtered = arr.filter((origin) =>
    p2.test(objKey ? origin[objKey] : origin)
  );
  return sort({ arr: filtered, objKey, priority1: p1, priority2: p2 });
};

export default fuzzySearch;
