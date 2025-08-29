//14.2
//Very similar to interfaces , types let you aggregate data together
type User = {
	firstName: string;
	lastName: string;
	age: number
}

//unions
//Let’s say you want to print the id of a user, which can be a number or a string.
type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}

printId(101); // ID: 101
printId("202"); // ID: 202

//intersection
//What if you want to create a type that has every property of multiple types/ interfaces
type Employee = {
  name: string;
  startDate: Date;
};

type Manager = {
  name: string;
  department: string;
};

type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
  name: "leaderguy",
  startDate: new Date(),
  department: "Software engineer"
};

//note that interfaces does not allow this to happen
