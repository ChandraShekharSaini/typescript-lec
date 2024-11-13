// let variableName: type = value;
// let variableName: type = value;

let Person: string = 'Chandra';
let num: number = 12;
let flag: boolean = true;
let arr: string[] = ['a', 'b', 'c', 'd', 'e'];
let num2: number[] = [1, 2, 3, 4, 5];

let person: {
  name: boolean;
  age: number;
  flg: true;
};

person = {
  name: true,
  age: 34,
  flg: true,
};
console.log(person);

let greeting = function (name: string) {
  return `Hi ${name}`;
};
let data = greeting(890);
console.log(data)



let bin = 0b100;
console.log(bin)

let octal: number = 0o10;
console.log(octal)

let hex: number = 0xA;
console.log(hex)

let big: bigint = 9007199254740991n;
console.log(bin)

let firstName: string = 'John';
console.log(firstName)

let vacation : {} = {}
console.log(vacation.toString())

let bnm :{}
