type ObjectType = Record<string, string>;

const sort = ({
  arr,
  objKey,
  priority1,
  priority2,
}: {
  arr: (string | ObjectType)[];
  objKey?: string;
  priority1: RegExp;
  priority2: RegExp;
}) => {
  return arr.sort((a, b) => {
    const valueA = typeof a === 'string' ? a : (a as ObjectType)[objKey || ''];
    const valueB = typeof b === 'string' ? b : (b as ObjectType)[objKey || ''];

    const matchP1A = priority1.test(valueA);
    const matchP1B = priority1.test(valueB);

    if (matchP1A && !matchP1B) {
      return -1;
    } else if (!matchP1A && matchP1B) {
      return 1;
    }

    const matchP2A = priority2.test(valueA);
    const matchP2B = priority2.test(valueB);

    if (matchP2A && !matchP2B) {
      return -1;
    } else if (!matchP2A && matchP2B) {
      return 1;
    }

    return 0;
  });
};

export default sort;
