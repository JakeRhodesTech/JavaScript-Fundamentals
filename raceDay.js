// This is the second example project recommended by codecademy.com to demonstrate ability to use control flow.
// The program models a registration help system for runners at an event, based on their age and early registration status. 

let raceNumber = Math.floor(Math.random() * 1000);
console.log(raceNumber);
let earlyReg = true;
let runnersAge = 18;
if (runnersAge >= 18 && earlyReg === true) {
    raceNumber += 1000;
}
console.log(raceNumber);
if (runnersAge > 18 && earlyReg === true) {
    console.log('You will race at 9:30am, ' + raceNumber);
} else if (runnersAge > 18 && earlyReg != true) {
    console.log('You will race at 11:00am, ' + raceNumber);
} else if (runnersAge < 18) {
    console.log('You will race at 12:30pm, ' + raceNumber);
} else if (runnersAge === 18) {
    console.log('Please see the registration desk');
}
