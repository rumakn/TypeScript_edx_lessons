// let someMethod = () => {

// }

// export default someMethod;

// can only have one default, this object is the default export 

interface someInterface {

}

export function someMethod () {

}

export class someClass {
    someString : string = 'this string'
}
export default someInterface;


// usually people will have one class as default export 

// can instantiate on export so don't need new later 

// to compile you compile the main file - only imports in it 