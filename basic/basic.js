const arr = ['a', 'b', 'c', 'd'];

// console.log(arr[1]);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

let i = 0;
while (i < arr.length) {
    console.log(arr[1]);
    i++;
}

i = 0;
do {
    console.log(arr[1]);
    i++;
} while (i < arr.length)

for (const item of arr) { // item은 매번 반복을 할 때마다 만들게 됨
    console.log(item);
}

for (const index in arr) {
    console.log(arr[index]);
}

const obj = {
    color: 'red',
    width: '200',
    height: '100',
}

for (const key in obj) {
    console.log(obj[key]);
}