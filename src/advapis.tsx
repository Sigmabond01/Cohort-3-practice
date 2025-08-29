//Pick allows you to create a new type by selecting a set of properties (Keys) from an existing type (Type).
interface User {
  id: number;
  name: string;
  age: number;
  email: string;
  passoword: string;
}

type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

//Partial makes all properties of a type optional, creating a type with the same properties, but each marked as optional.
//just add a ? to your objects
//Specifically useful when you want to do updates
type UpdatePropsOptional = Partial<UpdateProps>

function updateUser(updatedProps: UpdatePropsOptional) {
    //hit the db to update user
}
updateUser({})
// For a profile display, only pick `name` and `email`
type UserProfile = Pick<User, 'name' | 'email'>;

const displayUserProfile = (user: UserProfile) => {
  console.log(`Name: ${user.name}, Email: ${user.email}`);
};

//When you have a configuration object that should not be altered after initialization,
// making it Readonly ensures its properties cannot be changed.
interface Config {
  readonly endpoint: string;
  readonly apiKey: string;
}

const config: Readonly<Config> = {
  endpoint: 'https://api.example.com',
  apiKey: 'abcdef123456',
};

// config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.
//This is compile time checking, not runtime (unlike const)

//Record let’s you give a cleaner type to objects
//you can use type as follows
{ /*
  interface User {
  id: string;
  name: string;
}

type Users = { [key: string]: User };

const users: Users = {
  'abc123': { id: 'abc123', name: 'John Doe' },
  'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};
*/ }
//or use record
interface User {
  id: string;
  name: string;
}

type Users = Record<string, User>;

const users: Users = {
  'abc123': { id: 'abc123', name: 'John Doe' },
  'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};

console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }

//maps gives you an even fancier way to deal with objects. Very similar to Maps in C++
interface User {
  id: string;
  name: string;
}

// Initialize an empty Map
const usersMap = new Map<string, User>();

// Add users to the map using .set
usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });

// Accessing a value using .get
console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }

//exclude
//In a function that can accept several types of inputs but you want to exclude specific types from being passed to it.
type Event = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<Event, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK