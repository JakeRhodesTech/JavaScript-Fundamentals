// Control Flow
// This easy project models the classic toy 'magic 8 ball' to demonstrate aptitude with control flow.

let userName = 'Jimmy';
userName ? console.log('Hello, ' + userName)
    : console.log('Hello!');
const userQuestion = 'What football team do you support?'
console.log(userName + ', what football team do you support?');
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

switch (randomNumber) {
    case 0:
        eightball = 'Leeds United? Excellent choice!';
        break;
    case 1:
        eightball = 'Chelsea? Disgusting.';
        break;
    case 2:
        eightball = 'Huddersfield Town? Lmao.';
        break;
    case 3:
        eightball = 'West Bromwich Albion? Fair enough.';
        break;
    case 4:
        eightball = 'Nordjylland fc? Bless you.';
        break;
    case 5:
        eightball = 'Bradford City? I\'m so sorry.';
        break;
    case 6:
        eightball = 'Bury fc? I have some bad news.';
        break;
    case 7:
        eightball = 'Manchester United? You aren\'t welcome on these premises any more. Please close the door on your way out.';
}

console.log(eightball);
