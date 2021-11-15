// 객체 문법
type Box = { // 타입 정의
    width:number;
    height:number;
    borderRadius:number;
    backgroundColor:string;
    color?: string;
    borderWidth?: number;
    ['className']?: string; // 계산된 속성(속성명을 값으로 취급해서 기술할 수 있는 표기법)
}

let box: Box = { // 타입이 box인 객체
    width:200,
    height:200,
    borderRadius:5,
    backgroundColor:'red',
}
// => 이렇게 만드는 방법을 객체 리터럴이라고 함

// 함수 이용
function makeBox(
    width:number,
    height:number,
    borderRadius:number,
    backgroundColor:string,
) : Box {
    return {
        width,height,borderRadius,backgroundColor
    };
}

makeBox(100,100, 0, 'blue');

// 클래스 이용
class Shape implements Box{
    width:number;
    height:number;
    borderRadius:number;
    backgroundColor:string;

    constructor(
        width:number,
        height:number,
        borderRadius:number,
        backgroundColor:string,
    ) {
        this.width = width;
        this.height = height;
        this.borderRadius = borderRadius;
        this.backgroundColor = backgroundColor;
    }
}

const boxShape = new Shape(10, 10, 0, 'blue');
// 어떤 클래스로 만들어진 객체인지 알 수 있음
if(boxShape instanceof Shape) {
    
}

// 객체 변형
box.borderRadius = 10;
box['className'] = 'box rounded';
box.color = 'blue';

delete box.color;
// 추가나 삭제 시 타입스크립트에 명시되지 않은 것들은 빨간 줄

const box1 = box; // 참조(같은 것을 가르킴)
const box2 = Object.assign({}, box); // 복사(다른 것데 복사된거임)
const box4 = {...box, borderRadius: 10}; // 전개해서 복사
const box3 = JSON.parse(JSON.stringify(box)); // 복사하고 싶은 객체를 문자열로 만든 후 문자열을 다시 객체로 만듬(확실)