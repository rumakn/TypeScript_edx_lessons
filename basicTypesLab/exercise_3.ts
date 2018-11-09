interface ElementSet{
    div : Element,
    button : Element
}


enum Colors{
    Green, 
    Red, 
    Blue, 
    Orange
}
class colorChange{
    div:Element;
    constructor(div:Element){
        this.div = div;
    }
    changeColor(color: string): boolean {
        (this.div as HTMLElement).style.backgroundColor = color;
        return true;
    }

}

class numericColor extends colorChange{
    static Colors = Colors;
    constructor(div: Element){
        super(div);
        (this.div as HTMLElement).style.width = squareSize;
        (this.div as HTMLElement).style.height = squareSize;
    }
    changeColor (color:number):boolean {
        (this.div as HTMLElement).style.backgroundColor = Colors[color];
        return true;
    }
}


let elementSets : Array<ElementSet> = [];
let squareSizeNum: number = 100;
let squareSize :string = `${squareSizeNum}px`;

for(let index: number = 0; index < 4; index++){
    elementSets.push({
        'div' : document.createElement('div'),
        'button' : document.createElement('button')
        
    })
}

elementSets.map( (elem, index) => {
    let colorChangeClass = new colorChange(elem.div);
 
    elem.button.textContent = "Change Color";
    (elem.button as HTMLElement).onclick = (event) => {
        colorChangeClass.changeColor(Colors[index]);
    }
    document.body.appendChild(elem.button);
    document.body.appendChild(elem.div);
})






