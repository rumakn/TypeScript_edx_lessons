class someClass {
    someNumber: number = 6;
    someElement: Element;
    constructor(param1: Element) {
        this.someElement = param1;
    }

    someMethod = () => {
        this.someNumber = 5;
    }

    get GetMethod() {
        return this.someNumber;
    }

    set SetMethod(param){
        this.someNumber = param;
    }
}




class ExtendedClass extends someClass{
    constructor(param1 : Element){
        super(param1);
    }
    someOtherMethod = () => {
        this.someNumber;
    }
}
let thisElement = document.createElement('div');
let instanceOfSomeClass = new someClass(thisElement);


instanceOfSomeClass.someNumber;

let valueOfMethod = instanceOfSomeClass.someMethod();

let instance2 = new ExtendedClass(thisElement);
