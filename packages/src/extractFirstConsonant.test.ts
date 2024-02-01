import { expect, test } from '@jest/globals';
import extractFirstConsonant from './extractFirstConsonant';

describe('한글자가 주어진 경우', () => {
  test('"뷁"이 입력으로 주어진 경우', () => {
    expect(extractFirstConsonant('뷁')).toEqual(['ㅂ']);
  });
  test('"a"이 입력으로 주어진 경우', () => {
    expect(extractFirstConsonant('a')).toEqual([]);
  });
});

describe('여러 글자가 주어진 경우', () => {
  test('"바나나"가 입력으로 주어진 경우', () => {
    expect(extractFirstConsonant('바나나')).toEqual(['ㅂ', 'ㄴ', 'ㄴ']);
  });
  test('"abcde"이 입력으로 주어진 경우', () => {
    expect(extractFirstConsonant('abcde')).toEqual([]);
  });
  test('"a바나나banana우milk유"이 입력으로 주어진 경우', () => {
    expect(extractFirstConsonant('a바나나banana우milk유')).toEqual([
      'ㅂ',
      'ㄴ',
      'ㄴ',
      'ㅇ',
      'ㅇ',
    ]);
  });
});
