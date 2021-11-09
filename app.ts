// 내용이 함수면 메소드 데이터면 속성
type MyObject = {
    name?: string;
    age: number;
    getFamilyName: () => string;
    getLastName: () => string;
    getBloodType: () => string;
}

const obj: MyObject = {
    name: 'dongdu',
    age: 22,
    getFamilyName: function () {
        return 'Lee';
    },
    getLastName: () => 'Lee',
    getBloodType() {
        return 'A';
    },
};

obj.name;
obj.age;
obj.getFamilyName();
obj.getBloodType();

obj.age = 200;
obj.age = -500;

class Person{
    _bloodType: string;

    constructor(bloodType: string){
        this._bloodType = bloodType;
    }

    set bloodType (aType: string) {
        if(aType === "A" || aType === "B" || aType === "AB" || aType === "O") {
            this._bloodType = aType;
        } // => 다른 값을 넣으면 아무것도 세팅이 안 됨
    }

    get bloodType() {
        return `${this._bloodType} 형`;
    }
}

const p1 = new Person('A');

p1.bloodType; // = obj.getBloodType();
p1.bloodType = 'C'; // 속성에 접근하는 것처럼 () 필요없음1! => 이건 메소드 형식(set 덕분)

const myObj = Object.create(null, {
    name: {
        value: 'Lee DongDu',
        writable: true, // true면 바꿀 수 있음 false면 못바꿈(readonly)
        configurable: false, // 못지움 delete 사용 불가, true면 지울 수 있음
    }
})

myObj.name;