// possible values to roll
enum DiceValues{
    One, 
    Two, 
    Three, 
    Four, 
    Five, 
    Six, 
    Seven, 
    Eight, 
    Nine, 
    Ten, 
    Eleven, 
    Twelve
}

interface Die {
    div: Element;
}

let size : number = 100;
let diceSize : string = `${size}px`;
let border : number = 10;
let color : string = 'black';
let borderSize : string = `${border}px solid ${color}`;

class Dice implements Die{
    div:Element;
    static DiceValues = DiceValues;
    constructor(div:Element){
        this.div = div;
        (this.div as HTMLElement).style.width = diceSize;
        (this.div as HTMLElement).style.height = diceSize;
        (this.div as HTMLElement).style.border = borderSize;
        (this.div as HTMLElement).textContent = 'One';
    }

    changeValue( val : number) :boolean {
        (this.div as HTMLElement).textContent = DiceValues[val];
        return true;
    }
}

class dieRoller extends Dice {
    constructor(div:Element){
        super(div);
    }

    rollDice(){
        let min : number = 0;
        let max : number = 11;
        let random :number = Math.floor(Math.random() * (max - min + 1)) + min;

        this.changeValue(random);
    }
}

let diceClasses : Array <dieRoller> = [];

for(let i :number = 0; i < 4; i++){
    let div = document.createElement('div');
    let diceClass = new dieRoller(div);
    document.body.appendChild(div);
    diceClasses.push(diceClass);
}

let button : Element = document.createElement('button');
button.textContent = 'Roll the Dice';

(button as HTMLElement).onclick = (event) => {
    for(let i : number = 0; i < diceClasses.length; i++ ){
        diceClasses[i].rollDice();
    }
}





document.body.appendChild(button);