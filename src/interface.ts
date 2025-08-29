//14.2
//for a user
 const user = {
    firstName: "Singh",
    lastname: "Damn",
    email: "Random123@gmail.com",
    age: 21,
 }
 //here, we are assigning types to objects where objects are firstName,age, and all that
 //So, to assign a type to objects, you can use interfaces
 interface User {
	firstName: string;
	lastName: string;
	email: string;
	age: number;
}
//Create a function isLegal that returns true or false if a user is above 18. It takes a user as an input.
function isLegal(user: User) {
    if(user.age > 18) {
        return true;
    } else {
        return false;
    }
}
//supposed you have a person interface
interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}
//now, you can create a class which uses this interface
class Employee implements Person {
    //here, the class employee implements the person interface
    name: string;
    age: number;

    constructor(n: string, a: number) {
        //observe all of this and you should be able to undestand it
        //look at the syntax carefully, and compare it
        this.name = n;
        this.age = a;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}