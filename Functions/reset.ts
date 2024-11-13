function rand1(num: number, ...args: number[]): number {
  console.log(num);
  console.log(args);
  return 0;
}

rand1(1, 90, 12, 3, 4);
console.log('--------------------------------------------------');
function numStr(num: number, ...args: (number | string)[]): number {
  console.log(num);
  console.log(args);
  return 0;
}
numStr(12, 34, 'string', 'file', 900);
console.log('----------------------------------------------');

export default function laptop(num: number, ...age: number[]): number {
  const total = age.reduce((acc, val) => (acc += val));
  return total;
}
