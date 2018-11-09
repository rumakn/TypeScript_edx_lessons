// type inference

let someString = 'this is a string';
let someNumber = 1;


// infer 
// most common type - decided it is array of numbers

let arrayOfNumbers = [0,1,null];

// type assertion 

let undeclaredType:any = 'this is a string';

let lengthOfString: number = (undeclaredType as string).length;

// OR 

let otherLength : number = (<string> undeclaredType).length;


// interface - what to expect in a more complicated object

interface squareDescriptor {
    'name' :string,
    'size' : number
}

// create methods to accept certain interfaces

let squareFn: Function = (square : squareDescriptor) => {
    return square.name;
}


let square = {
    'name' : 'a square',
    'size' : 20
}

let executedFn = squareFn(square);


class squareClass implements squareDescriptor {
    name : string = 'a name'
    size : number = 10

}


// type compatibility 

let square2 : squareDescriptor;
let falseSquare = {
    "size" : 'a string',
    'name' : 20
}

// incompatible
square = falseSquare;

