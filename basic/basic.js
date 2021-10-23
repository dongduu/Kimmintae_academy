const colors = ['red', 'yellow', 'blue'];

const yellow = colors[1];
const red = colors[0];
const blue = colors[2];

yellow;

const [red, yellow, blue] = colors;

yellow;

let a = 10;
let b = '10';

if (a == b) {
    console.log('true');
} else {
    console.log('false')
} // true

if (a === b) {
    console.log('true');
} else {
    console.log('false');
} // false

if (a === b) {
    a = 0;
} else {
    a = 1;
}

a = (a === b) ? 0 : 1;