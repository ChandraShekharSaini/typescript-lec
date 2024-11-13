// The following example shows how to declare a
// variable that has a function type that accepts
// two numbers and returns a number
let add: (a: number, b: number) => number;

add = function (a, b) {
  return a + b;
};

let sum1 = add(12, 90);
console.log(sum1);

let nameMy: (firstname: string, lastname: string) => string=
function (firstname, lastname) {
    return firstname + lastname;
}
console.log(nameMy("chandra","shekhar"))

