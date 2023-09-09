// How Edabit Works
function hello() {
  return "hello edabit.com";
}

// Return the Sum of Two Numbers
function addNumbers(a, b) {
  return a + b;
}

// Test cases
const num1 = 5;
const num2 = 10;
const sum = addNumbers(num1, num2);
console.log(`The sum of ${num1} and ${num2} is ${sum}`);

// Convert Minutes into Seconds

function convert(minutes) {
  return minutes * 60;
}

// Test cases
console.log(convert(5)); // Output: 300
console.log(convert(3)); // Output: 180
console.log(convert(2)); // Output: 120

// Return the Next Number from the Integer Passed

function addition(number) {
  return number + 1;
}

// Test cases
console.log(addition(0));  // Output: 1
console.log(addition(9));  // Output: 10
console.log(addition(-3)); // Output: -2

// Area of a Triangle
function triArea(base, height) {
  return (base * height) / 2;
}

// Test cases
console.log(triArea(3, 2));   // Output: 3
console.log(triArea(7, 4));   // Output: 14
console.log(triArea(10, 10)); // Output: 50

// Convert Age to Days
function calcAge(ageInYears) {
  return ageInYears * 365;
}

// Test cases
console.log(calcAge(65));  // Output: 23725
console.log(calcAge(0));   // Output: 0
console.log(calcAge(20));  // Output: 7300

// Buggy Code (Part 1)
function cubes(a) {
  return a ** 3;
}

// Test cases
console.log(cubes(3));  // Output: 27
console.log(cubes(5));  // Output: 125
console.log(cubes(10)); // Output: 1000

// Return the First Element in an Array
function getFirstValue(arr) {
  return arr[0];
}

// Test cases
console.log(getFirstValue([1, 2, 3]));     // Output: 1
console.log(getFirstValue([80, 5, 100]));  // Output: 80
console.log(getFirstValue([-500, 0, 50])); // Output: -500

// Power Calculator
function circuitPower(voltage, current) {
  return voltage * current;
}

// Test cases
console.log(circuitPower(230, 10)); // Output: 2300
console.log(circuitPower(110, 3));  // Output: 330
console.log(circuitPower(480, 20)); // Output: 9600

// Convert Hours into Seconds
function howManySeconds(hours) {
  return hours * 60 * 60;
}

// Test cases
console.log(howManySeconds(2));  // Output: 7200
console.log(howManySeconds(10)); // Output: 36000
console.log(howManySeconds(24)); // Output: 86400

// Maximum Edge of a Triangle
function nextEdge(side1, side2) {
  return (side1 + side2) - 1;
}

// Test cases
console.log(nextEdge(8, 10)); // Output: 17
console.log(nextEdge(5, 7));  // Output: 11
console.log(nextEdge(9, 2));  // Output: 10





