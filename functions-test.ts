import addNumbers, { addStrings, printFormat, fetchData, introduce } from './functions';

console.log(addNumbers(1, 2));
console.log(addStrings("Sid"));
console.log(`${"hi"} ${printFormat("Sidd", 7)}`);
console.log(fetchData("http://learn.ts"));
console.log(introduce("Please Welcome", "Sid", "Mis"))