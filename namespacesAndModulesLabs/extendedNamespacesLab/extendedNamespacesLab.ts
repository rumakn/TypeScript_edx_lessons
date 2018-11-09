///<reference path="extendedNamespacesLab_part2.ts" />
// XML reference tag

namespace ArrayUtilities{
    export function reverseArray(array: Array<number>){
        return array.slice(0).reverse();
    }
    export function lastItemOfArray(array: Array<number>) {
        return array.slice(0).pop();
    }

}