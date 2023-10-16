/*
  자바스크립트 ES6 버전
  새로운 문법이 많이 등장했다

  1 let, const
  2 새로운 메서드
  3 화살표 함수
  4 구조분해할당
  5 스프레드 연산자
  6 프로미스
*/


/*
  let과 const

  1 let
  2 const
  3 블록 범위
*/


// let
// 변수 선언 예약어
// var 과 대부분 같다

// let은 재선언이 불가능하다
// let foo = "bar";
// let foo = "baz";


// const (constant)
// 상수

// 선언 후 값을 바꿀 수 없다
// 다음의 형태로만 사용가능하다
// const foo = "bar";


/*
  블록 범위 (block scope)

  let과 const는 블록 범위를 갖는다
*/

// { // 블록
//   var varInBlock = true;
//   let letInBlock = true;
//   const constInBlock = true;
// }

// console.log(varInBlock);
// true (블록 밖에서 접근 가능)

// console.log(letInBlock);
// 접근 불가

// console.log(constInBlock)
// 접근 불가


/*
  ES6에서 등장한 새로운 메서드

  1 Array.map
  2 Array.filter (ES 5)
  3 Object.keys
*/


/*
  Array.map

  배열에 특정한 작업을 수행한다
  업데이트된 배열을 리턴한다
*/

// 각 아이템에 10을 곱한 새로운 배열이 필요한 상황
// var arr = [10, 20, 30];

// // item: 배열의 각 아이템
// // index: 각 아이템의 인덱스
// // self: 원본 배열
// var updatedArr = arr.map(function (item, index, self) {
//   return item * 10;
// })

// console.log(updatedArr);
// // 100, 200, 300



// Array.filter

// var ages = [13, 20, 34, 40];

// 필터링 작업
// var adults = ages.filter(function (age) {
//   if (age >= 18) {
//     return age;
//   }
// })

// console.log(adults);
// 20, 34, 40

// var adults = ages.filter(function (age) {
//   return age >= 18; // return + 조건
// })

// console.log(adults);
// 20, 34, 40



/*
  Object.keys

  객체의 키를 문자열 배열로 리턴한다
*/

// var cat = {
//   name: "치즈",
//   home: null,
//   sound: function () {
//     return "야옹";
//   }
// }

// var keys = Object.keys(cat);

// console.log(keys);
// name, home, sound



// beers 배열을 활용하여 모든 맥주 이름이 대문자인
// 새로운 배열을 만들어보세요
// var beers = ["guinness", "heineken", "budwiser"];


// var updatedBeers = beers.map(function (beer) {
//   return beer.toUpperCase();
// })

// console.log(updatedBeers);


// arr 배열을 활용해서 b로 시작하는 아이템만 추출한
// 새로운 배열을 만들어보세요

// var arr = ["foo", "bar", "baz"];


// var updatedArr = arr.filter(function (item) {
//   return item[0] === 'b'; // return + 조건
// })

// console.log(updatedArr);
// // bar, baz


/*
  화살표 함수

  익명함수를 간단하게 표현하기 위한 문법

  1 콜백에 화살표 함수 사용
  2 함수 선언시 화살표함수 사용
  3 더 간단하게 표현하는 방법
*/



// 콜백에 화살표 함수 사용


// function f(cb) {
//   var foo = "bar";
//   cb(foo);
// }

// // 기존의 방법
// f(function (data) { // 콜백을 익명함수로 사용
//   console.log(data);
// })


// // 콜백을 화살표 함수로 사용

// f((data) => {
//   console.log(data);
// })


// 함수 선언시 화살표 함수 사용

// 기존의 방법
// var f = function () {
//   console.log("foo");
// }

// // 호출
// f();

// var f = () => {
//   console.log("foo");
// }

// f();



// 화살표함수를 더 간단하게 표현하는 방법

// () => 리턴값
// var f = () => console.log("foo");

// f();
// // foo


// 인자가 하나일 때 매개변수의 괄호 생략 가능
// var f = data => console.log(data);

// f("foo");
// foo



/*
  구조분해할당 (Destructing)

  1 배열 구조분해할당
  2 객체 구조분해할당
  3 매개변수 구조분해할당
*/


/*
  배열 구조분해할당
  간단한 문법으로 배열의 아이템을 변수에 할당할 수 있다
*/

// var beers = ["기네스", "하이네켄", "버드와이저"];

// // 기존의 방법
// // var irishBeer = beers[0];
// // var dutchBeer = beers[1];
// // var americanBeer = beers[2];


// // 구조분해할당
// var [irishBeer, dutchBeer, americanBeer] = beers;

// console.log(irishBeer, dutchBeer, americanBeer)
// // 기네스 하이네켄 버드와이저


/*
  객체 구조분해할당

  간단한 문법으로 객체의 속성에 접근할 수 있다
*/

// var irishBeer = { 
//   name: "기네스", 
//   origin: "아일랜드", 
//   available: false
// }

// 기존의 방법
// console.log(irishBeer.name, irishBeer.origin, irishBeer.available);


// 구조분해할당
// var { name, origin, available } = irishBeer;

// console.log(name, origin, available);



/*
  매개변수 구조분해할당

  간단한 문법으로 매개변수에 접근할 수 있다
*/


// var irishBeer = { name: "기네스", origin: "아일랜드", available: false };

// 기존의 방법
// function f(beer) {
//   console.log(beer.name, beer.origin, beer.available);
// }

// f(irishBeer);


// 구조분해할당

// function f({ name, origin, available }) {
//   // 짧아진 변수이름
//   console.log(name, origin, available);
// }

// f(irishBeer);



// Q. 구조분해할당 문법으로 각각의 맥주를 변수에 할당해보세요

// var asianBeers = ["클라우드", "아사히"];

// var [koreanBeer, japaneseBeer] = asianBeers;


// Q. 구조분해할당으로 객체의 각 속성에 접근해보세요

// var car = { name: "아반떼", color: "화이트" };

// var { name, color } = car;

// console.log(name)
// console.log(color)




/*
  스프레드 연산자

  1 배열에서 스프레드 연산자 사용
  2 객체에서 스프레드 연산자 사용
*/


/*
  배열에서 스프레드 연산자 사용

  배열의 아이템을 간단하게 복사할 수 있다
  ...복사할 배열
*/


// var beers = ["기네스", "하이네켄"];
// var newBeer = "버드와이저";

// var updatedBeers = [...beers, newBeer];

// console.log(updatedBeers);
// // 기네스 하이네켄 버드와이저


// var europeanBeers = ["기네스", "하이네켄"];
// var asianBeers = ["아사히", "클라우드"];

// // 두개의 배열을 연결하는 작업
// var worldBeers = [...europeanBeers, ...asianBeers];

// console.log(worldBeers);
// 기네스 하이네켄 아사히 클라우드



/*
  객체에서 스프레드 연산자 사용

  객체의 속성을 간단하게 복사할 수 있다
  ...복사할 객체
*/


// var irishBeer = {
//   name: "기네스",
//   origin: "아일랜드",
//   available: false
// }

// // 객체의 속성을 추가 또는 업데이트한다
// var updatedIrishBeer = { ...irishBeer, available: true };

// console.log(updatedIrishBeer); 


// Q. 스프레드 연산자를 활용하여 두개의 배열을 합친
// 배열을 만들어보세요

var koreanCars = ["현대", "기아"];
var japaneseBeer = ["도요타", "혼다"];


var asianCars = [...koreanCars, ...japaneseBeer];

console.log(asianCars);