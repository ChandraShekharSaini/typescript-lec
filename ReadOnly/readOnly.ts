class Data {
  readonly phone: string = 'Mobile Data';

  constructor(phone:string) {
    this.phone = phone;
  }
}

let MData = new Data('Apple');
//error : Cannot assign to 'phone' because it is a read-only
MData.phone = "HTC"
console.log(MData.phone)
