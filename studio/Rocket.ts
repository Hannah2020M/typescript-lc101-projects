import { Payload } from './Payload'
export class Rocket implements Payload {
    // properties and methods
 totalCapacityKg:number ;
 name:string;
 cargoItems:Cargo[] =[];
 astronauts:Astronaut[] = [];
   constructor(massKg:number, name:string){
       this.massKg  = massKg;
       this.name = name ;
   }

 }



