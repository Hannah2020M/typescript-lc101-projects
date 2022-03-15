"use strict";
// Instructions are published in the online book. The URL is:
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/studio.html
exports.__esModule = true;
var Cargo_1 = require("./Cargo");
var Rocket_1 = require("./Rocket");
var c1 = new Cargo_1.Cargo(100, 'steel');
var c2 = new Cargo_1.Cargo(200, 'copper');
var myCargoArray = [c1, c2];
var myRocket = new Rocket_1.Rocket('my rocket', 0); //creates an instance named 'my rocket'
var mySum = myRocket.sumMass(myCargoArray);
console.log('my sum is: ', mySum, '););
// let falcon9: Rocket = new Rocket('Falcon 9', 7500);
// let astronauts: Astronaut[] = [
//     new Astronaut(75, 'Mae'),
//     new Astronaut(81, 'Sally'),
//     new Astronaut(99, 'Charles')
// ];
// for (let i = 0; i < astronauts.length; i++) {
//     let astronaut = astronauts[i];
//     let status = '';
//     if (falcon9.addAstronaut(astronaut)) {
//         status = "On board";
//     } else {
//         status = "Not on board";
//     }
//     console.log(`${astronaut.name}: ${status}`);
// }
// let cargo: Cargo[] = [
//     new Cargo(3107.39, "Satellite"),
//     new Cargo(1000.39, "Space Probe"),
//     new Cargo(753, "Water"),
//     new Cargo(541, "Food"),
//     new Cargo(2107.39, "Tesla Roadster"),
// ];
// for (let i = 0; i < cargo.length; i++) {
//     let c = cargo[i];
//     let loaded = '';
//     if (falcon9.addCargo(c)) {
//         loaded = "Loaded"
//     } else {
//         loaded = "Not loaded"
//     }
//     console.log(`${c.material}: ${loaded}`);
// }
// console.log(`Final cargo and astronaut mass: ${falcon9.currentMassKg()} kg.`);
