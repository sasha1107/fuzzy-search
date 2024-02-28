import { seperate } from '.';

const searchFirstConsonant = (arr: any[], keyword: string, objKey?: string) => {
  const keywordArr = keyword.split('');
  return arr.sort((a, b) => {
    const getConsonantCount = (str: string): number => {
      return keywordArr.reduce((count, item) => {
        const seperated = seperate(str);
        const first = seperated?.first;
        return count + (first === item ? 1 : 0);
      }, 0);
    };

    const aMatch = getConsonantCount(objKey ? a[objKey] : a);
    const bMatch = getConsonantCount(objKey ? b[objKey] : b);

    return bMatch - aMatch;
  });
};

export default searchFirstConsonant;
