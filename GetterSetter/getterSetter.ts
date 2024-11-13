class Papa {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  get GetName(): string {
    return this.name;
  }

  get GetAge(): number {
    return this.age;
  }

  set SetName(name: string) {
    this.name = name;
  }

  set SetAge(age: number) {
    this.age = age;
  }
}
let CanDen = new Papa('Chandra Shekhar Saini', 20);
console.log(CanDen);
//Using Getter to Get Value
console.log('Calling Getter:', CanDen.GetAge);//20
//Using Setter to Set Value
CanDen.SetAge = 90;
console.log('Calling Getter:', CanDen.GetAge);//90
