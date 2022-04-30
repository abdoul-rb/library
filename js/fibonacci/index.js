const fibonacci_1 = (() => {
    const cache = {};
  
    return num => {
      if (num < 2) {
        return num;
      }
  
      if (cache[num]) {
        return cache[num]
      }
  
      const result = fibonacci_1(num - 1) + fibonacci_1(num - 2);
      cache[num] = result;
      return result;
    };
})
  
const fibonacci_2 = (num) => {
    if (num < 2) {
        return num;
    }
  
    return fibonacci(num - 1) + fibonacci(num - 2)
}