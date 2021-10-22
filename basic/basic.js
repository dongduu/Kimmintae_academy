function addAge (age) {
    if (typeof age === 'Number') {
        return age + 1;
    } else {
        throw 'ERROR!';
    }
};

let age = addAge('30');

console.log(age);