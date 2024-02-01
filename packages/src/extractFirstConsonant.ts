import { seperate } from '.';

const extractFirstConsonant = (str: string) => {
  const splitted = str.split('');
  return splitted
    .map((char) => {
      const seperated = seperate(char);
      if (seperated === null) return null;
      return seperated.first;
    })
    .filter(Boolean);
};

export default extractFirstConsonant;
