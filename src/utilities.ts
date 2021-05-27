const describe = (message, callback) => {
  console.log(`* ${message}`);
  callback();
};

const it = (message, callback) => {
  console.log(`- ${message}`);
  callback();
};

const expect = (actual) => {
  return {
    toBe: (expected) => {
      const res = expected === actual;
      console.log(`expected = ${expected} actual = ${actual}`);
      if (res) {
        console.log('passed');
      } else {
        console.log('failed');
      }
      return res;
    },
  };
};

export { describe, it, expect };
