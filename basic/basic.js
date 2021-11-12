function salePrice(discountRate, price){
    return price - (price * (discountRate * 0.01));
}

console.log(salePrice(30, 567000));
console.log(salePrice(10, 567000));

function discountPrice(discountRate){
    return function(price){
        return price - (price * (discountRate * 0.01));
    }
}

console.log(discountPrice(30)(567000));
console.log(discountPrice(10)(567000));

let summerPrice = discountPrice(30);
let winterPrice = discountPrice(10);


console.log(summerPrice(567000));
console.log(winterPrice(567000));