// yarn init -y 
// yarn add typescript -D
// yarn add ts-node -D
// npx tsc --init


let username: string = "Sid";

let hasLoggedIn: boolean = true;

let myNumber: number = 77;

let myRegex: RegExp = /foo/;

const names: string[] = username.split(" ");
const myValues: Array<number> = [1, 2, 3];

interface Person {
    first: string;
    last: string;
}
const myPerson: Person = {first: "Sid", last: "Mis"};

const ids: Record<number, string> = {
    10: "a",
    20: "b"
}
ids[30] = "c";

[1,2,3].forEach((v) => console.log(v));
const out1: number[] = [1,2,3].map((v) => v * 10);
const out2: string[] = [1,2,3].map((v) => `${v * 10}`);