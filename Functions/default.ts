// Notice that you cannot include default
// parameters in function type definitions.
// The following code will result in an error
// let bnm: (am: string, bn: string = 90) => string;

//Default argument
function cal(a: number, b: number=8): number {
  return a + b;
}
console.log(cal(21));
