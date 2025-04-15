// Generics :- let you write reusable, flexible, and type-safe code by allowing types to be parameters.
//Types of another type.

function identity<T>(arg: T): T {            //T is type here.
  return arg;
}

const fruits : Array<string> = [];
fruits.push("Manogo", "Apple");
console.log(fruits);

function getData<T>(array : T[]):T{
  return array[0]
}

const number = [1,2,3,4,5];
const firstNumber = getData(number);

console.log(firstNumber);

const strings = ["Ravi" , "Art"];
const firstString = getData(strings);
console.log(firstString)
