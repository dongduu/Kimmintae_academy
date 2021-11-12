function makeInfiniteEnergyGenerator(){
    let energy = 0;
    return function (booster = 0){
        if(booster){
            energy += booster;
        } else {
            energy++;
        }

        return energy;
    };
}

function* infiniteEnergyGenerator() {
    let energy = 1;
    while(true){ // 무한 루프
        const booster = yield energy;

        if(booster){
            energy += booster;
        } else {
            energy++;
        }
    } // return 없음
}
/*
const energy = makeInfiniteEnergyGenerator();

for(let i =0; i<5; i++){
    console.log(energy());
}

console.log(energy(5));
*/
const energyGenerator = infiniteEnergyGenerator();


for(let i =0; i<5; i++){
    console.log(energyGenerator.next()); // 에너지제너레이터는 객체이기 때문에 메소드 사용
}

console.log(energyGenerator.next(5))