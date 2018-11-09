// possible values to roll
import DieRoller from "./DieRoller.js"
enum DiceValues{ One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Eleven, Twelve}

interface Die {
    div: Element;
}

namespace DiceStyles {
    export let size: number = 100; 
    export let diceSize : string = `${size}px`;
    export let border : number = 10;
    export let color : string = 'black';
    export let borderSize : string = `${border}px solid ${color}`;
}

class Dice implements Die{
    div:Element;
    static DiceValues = DiceValues;
    constructor(div:Element){
        this.div = div;
        (this.div as HTMLElement).style.width = DiceStyles.diceSize;
        (this.div as HTMLElement).style.height = DiceStyles.diceSize;
        (this.div as HTMLElement).style.border = DiceStyles.borderSize;
        (this.div as HTMLElement).textContent = 'One';
    }

    changeValue( val : number) :boolean {
        (this.div as HTMLElement).textContent = DiceValues[val];
        return true;
    }
}



let dice : Array <Dice> = [];

for(let i :number = 0; i < 4; i++){
    let div = document.createElement('div');
    let diceClass = new Dice(div);
    document.body.appendChild(div);
    dice.push(diceClass);
}

let button : Element = document.createElement('button');
button.textContent = 'Roll the Dice';

(button as HTMLElement).onclick = (event) => {
    for(let i : number = 0; i < dice.length; i++ ){
        let random : number = DieRoller.rollDice();
        dice[i].changeValue(random);
    }
}





document.body.appendChild(button);