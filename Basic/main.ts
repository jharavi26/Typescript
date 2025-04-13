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

const emp: Employee = {
  name: "Ravi",
  skills : ["React", "Redux"],
  address: {
    city: "Mumbai",
    zip: 400001
  }
};

console.log(emp?.address?.city);
console.log(emp);