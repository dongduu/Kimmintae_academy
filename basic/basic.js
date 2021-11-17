const books = []; // 빈 값에 추가하는 형식
// const books = ['a', 'b', 1, 2] -> 배열을 만드는 순간 값도 정해주는 형식

// 원시적인 방법으로 추가
books[0] = "헨리 6세 제1부";
books[1] = "헨리 6세 제2부";
books[2] = "헨리 6세 제3부";

// push 메소드 사용(배열 맨 마지막에 추가)
books.push("리처드 3세");
books.push("실수 연발");
books.push("말괄량이 길들이기");

console.log(books);
console.log(books.length);

// pop 메소드 사용(배열 맨 마지막 데이터 꺼내옴)
books.pop();
books.pop();

console.log(books); // 원래 있던 배열에서는 삭제
console.log(books.length);

// 꺼내올 데이터의 위치 지정 가능
const oneBooks = books.slice(1,2);

console.log(oneBooks);
console.log(books);
console.log(books.length);

// 꺼내온 데이터 위치에 다른 값 추가
const twoBooks = books.splice(1, 2, '햄릿', '오셀로', '리어왕');

console.log(twoBooks);
console.log(books);
console.log(books.length);

twoBooks.shift(); // 배열을 맨앞에서부터 빼옴

twoBooks.unshift('한여름 밤의 꿈'); // 맨앞에서부터 추가

console.log(twoBooks);

const allBooks = books.join(); // 배열 안에 있는 모든 데이터를 하나의 문자열로 합치는 메소드, 괄호 사이에는 구분자

console.log(allBooks);

const newBooks = allBooks.split(','); // 구분자로 구분되어 있는 하나의 문자열이 있다면 그것을 배열로 바꿈

console.log(newBooks);

console.log(oneBooks);
console.log(twoBooks);

const nextBooks = oneBooks.concat(twoBooks); 

console.log(newBooks);

const nextBookList = [...oneBooks, ...twoBooks];

console.log(newBooks);