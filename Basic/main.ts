function addNumber(num1 : number, num2 : number) : number {
  return num1+num2;
}
console.log(addNumber(10,21));

//Basic three DataTypes 

let age : number = 21;
let isboolean : boolean = true;
let firstName : string = "Ravikumar";

console.log(`${age}, ${firstName} , ${isboolean}`)

let numbers: number[] = [1, 2, 3];
let names: string[] = ["Ravi", "Sam"];
let user: [string, number] = ["Ravi", 25];              //Tuple = fixed number of elements with known types.

console.log(`${numbers}, ${names} , ${user}`)

enum Role { Admin, User, Guest }                //Enus useful for name constants

let myRole: Role = Role.Guest;

console.log(myRole);

let data : any = "Ravi"       //Disables type checking — avoid if possible.
data = true;

console.log(data);

function logMessage(): void {            //function does something but doesn’t return anything
  console.log("Usecase of Void");
}

logMessage();

//Any, never & void 

//Arrow function with typescript 

type AddFn = (x: number, y: number) => number;

const add: AddFn = (a, b) => a * b;

console.log(add(4,5));


//Object Implementation 
type Address = {
  city: string;
  zip: number;
};

type Employee = {
  name: string;
  address: Address;
  skills : string[];
  Degree?: number[];        //Use ? to indicate that a property is optional.
};

//Type alias :-A Type Alias is a way to give a name to a specific type so you can reuse it.

const emp: Employee = {            //emp is a type alias. 
  name: "Ravi",    
  skills : ["React", "Redux"],
  address: {
    city: "Mumbai",
    zip: 400001
  }
};

console.log(emp?.address?.city);
console.log(emp);

//Union := | -> Pipe in typescript
//a union type allows a variable to hold more than one type of value.

function mul(x1 : number | string, x2 : number | string ) : number | string{
  let result;
  if(typeof x1 === "number" && typeof x2 === "number" ){
    return x1+x2;
  }
  else{
    result = x1.toString() + x2.toString();
  }
  return result;
}
console.log(mul(5,4));
console.log(mul("ravi","art"))

// Literal Types :- Literal types allow you to specify exact values a variable can hold.

type Status = "success" | "error";

function handleStatus(status: Status) {
  if (status === "success") {
    console.log("Operation was successful!");
  } else {
    console.log("Something went wrong.");
  }
}
console.log(handleStatus("success"));

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const john = new Person("Ravikumar", 30);
john.greet(); // Hello, my name is John and I am 30 years old.


//Use readonly to make a property immutable after initialization.

//Shortcut in constructore 

class Book {
  readonly title: string;

  constructor(title: string) {
    this.title = title;
  }
}

const myBook = new Book("Atomic Habits");
console.log(myBook);
// myBook.title = "Another Book"; ❌ Error


class Student {
  constructor(public name: string, public age: number) {}

  info(): void {
    console.log(`${this.name} is ${this.age} years old.`);
  }
}

const s = new Student("Art", 22);
s.info();

//Interface :- An interface in TypeScript is used to define the shape of an object. It specifies the structure (properties, methods, types), but does not provide implementation. Property can be seprated by semi-colon.

interface Person2{
  name : string;
  age : number;
  greeting(text:string) : void
}

let user3 : Person2;

user3 = {
  name : "Ravi",
  age : 27,
  greeting(text) : void{
    console.log(`${text} & ${this.name}`)
  }
}

console.log(user3);




