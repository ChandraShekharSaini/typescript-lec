function multiply(a: number, b: number,c?: number):number {
  //if c is not provided, it will be undefined
  if (typeof c !== 'undefined') {
    return a * b * c;
  }
  return a * b;
}

let number = multiply(1,2);//2
console.log(number)
