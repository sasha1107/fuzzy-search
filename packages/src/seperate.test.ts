import { expect, test } from '@jest/globals';

import { seperate } from '.';

describe('초성, 중성, 종성이 모두 있는 경우', () => {
  test('"뷁"이 입력으로 주어진 경우', () => {
    expect(seperate('뷁')).toEqual({
      first: 'ㅂ',
      middle: 'ㅞ',
      last: 'ㄺ',
    });
  });
  test('"힣"이 입력으로 주어진 경우', () => {
    expect(seperate('힣')).toEqual({
      first: 'ㅎ',
      middle: 'ㅣ',
      last: 'ㅎ',
    });
  });
});
describe('종성이 없는 경우', () => {
  test('"아"가 입력으로 주어진 경우', () => {
    expect(seperate('아')).toEqual({
      first: 'ㅇ',
      middle: 'ㅏ',
      last: '',
    });
  });
});
describe('초성만 있는 경우', () => {
  test('"ㅁ"이 입력으로 주어진 경우', () => {
    expect(seperate('ㅁ')).toEqual(null);
  });
});
describe('한 글자가 아닌 입력이 주어진 경우', () => {
  test('"아아"가 입력으로 주어진 경우', () => {
    expect(seperate('아아')).toBe(null);
  });
});

describe('한글이 아닌 경우', () => {
  test('"s"가 입력으로 주어진 경우', () => {
    expect(seperate('s')).toBe(null);
  });
});
