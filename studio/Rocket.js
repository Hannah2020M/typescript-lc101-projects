"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Astronaut_1 = require("./Astronaut");
var Rocket = /** @class */ (function () {
    function Rocket(totalCapacityKg, name) {
        this.cargoItems = [];
        this.astronauts = [];
        this.totalCapacityKg = totalCapacityKg;
        this.name = name;
    }
    Rocket.prototype.sumMass = function (items) {
        //Returns the sum of all items using each item's massKg property
        var myTotalMass = 0;
        //for (let i = 0; i < this.cargoItems; i++) {
        for (var i = 0; i < items.length; i++) {
            myTotalMass += items[i].massKg;
        }
        return myTotalMass;
    }; //end of sumMass
    Rocket.prototype.currentMassKg = function () {
        //Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
        var massTotal = this.sumMass(this.cargoItems) + this.sunMass(this.astronauts);
        return massTotal;
    }; //end of currentMassKg()
    Rocket.prototype.canAdd = function (item) {
        //Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
        //addCargo(cargo: Cargo): boolean
        var totalMass = this.currentMassKg() + item.massKg;
        if (totalMass <= this.totalCapacityKg)
            return true;
        return false;
        addAstronaut(astronaut, Astronaut_1.Astronaut);
        boolean;
        {
            var itCanAddIt = (this.canAdd(astronaut));
            if (itCanAddIt) {
                this.astronauts.push(astronaut);
                return true;
            }
            else {
                return false;
            }
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
