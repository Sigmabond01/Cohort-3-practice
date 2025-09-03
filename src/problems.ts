//to run this file
//run "npx tsc -b"
//then "node dist/problems.js"

//14.1
function greet(firstName: string | number) { 
    //type of firstName is string OR number
    console.log("Hello" + firstName);
}
greet("Sigmabond");
//check the error you get with greet(1) when first name is string, it shows an error
//to fix that error, you can use any
//as name suggests, any is anything(special type in ts)
//you should avoid using "any" instead use OR operator


//sum
function sum(x: number, y: number) {
    return x + y;
    //ts cannot check logical errors
}
let ans = sum(1, 2);
console.log(ans);


//age as input
function isLegal(age: number) {
    if (age > 18) {
        return true;
    } else {
        return false;
    }
}

console.log(isLegal(10));


//timefunction
function delayedCall(fn: () => void) {
    //this is how you write a function as an input to another function in ts
    setTimeout(fn, 1000);
}
delayedCall(function() {
    console.log("hello");
    //if you log a number here, you have to change the type above from void to number
})