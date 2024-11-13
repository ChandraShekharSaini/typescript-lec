class Car {
  protected name;
  protected company;

  constructor(name: string, company: string) {
    this.name = name;
    this.company = company;
  }

  getCar() {
    console.log(`Car company${this.company}+Car name${this.name}`);
  }
}

class ElectricCar extends Car {
  flag: boolean;
  constructor(name: string, company: string, flag: boolean) {
    super(name, company);

    this.flag = flag;
  }
}
let myCar = new ElectricCar('xuv', 'BMW', true);
//  console.log(myCar.name);// protected variable can only access by sub class
// The protected modifier allows access within the same class and subclasses.
console.log(myCar)

