// Function to calculate the area of a rectangle
function calculateRectangleArea(length, width) {
    return length * width;
}

// Function to calculate the perimeter of a rectangle
function calculateRectanglePerimeter(length, width) {
    return 2 * (length + width);
}

// Function to calculate the area of a circle
function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
}

// Function to calculate the area of a triangle
function calculateTriangleArea(base, height) {
    return 0.5 * base * height;
}

// Area and perimeterof a rectangle
const rectangleLength = 5;
const rectangleWidth = 3;
const rectangleArea = calculateRectangleArea(rectangleLength, rectangleWidth);
const rectanglePerimeter = calculateRectanglePerimeter(rectangleLength, rectangleWidth);
console.log("The area of the rectangle is: " + rectangleArea);
console.log("The perimeter of the rectangle is: " + rectanglePerimeter);

// Area of  a circle
const circleRadius = 14;
const circleArea = calculateCircleArea(circleRadius);
console.log("The area of the circle is: " + circleArea);

// Area of a triangle
const triangleBase = 10;
const triangleHeight = 8;
const triangleArea = calculateTriangleArea(triangleBase, triangleHeight);
console.log("The area of the triangle is: " + triangleArea);

