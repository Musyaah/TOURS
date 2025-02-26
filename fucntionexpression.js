const calculate = function(num1, num2, operation) {
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
  
  // function expression:
  console.log(calculate(10, 8, '*')); // 80
  console.log(calculate(10, 8, '/')); // 1.25
  