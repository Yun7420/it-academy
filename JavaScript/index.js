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