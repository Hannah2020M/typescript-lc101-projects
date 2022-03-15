"use strict";
// Instructions are published in the online book. The URL is:
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/studio.html
exports.__esModule = true;
// TODO: 
// * Code the Astronaut, Cargo, and Rocket classes in new files.
// * Import the three classes into this file.
var Cargo_1 = require("./Cargo");
var Rocket_1 = require("./Rocket");
var c1 = new Cargo_1.Cargo(150, 'steel');
var c2 = new Cargo_1.Cargo(250, 'copper');
var myCargoArray = [c1, c2];
var myRocket = new Rocket_1.Rocket('my rocket', 0); //creates an instance named 'my
var mySum = myRocket.sumMass(myCargoArray);
console.log('my sum is: ', mySum);
