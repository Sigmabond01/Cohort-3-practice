let x: number = 1; //defining types in ts
//this is type inferencing
//high level benefit of typescript. It lets you catch type errors at compile time
console.log(x);

//14.1
function greet(user: {
    //takes argument of an input which is an object
    name: string;
    age: number;
}) {
    console.log("Hello " + user.name);
}

let user = {
    name: "random",
    age: 21
}
//this happens implicitly

greet(user);

//14.2
//these are primitive types (bool, num, etc..)
function isEven(num: number): boolean {
    if(num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

