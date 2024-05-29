function expect(value) {
    return {
      toBe: (exp) => {
        if (value === exp) {
          console.log(`Success.`)
        } else {
          console.error(`Value is ${value}, but expected ${exp}`)
        }
      }
    }
  }
  
  const sum = (a, b) => a + b;
  // const sum = (a, b) => a + b + 1;
  const pow = (a, b) => a * b;
  
  const nativeNull = () => null;
  
  // expect(sum(41, 1)).toBe(42);
  
  module.exports = { sum, nativeNull };
  