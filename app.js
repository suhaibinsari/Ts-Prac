console.log("Hello Bhaya!!!!New updates");
function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase, result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 5.4;
var printResult = true;
var resultPhase = "Result is:";
add(number1, number2, printResult, resultPhase);
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
})(Role || (Role = {}));
;
var person = {
    name: "Suhaib",
    age: 23,
    hobbies: ["Chai-Wala", "Goal-appy"],
    role: Role.ADMIN
};
console.log(person);
if (person.role === Role.ADMIN) {
    console.log("is admin");
}
function combine(input1, input2, input3) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString() + input3.toString();
    }
    return result;
}
var combinenum = combine(20, 30);
console.log(combinenum);
var combinenam = combine("Suhaib", "<3", "Adeen");
console.log(combinenam);
