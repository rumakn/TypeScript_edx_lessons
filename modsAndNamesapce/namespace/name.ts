/// <reference path="name2.ts" />
// need an output when compiling for this to work

namespace SomeNamespace {



    export namespace internalNamespace {
        export let internalVariable = 'string';
    }
    let someVariable = 'string';

    export let someVar2 = 'string 3';

    export function someFunction () {

    }

    export class someClass{

    }
}


SomeNamespace.someFunction();

let localVariable = SomeNamespace.someVar2;

let instanceOfClass = new SomeNamespace.someClass;

SomeNamespace.internalNamespace.internalVariable;
// alias for namespace 
import internalSpace = SomeNamespace.internalNamespace;
// access this way now
internalSpace.internalVariable;
