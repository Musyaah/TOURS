function calculate(num1, num2, operation) {
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
  }
  
  // Calculator:
  console.log(calculate(10, 5, '+')); // 15
  console.log(calculate(10, 5, '-')); // 5
  function calculate(num1, num2, operation) {
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
  }
  
  console.log(calculate(10, 5, '+')); // 15
  console.log(calculate(10, 5, '-')); // 5

  
    