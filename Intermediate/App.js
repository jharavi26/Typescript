// Generics :- let you write reusable, flexible, and type-safe code by allowing types to be parameters.
//Types of another type.
function identity(arg) {
    return arg;
}
var fruits = [];
fruits.push("Manogo", "Apple");
console.log(fruits);
function getData(array) {
    return array[0];
}
var number = [1, 2, 3, 4, 5];
var firstNumber = getData(number);
console.log(firstNumber);
var strings = ["Ravi", "Art"];
var firstString = getData(strings);
console.log(firstString);
