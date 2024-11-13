let num :any;
num=1;
console.log(num)

num="113"
console.log(num)


const json = `{"latitude": 10.11, "longitude":12.12}`;

// parse JSON to find location
const currentLocation = JSON.parse(json);
console.log(currentLocation.latitude);