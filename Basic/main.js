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
