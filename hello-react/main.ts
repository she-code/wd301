console.log("This is a typescript file!!!");
//type alias for string
// to run ts-node fileName
//Type aliases allow you to create a new name for an existing type
type StringArray = string[];

//Interfaces, on the other hand, allow you to define a structure for an object type. 
//An interface in TypeScript is a type that defines a contract for the shape of an object.
interface User {
    name: string;
    id: number;
    isAdmin: boolean;
  }

  let newUser: User = {
    name: "Jane",
    id: 1,
    isAdmin: false
};
//  any is used when we dont know the type
let fname: any = "hello";
fname = 42;
fname = false;

//void no return value
function printHello(): void {
    console.log("Hello!");
  }

  //never absence of value and no return 
  function throwError(): never {
    throw new Error("An error occurred!");
  }

  //type annotations - to define expected input n output
  function addUser(user: User): string {
    return user.name + " added successfully";
}

//type interface- ability of the compiler to distinguish data type
//arrays
let projectID: number[] = [1, 2, 3, 4, 5];

//same as arrays but with different data type
let user: [string, string] = ["johnDoe", "mySecretPassword"];

