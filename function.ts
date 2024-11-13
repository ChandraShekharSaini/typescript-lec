function sum(a: number, b: number): number {
  return a + b;
}

let data = sum(9, 12);
console.log(data);

function subtract(num1: number, num2: number): void {
  //bec subtract function is not returning any value
  //so use void keyword to indicate that it does not return any value
  console.log('I am Good', num1 - num2);
}
subtract(12, 1);

let vbn1: (nm: number, bn: number) => number;
vbn1 = function (x, y) {
  
  return "nmm";
};
console.log(vbn1(1, 3));
