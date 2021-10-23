let a = 10;
let b = a;

b = 20;

let o = {
    loading: false
};


function foo(a) {
    o.loading = true;
}

foo(o);

if (o.loading === true) {
    console.log('true');
} else {
    console.log('false');
}

console.log('done');