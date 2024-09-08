export {}

let message = 'Welcome Back';

console.log(message);
let x = 10;
const y = 20;

let sum;
const title = 'Anubhav';

// Boolean NUmber And String
// MOdule has its own scope while script has global scope


let isBeginner : boolean = true;

let name : number = 0;
let n: null = null;
let u: undefined = undefined;


let isNew : boolean = null;
let myName : string = undefined;

let list1: number[] = [1 ,2 , 3];
let list2: Array<number> = [1, 2, 3];
let person1: [string , number] = ['chris' , 22];

enum Color {Red = 5 ,Green ,Blue};

let c: Color = Color.Green;

console.log(c);

let randomValue: any =10;
randomValue = true;
randomValue = 'Vishwas';

let myVariable: unknown = 10;

function hasName(obj: any): obj is {name : string}
{
    return !!obj && typeof obj === 'object' && 'name' in obj
}


if(hasName(myVariable)){
console.log(myVariable.name);
}

(myVariable as string).toUpperCase(); // that we check the type assertion


let a;
a =10;
a =true;
let b =20;

let multiType: number | boolean;
multiType = 20;
multiType =true;

function add(num1: number ,num2:number =10):number
{   if(num2)
    return num1 + num2;
   else
     return num1;

}

add(5 ,10);



// Interfaces:

interface Person {
    firstName : string;
    lastName: string;
}


function fullName(person : Person)
{
    console.log(`${person.firstName} ${person.lastName}`);
    
}

let p = {
    firstName : 'Bruce' , 
    lastName : 'Wayne'
};



fullName(p);

class Employee {
    employeeName : string;
  
   public constructor(name : string)
    {
        this.employeeName = name;
    }
    greet() {
        console.log(`GoodMorning ${this.employeeName}`);
        
    }
}



class Manager extends Employee {
    constructor(mangerName: string)
    {
        super(managerName);
    }
   
    delegateWork(){
        console.log(`Manager dELETE THEIR WORK`)
    }
   


}



// acess modifier 






