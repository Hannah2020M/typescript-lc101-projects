// Instructions are published in the online book. The URL is:
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/studio.html

// TODO: 
// * Code the Astronaut, Cargo, and Rocket classes in new files.
// * Import the three classes into this file.

import { Cargo } from './Cargo';
import { Rocket } from './Rocket';


let c1: Cargo = new Cargo(150, 'steel');
let c2: Cargo = new Cargo(250, 'copper');

let myCargoArray: Cargo[] = [c1, c2];
let myRocket = new Rocket('my rocket', 0);//creates an instance named 'my
const mySum = myRocket.sumMass(myCargoArray);
console.log('my sum is: ',mySum);
