var _a;
function addNumber(num1, num2) {
    return num1 + num2;
}
console.log(addNumber(10, 21));
//Basic three DataTypes 
var age = 21;
var isboolean = true;
var firstName = "Ravikumar";
console.log("".concat(age, ", ").concat(firstName, " , ").concat(isboolean));
var numbers = [1, 2, 3];
var names = ["Ravi", "Sam"];
var user = ["Ravi", 25]; //Tuple = fixed number of elements with known types.
console.log("".concat(numbers, ", ").concat(names, " , ").concat(user));
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {})); //Enus useful for name constants
var myRole = Role.Guest;
console.log(myRole);
var data = "Ravi"; //Disables type checking — avoid if possible.
data = true;
console.log(data);
function logMessage() {
    console.log("Usecase of Void");
}
logMessage();
var add = function (a, b) { return a * b; };
console.log(add(4, 5));
//Type alias :-A Type Alias is a way to give a name to a specific type so you can reuse it.
var emp = {
    name: "Ravi",
    skills: ["React", "Redux"],
    address: {
        city: "Mumbai",
        zip: 400001
    }
};
console.log((_a = emp === null || emp === void 0 ? void 0 : emp.address) === null || _a === void 0 ? void 0 : _a.city);
console.log(emp);
//Union := | -> Pipe in typescript
//a union type allows a variable to hold more than one type of value.
function mul(x1, x2) {
    var result;
    if (typeof x1 === "number" && typeof x2 === "number") {
        return x1 + x2;
    }
    else {
        result = x1.toString() + x2.toString();
    }
    return result;
}
console.log(mul(5, 4));
console.log(mul("ravi", "art"));
function handleStatus(status) {
    if (status === "success") {
        console.log("Operation was successful!");
    }
    else {
        console.log("Something went wrong.");
    }
}
console.log(handleStatus("success"));
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Person;
}());
var john = new Person("Ravikumar", 30);
john.greet(); // Hello, my name is John and I am 30 years old.
//Use readonly to make a property immutable after initialization.
//Shortcut in constructore 
var Book = /** @class */ (function () {
    function Book(title) {
        this.title = title;
    }
    return Book;
}());
var myBook = new Book("Atomic Habits");
console.log(myBook);
// myBook.title = "Another Book"; ❌ Error
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    Student.prototype.info = function () {
        console.log("".concat(this.name, " is ").concat(this.age, " years old."));
    };
    return Student;
}());
var s = new Student("Art", 22);
s.info();
var user3;
user3 = {
    name: "Ravi",
    age: 27,
    greeting: function (text) {
        console.log("".concat(text, " & ").concat(this.name));
    }
};
console.log(user3);
//Type Guards :-Type Guards are runtime checks that narrow down the type of a variable.
// They help TypeScript understand what type a variable is at a specific point, especially when you're working with union types.
// common type Guard :- in, typeof , instanceof, Custom type Guard
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.bark = function () {
        console.log("Woof!");
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.meow = function () {
        console.log("Meow!");
    };
    return Cat;
}());
function makeSound(animal) {
    if (animal instanceof Dog) {
        animal.bark(); // ✅ TypeScript knows it's a Dog
    }
    else {
        animal.meow(); // ✅ It's a Cat
    }
}
console.log(makeSound(new Cat()));
//Type Assertions :- “This value is of this specific type”, even if TypeScript can't infer it directly.
var someValue = "hello";
// Method 1: Using `as`
var strLength = someValue.length;
// Method 2: Using angle brackets (not recommended in JSX/TSX)
var strLength2 = someValue.length;
console.log(strLength);
console.log(strLength2);
