import {
  FIRST_CONSONANT,
  MIDDLE_VOWL,
  LAST_CONSONANT,
  UNICODE_KOREAN_START,
  COMBINATION_FACTOR,
  UNICODE_KOREAN_END,
} from './constants';

const seperate = (str: string) => {
  const uni = str.charCodeAt(0) - UNICODE_KOREAN_START;

  if (uni < 0 || uni > UNICODE_KOREAN_END - UNICODE_KOREAN_START) return null;
  if (str.length !== 1) return null;

  const first = ~~(uni / COMBINATION_FACTOR);
  const middle = ~~((uni - first * COMBINATION_FACTOR) / LAST_CONSONANT.length);
  const last = ~~(uni % LAST_CONSONANT.length);

  return {
    first: FIRST_CONSONANT[first],
    middle: MIDDLE_VOWL[middle],
    last: LAST_CONSONANT[last],
  };
};

export default seperate;
