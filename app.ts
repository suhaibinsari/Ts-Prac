console.log("Hello Bhaya!!!!New updates");

function add(n1: number, n2: number, showResult: Boolean, phrase: String){
const result = n1 + n2;
if(showResult){
console.log(phrase, result);
}
else{
    return result;
}
}

const number1 = 5;
const number2 = 5.4;
const printResult = true;
const resultPhase = "Result is:";
add(number1, number2, printResult, resultPhase);

enum Role {ADMIN, AUTHOR, READ_ONLY};


const person = {
    name: "Suhaib",
    age: 23,
    hobbies: ["Chai-Wala", "Goal-appy"],
    role: Role.ADMIN
}

console.log(person);
if(person.role === Role.ADMIN){
    console.log("is admin");
    
}   


function combine (input1: number | string, input2: number | string, input3: number | string){
    let result;
if(typeof input1 === 'number' && typeof input2 === 'number'){
    result = input1 + input2;
}else{
    result = input1.toString() + input2.toString() + input3.toString();
}
    
    return result;
}
const combinenum=combine(20, 30);
console.log(combinenum);
const combinenam = combine("Suhaib","<3", "Adeen");
console.log(combinenam);
