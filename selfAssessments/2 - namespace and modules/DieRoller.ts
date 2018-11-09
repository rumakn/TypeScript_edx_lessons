declare namespace chance {
    export interface Base {
        integer : Function
    }
}
declare var ch:chance.Base;

class dieRoller{
    rollDice(){
        let min : number = 0;
        let max : number = 11;
        let random :number = ch.integer({min:min, max: max});
        return random;
    }
}
export default new dieRoller;