class PersonN {
    private ssn: string;
    private firstName: string;
    private lastName: string;

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
  
    constructor(ssn: string, firstName: string, lastName: string) {
      this.ssn = ssn;
      this.firstName = firstName;
      this.lastName = lastName;
    }
     
  }

let dataB = new PersonN("Mr","babu","sona");
// console.log(dataB.firstName) //error
console.log(dataB)