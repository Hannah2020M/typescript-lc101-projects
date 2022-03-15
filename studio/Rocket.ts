import { Payload } from './Payload';
import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';
export class Rocket {
    // properties and methods
    totalCapacityKg: number;
    name: string;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    constructor( name: string, totalCapacityKg: number) {
        this.totalCapacityKg = totalCapacityKg;
        this.name = name;
    }
    sumMass(items: Payload[]): number {
        //Returns the sum of all items using each item's massKg property
        let myTotalMass = 0;
        for (let i = 0; i < items.length; i++) {
            myTotalMass += items[i].massKg;
        }
        return myTotalMass;
    }//end of sumMass
}