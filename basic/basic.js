function myFn (x) {
    return x + 100;
}

const result = myFn(10);

const myFn2 = function () {
    return 100;
};

myFn2();
myFn2.call();
myFn2.apply();  

(function () {
    console.log('nononononono');
})();