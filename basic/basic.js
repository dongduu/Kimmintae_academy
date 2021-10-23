let age = 10;

if (age === 10 ) {
    console.log('나이는 10세');
} else if (age === 20){
    console.log('나이는 20세');
} else {
    console.log('모르겠습니다.');
}

if (age) {
    console.log('나이를 저장했습니다.')
}

let age2 = 40;

switch (age2) {
    case 1:
        console.log(1);
    case 2:
        console.log(2);
    case 3:
        console.log(3);
    default:
        console.log('??');
    break;
}