import { Payload } from './Payload';
import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';
export class Rocket  {
    // properties and methods
    totalCapacityKg: number;
    name: string;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    constructor(totalCapacityKg: number, name: string) {
        this.totalCapacityKg = totalCapacityKg;
        this.name = name;
    }
    sumMass(items: Payload[]): number {
        //Returns the sum of all items using each item's massKg property
        for (let i = 0; i < this.cargoItems; i++) {
            sum = 0;
            sum += Payload.massKg;
        }
        return sum;
    }//end of sumMass
    currentMassKg(): number
    //Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
    canAdd(item: Payload): boolean
    //Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
    addCargo(cargo: Cargo): boolean
     this.canAdd();
addAstronaut(astronaut: Astronaut): boolean
this.canAdd();


 }



