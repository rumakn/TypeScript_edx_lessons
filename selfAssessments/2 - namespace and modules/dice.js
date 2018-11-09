var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// possible values to roll
var DiceValues;
(function (DiceValues) {
    DiceValues[DiceValues["One"] = 0] = "One";
    DiceValues[DiceValues["Two"] = 1] = "Two";
    DiceValues[DiceValues["Three"] = 2] = "Three";
    DiceValues[DiceValues["Four"] = 3] = "Four";
    DiceValues[DiceValues["Five"] = 4] = "Five";
    DiceValues[DiceValues["Six"] = 5] = "Six";
    DiceValues[DiceValues["Seven"] = 6] = "Seven";
    DiceValues[DiceValues["Eight"] = 7] = "Eight";
    DiceValues[DiceValues["Nine"] = 8] = "Nine";
    DiceValues[DiceValues["Ten"] = 9] = "Ten";
    DiceValues[DiceValues["Eleven"] = 10] = "Eleven";
    DiceValues[DiceValues["Twelve"] = 11] = "Twelve";
})(DiceValues || (DiceValues = {}));
var size = 100;
var diceSize = size + "px";
var border = 10;
var color = 'black';
var borderSize = border + "px solid " + color;
var Dice = /** @class */ (function () {
    function Dice(div) {
        this.div = div;
        this.div.style.width = diceSize;
        this.div.style.height = diceSize;
        this.div.style.border = borderSize;
        this.div.textContent = 'One';
    }
    Dice.prototype.changeValue = function (val) {
        this.div.textContent = DiceValues[val];
        return true;
    };
    Dice.DiceValues = DiceValues;
    return Dice;
}());
var dieRoller = /** @class */ (function (_super) {
    __extends(dieRoller, _super);
    function dieRoller(div) {
        return _super.call(this, div) || this;
    }
    dieRoller.prototype.rollDice = function () {
        var min = 0;
        var max = 11;
        var random = Math.floor(Math.random() * (max - min + 1)) + min;
        this.changeValue(random);
    };
    return dieRoller;
}(Dice));
var diceClasses = [];
for (var i = 0; i < 4; i++) {
    var div = document.createElement('div');
    var diceClass = new dieRoller(div);
    document.body.appendChild(div);
    diceClasses.push(diceClass);
}
var button = document.createElement('button');
button.textContent = 'Roll the Dice';
button.onclick = function (event) {
    for (var i = 0; i < diceClasses.length; i++) {
        diceClasses[i].rollDice();
    }
};
document.body.appendChild(button);
