import { Payload } from './Payload';
import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';
export class Rocket {
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
        let myTotalMass = 0;
        //for (let i = 0; i < this.cargoItems; i++) {
        for (let i = 0; i < items.length; i++) {
            myTotalMass += items[i].massKg;
        }
        return myTotalMass;
    }//end of sumMass
    currentMassKg(): number{
    //Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
      let massTotal = this.sumMass(this.cargoItems) + this.sunMass(this.astronauts);
           return massTotal;
    }//end of currentMassKg()

    canAdd(item: Payload): boolean{ 
    //Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
    //addCargo(cargo: Cargo): boolean
     let totalMass = this.currentMassKg() + item.massKg;
     if (totalMass <= this.totalCapacityKg) return true;
      return false;
 
      addAstronaut(astronaut: Astronaut): boolean {
            let itCanAddIt = (this.canAdd(astronaut);
            if (itCanAddIt){
this.astronauts.push(astronaut);
   return true;
             } else {
                 return false;
             }

      }


 }



}