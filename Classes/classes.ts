class Person {
  firstname: string;
  lastname: string;

  getFullName(): string {
    return this.firstname + this.lastname;
  }

  constructor(firstname: string, lastname: string) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

}

let dataM = new Person('Chandra', 'shekhar');
console.log(dataM.getFullName())

