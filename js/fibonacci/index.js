const fibonacci = ( () => {
    const cache = {};
  
    return num => {
      if (num < 2) {
        return num;
      }
  
      if (cache[num]) {
        return cache[num]
      }
  
      const result = fibonacci(num - 1) + fibonacci(num - 2);
      cache[num] = result;
      return result;
    };
})
  
const fibonacci = num => {
    if (num < 2) {
        return num;
    }
  
    return fibonacci(num - 1) + fibonacci(num - 2)
}