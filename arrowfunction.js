const calculate = (num1, num2, operation) => {
    if (operation === '+') {
      return num1 + num2;
    } else if (operation === '-') {
      return num1 - num2;
    } else if (operation === '*') {
      return num1 * num2;
    } else if (operation === '/') {
      return num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
    } else {
      return 'Invalid operation';
    }
  };
  
  console.log(calculate(20, 10, '+')); // 30
  console.log(calculate(20, 10, '-')); // 10
  