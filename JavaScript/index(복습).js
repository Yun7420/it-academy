/* 
    Node.js 란?
    Compiler(언어 번역프로그램) : 특정 프로그래밍 언어로 쓰여 있는 문서를 다른 프로그래밍 언어로 옮기는 언어 번역프로그램이다.
    Server(개발 라이브러리 사용가능)

    Nodemon 란?
    NODE 서버를 이용하면서 코드를 변경하게 될 경우, 변경한 코드를 웹 상에서 확인하려면 서버를 껐다가 다시 켜야 변화를 감지할 수 있다.
    NODEMON은 서버를 내리고 올리지 않아도 소스를 변경할 때 바로 감지해서 자동으로 서버를 재시작 해주는 TOOL이다.

    1. Node.js 설치

    2. (Visual Studio Terminal Setting) ... PowerShell, Git Bash, Command Prompt 등 각자 용도가 다름.
    Visual Studio 실행 > Setting Open (File - Preference - Settings) or (Ctrl + ,)
    > Default Profile Windows 검색 > Terminal - Integrated - Default Profile:Windows 에서 Command Prompt 적용 후 재실행

    3. (Visual Studio Nodemon Setting)
    Visual Studio 실행 > Terminal 실행 (View > Terminal or Ctrl + J) > node --version or node -v (node.js 설치 확인)
    > cd basic/js (해당 파일로 이동) > npm install nodemon -g(nodemon package 설치) > npm list -g(nodemon pakage 불러오기) > nodemon index.js (index.js 파일을 nodemon으로 실행)

    nodemon 패키지란?
    파일의 변경사항이 생기면 다시 컴파일(compiler)을 시도한다.

    npm install nodemon -g(nodemon package 설치)
    이외에 npm install + 설치할 패키지로 사용할 수 있다.(새로운 노드 패키지를 설치한다.)
*/

/* 1000lines */

//  console.log("Hello JavaScript");

/* 1000lines */

/*
  자바스크립트 튜토리얼

  1 데이터 타입
  2 기본 메서드
  3 연산자
  4 조건문
  5 반복문
  6 변수
  7 함수
  8 배열
  9 객체
  10 클래스
  11 에러
  12 비동기 작업
  13 JSON
*/

/* 1000lines */

/*
  데이터 타입

  1 String
  2 Number
  3 Boolean
  4 Null
  5 Undefined
  6 BigInt
*/

/* 1000lines */

/*
  1. String(문자열) - 문자의 집합을 나타낸다
  ※ typeof는 변수의 type을 알 수 있다.
  ※ length는 변수안에 갯수를 파악해준다.
*/
// var foo = "bar";
// console.log(foo); // bar
// console.log(typeof foo); // string

// - 문자열에서 각각의 문자에 접근한기
// ※ []안에는 index번호가 들어가며, index번호는 0부터 시작한다.
// ※ 1번쨰 요소 index[0], 2번쨰 요소 index[1], 3번쨰 요소 index[2] 등 ...
// console.log(foo[0]); // b
// console.log(foo[1]); // a
// console.log(foo[2]); // r

// - 문자열에서 문자의 갯수 파악하기
// console.log(foo.length); // 3

/*
  2. Number(숫자)- 값의 종류 : 정수, 분수, NaN(Not a Number), +Infinity, -Infinity 
*/
// 정수
// var year = 2023;
// console.log(year); // 2023
// console.log(typeof year) // Number

// 분수
// var pi = 3.14;
// console.log(pi); // 3.14

// NaN (Not a Number = 숫자가 아니다.)
// var nan = 2 - "foo";
// console.log(nan); // NaN
// console.log(typeof nan); // Number

// 넘버 타입이 저장할 수 있는 가장 큰수 (무한에 가까운 큰 수 까지 저장이 가능하다.)
// var max_value = Number.MAX_VALUE;
// console.log(max_value); // 1.7976931348623157e+308

// 넘버 타입이 저장할 수 있는 가장 작은 수 (무한에 가까운 작은 수 까지 저장이 가능하다.)
// var negative_max_value = -Number.MAX_VALUE;
// console.log(negative_max_value); // -1.7976931348623157e+308

// +Infinity (양의 무한대), *(곱하기)
// var infinity = Number.MAX_VALUE * 1.1;
// console.log(infinity); // Infinity

// -Infinity (음의 무한대), *(곱하기)
// var negative_infinity = -Number.MAX_VALUE * 1.1;
// console.log(negative_infinity); // -Infinity

/*
  3. Boolean : 참 또는 거짓 (true of false)의 값을 갖는다
  ※ true == 1(true), false == 0(true)
  ※ true === 1(false), false === 0(false)
*/
// var boo1 = true;
// console.log(boo1); // true
// console.log(typeof boo1); // boolean
// console.log(boo1 === typeof boo1); // false

// 비교연산
// console.log(1 > 0); // true

/*
  4. Null : '없음'을 나타내는 데이터 타입이다.
*/
// var foo = null;
// console.log(foo); // null
// console.log(typeof foo); // object

/* 
  5. Undefined : 정의되지 않은 변수가 가지는 데이터 타입이다.
*/
// var foo;
// console.log(foo); // undefined
// console.log(typeof foo); // undefined(문자열)
// console.log(typeof typeof foo) // string

/*
   6. BigInt(Big Integer, 큰 정수)
   정의 : 안전한 정수 밖의 정수를 정확하게 표현할 때 사용하는 데이터 타입이다.
   ※ 안전한 정수의 범위 : -(2^53 - 1) 에서 (2^53 - 1) 사이의 정수
*/
// var max_safe_integer = Number.MAX_SAFE_INTEGER;
// console.log(max_safe_integer); // 9007199254740991(안전한 정수의 최대값)

// var min_safe_integer = -Number.MAX_SAFE_INTEGER;
// console.log(min_safe_integer); //-9007199254740991(안전한 정수의 최소값)

// var not_safe_integer = 9999999999999999; // 9가 16개
// console.log(not_safe_integer); // 10000000000000000

// 정수값에 n을 붙여 BigInt 타입을 선언한다.
// var bigint = 9999999999999999n; // 9가 16개
// console.log(bigint); // 9999999999999999n

/* 1000lines */

/*
  기본 메서드
  데이터에 특정한 작업을 수행한다.

  1. String 메서드
  2. Number 메서드
*/

/* 1000lines */

/*
  1. String 메서드

  1. toUpperCase()
  2. indexOf()
  3. trim()
  4. substring()
*/
// toUpperCase() : 문자열의 모든 문자를 대문자로 변환한다.
// var foo = "bar";
// console.log(foo); // bar
// console.log(foo.toUpperCase()); // BAR

// indexOf() : 인덱스를 구할 문자열을 구한다.
// var foo = "bar";
// console.log(foo.indexOf("r")); // 2
// console.log(foo.indexOf("k")); // -1 (문자가 없을 경우)

// trim() : 문자열 앞 / 뒤의 공백을 제거한다.
// var foo = "  bar  ";
// console.log(foo); // (공백bar공백)
// console.log(foo.trim()); // bar

// substring(시작인덱스,끝인덱스) : 인덱스값의 범위에 해당하는 문자열을 추출한다.
// ※시작인덱스부터 끝인덱스전까지 추출한다.
// var foo = "abcde";
// console.log(foo); // abcde
// console.log(foo.substring(2,4)) // cd , 각 해당하는 인덱스 번호 : [2]:c [4]:e

/*
  2. Number 메서드

  1. toPrecision
  2. toString
*/
// toPrecision(표현할 숫자의 갯수) : 정밀도를 증가시키는 메서드, Number의 길이를 제한한다.
// ※()안에 들어가는 숫자는 100까지만 가능하다.
// ※Math.PI를 사용하면 PI(파이)값을 가지고 올 수 있다.
// var pi = Math.PI;;
// console.log(pi); // 3.141592653589793
// console.log(pi.toPrecision(2)); // 3.1

// toString() : Number Type을 String Type으로 바꾼다.
// var year = 2023;
// console.log(year); // 2023
// console.log(typeof year); // number
// console.log(typeof year.toString()); // string

/* 1000lines */

/*
  연산자

  1. 수리연산자
  2. 할당연산자
  3. 비교연산자
  4. 논리연산자
  5. 타입연산자
*/

/* 1000lines */

/*
  1. 수리연산자

  1. 사칙연산(+, -, *, /)
  2. 증가연산자(++)
  3. 감소연산자(--)
  4. 제곱연산자(**)
  5. 계수연산자(%)
*/
// 사칙연산(+, -, *, /)
// + : 더하기
// var add = 1 + 1;
// console.log(add); // 2
// - : 뺴기
// var substract = 2 - 1;
// console.log(substract); // 1
// / : 나누기
// var divide = 1 / 2;
// console.log(divide); // 0.5
// * : 곱하기
// var multiply = 1 * 2
// console.log(multiply); // 2

// 증가연산자(++)
// var i = 1;
// i++; // i = i + 1 (1을 증가시킨다.)
// console.log(i); // 2

// 증가연산자 전위
// var x = 1;
// var y = ++x
// console.log(`x:${x}, y:${y}`)
/*
  증가연산자 전위
  let x = 1;
  let y; //이 시점에서 y 는 undefiend

  x = x + 1; // (1) 연산을 먼저 수행한 뒤 (이 시점에서 x = 2)
  x = y; // (2) 그 다음 변수를 대입 (이 시점에서 x = 2 , y = 2)
  console.log(`x:${x}, y:${y}`) // x:2, y:2
*/

// 증가연산자 후위
// var x = 1;
// var y = x++;
// console.log(`x:${x}, y:${y}`)
/*
  증가연산자 후위
  let x = 1;
  let y; //이 시점에서 y 는 undefiend

  x = y; // (1) 연산을 먼저 수행한 뒤 (이 시점에서 x = 1 , y = 1)
  x = x + 1; // (2) 그 다음 변수를 대입 (이 시점에서 x = 2 , y = 1)
  console.log(`x:${x}, y:${y}`) // x:2, y:1
*/

// 감소연산자(--)
// var i = 1;
// i--; // i = i - 1 (1을 감소시킨다.)
// console.log(i); // 0

// 감소연산자 전위
// var x = 1;
// var y = --x
// console.log(`x:${x}, y:${y}`)
/*
  감소연산자 전위
  let x = 1;
  let y; //이 시점에서 y 는 undefiend

  x = x - 1; // (1) 연산을 먼저 수행한 뒤 (이 시점에서 x = 0)
  x = y; // (2) 그 다음 변수를 대입 (이 시점에서 x = 0 , y = 0)
  console.log(`x:${x}, y:${y}`) // x:0, y:0
*/

// 감소연산자 후위
// var x = 1;
// var y = x--;
// console.log(`x:${x}, y:${y}`)
/*
  감소연산자 후위
  let x = 1;
  let y; //이 시점에서 y 는 undefiend

  x = y; // (1) 연산을 먼저 수행한 뒤 (이 시점에서 x = 1 , y = 1)
  x = x - 1; // (2) 그 다음 변수를 대입 (이 시점에서 x = 0 , y = 1)
  console.log(`x:${x}, y:${y}`) // x:0, y:1
*/

// 제곱연산자(**)
// var exp =  2 ** 7; //
// console.log(exp); // 128 (2의 7승이다)

// 계수연산자(%)
// var mod = 5 % 2;
// console.log(mod); // 1 (나머지를 반환한다.)

/*
  2. 할당 연산자

  1. 변수 할당 연산자(=)
  2. 더하기 할당 연산자(+=)
  3. 빼기 할당 연산자(-=)
  4. 곱하기 할당 연산자(*=)
  5. 제곱 할당 연산자(**=)
  6. 계수 할당 연산자(%=)
*/
// 변수 할당 연산자(=)
// var foo = "bar";
// console.log(foo);

// 더하기 할당 연산자(+=)
// var n = 1;
// n += 1; // n = n + 1
// console.log(n); // 2

// 빼기 할당 연산자(-=)
// var n = 1;
// n -= 1; // n = n - 1
// console.log(n); // 0

// 곱하기 할당 연산자(*=)
// var n = 1;
// n *= 1; // n = n * 1
// console.log(n); // 1

// 제곱 할당 연산자(**=)
// var n = 1;
// n **= 1; // n = n ** 1
// console.log(n); // 1

// 계수 할당 연산자(%=)
// var n = 1;
// n %= 1; // n = n % 1
// console.log(n); // 0

/*
  3. 비교 연산자

  1 동등 연산자(==)
  2 비동등 연산자(!=)
  3 엄격 동등 연산자(===)
  4 엄격 비동등 연산자(!==)
  5 크다(>)
  6 크거나 같다(>=)
  7 작다(<)
  8 작거나 같다(<=)
*/
// 동등 연산자(==) .. 엄격 동등 연산자를 더 선호한다.
// console.log(1 == 2); // false
// console.log("foo" == "bar"); // false
// console.log(2023 == "2023"); // true
// console.log(null == undefined); // true

// 비동등 연산자(!=)
// console.log(1 != 2); // true
// console.log("foo" != "bar"); // true
// console.log(2023 != "2023"); // false
// console.log(null != undefined); // false

// 엄격 동등 연산자(===)
// console.log(1 === 2); // false
// console.log("foo" === "bar"); // false
// console.log(2023 === "2023"); // false
// console.log(null === undefined); // false

// 엄격 비동등 연산(!==)
// console.log(1 !== 2); // true
// console.log("foo" !== "bar"); // true
// console.log(2023 !== "2023"); // true
// console.log(null !== undefined); // true

/*
  4. 논리 연산자

  1 && (AND)
  2 || (OR) 
  3 ! (NOT)
*/
// &&(AND) : 표현식이 모두 참일 경우 true를 리턴한다 (표현식1 && 표현식 2)
// console.log(1 > 0 && 1 < 2); // true : 두개다 참일떄
// console.log(1 < 0 && 1 < 2); // false : 한개만 참일때

// ||(OR) : 표현식 중 하나가 참이면 true를 리턴한다 (표현식1 || 표현식2)
// console.log(1 > 0 || 1 < 2); // true : 두개다 참일떄
// console.log(1 < 0 || 1 < 2); // true : 한개만 참일떄
// console.log(1 < 0 && 1 > 2); // false : 둘다 거짓일떄

// !(NOT) : 표현식의 반대값을 리턴한다 (!표현식)
// console.log(!(1 > 0)); // false : ()안이 참일떄
// console.log(!(1 < 0)); // true : ()안이 거짓일떄

// Boolean 타입이 아닌 값을 부정할 경우
// console.log(!null); // true
// console.log(!undefined) //true
// console.log(!0) // true
// console.log(!2023) // false
// console.log(!"") // true (빈 문자열이 아닌 경우를 부정할떄 true)
// console.log(!" ") // false (빈 문자열인 경우를 부정할떄 false)
// console.log(!"foo") // false

/*
  5. 타입 연산자 : 변수의 타입을 리턴한다.
*/
// var foo = "bar";
// console.log(foo); // bar
// console.log(typeof foo) // string

/* 1000lines */

/*
/*
  조건문

  1 if 조건문
  2 switch 조건문
  3 ? (삼항연산자) 조건문
*/

/* 1000lines */

/* 
  if 조건문

  1 if 조건문
  2 if/else 조건문
  3 if/else if/else 조건문
*/
// 1. if 조건문 : if(조건){실행문} 조건이 참일떄 실행이 된다.
// var year = 2023;
// if (year === 2023){
//   console.log("올해입니다.");
// }

// 2. if / else 조건문 : if(조건){실행문} else{실행문} : 조건이 참일때 if문에서 다른 조건일떄 if else 실행이 된다.
// var year = 2022;
// if (year === 2023){
//   console.log("올해입니다.");
// } else {
//   console.log("올해가 아닙니다.")
// }

// 3. if / else if / else : if(조건){실행문} else if(조건문){실행문} else{실행문} : 조건을 세부화 시킬 수 있다.
// var year = 2024;
// if(year === 2023){
//   console.log("올해입니다.");
// } else if (year === 2024){
//   console.log("내년입니다.");
// } else {
//   console.log("숫자를 잘못입력하셨습니다.");
// }

/*
  switch 조건문
  엄격동등연산을 수행한다
*/
// var year = 2025;
// switch(year){
//   case 2022:
//     console.log("작년")
//     break;

//   case 2023:
//     console.log("올해")
//     break;

//   case 2024:
//     console.log("내년")
//     break;

//   default:
//     console.log("가까운 년도가 아닙니다.")
// }

// 1000line...

// switch(year){
//   case 2020:
//   case 2021:
//     console.log("작년")
//     break;

//   case 2023:
//     console.log("올해")
//     break;

//   case 2024:
//   case 2025:
//     console.log("내년")
//     break;

//   default:
//     console.log("가까운 년도가 아닙니다.")
// }

/*
  삼항연산자(?)
  조건 ? "값1" : "값2"
  조건이 참일 경우 값1을, 거짓일 경우 값2를 리턴한다.
*/
// var year = 2023;
// var r = year === 2023 ? "올해" : "올해가 아닙니다."
// console.log(r); // 올 해

// if(year === 2023){
//   console.log("올해")
// } else {
//   console.log("올해가 아닙니다.")
// }

/*
  Q. 나이가 성인이면 "성인입니다" 그렇지 않으면
  "성인이 아닙니다"를 출력하는 조건문을 만들어보세요

  1. if/else 조건문 이용
  2. 삼항연산자 이용
*/
// 1. if/else 조건문 이용
// var age = 25;
// if(age >= 20){
//   console.log("성인");
// } else {
//   console.log("미성년자")
// }

// 2. 삼항연산자 이용
// var current_age = age >= 20 ? "성인" : "미성년자";
// console.log(current_age);

/* 1000lines */

/*
  반복문

  1. for 반복문
  2. while 반복문
*/
// 1. for 반복문
// for(변수초기값; 반복조건; 변수값 증가){실행문}
// for(var i = 1; i <= 10; i++){
//   console.log(i);
// }

// 2. while 반복문
// var i = 1; // 변수 초기값
// while(i <= 10){ // while(반복 조건)
//   console.log(i);

//   i++ // 변수값 증가
// }

// Q. for, while 반복문을 사용해서 1부터 10까지의 합을 구하시오.
// for문
// var sum = 0;
// for(i = 1; i <= 10; i++){
//   sum += i;
// }
// console.log(sum); // 55

// while문
// var i = 1;
// var sum = 0;
// while(i<= 10){
//   sum += i;

//   i++
// };
// console.log(sum); // 55

// Q. for, while 반복문을 사용해서 1, 1/2, 1/3, ... 1/10까지의 합을 구하시오.
// for문
// var sum = 0;
// for(i = 1; i <=10; i++){
//   sum += 1/i;
// }
// console.log(sum);

// while문
// var sum = 0;
// var i = 1;
// while(i <= 10){
//   sum += 1/i;

//   i++
// }
// console.log(sum);

/* 1000lines */

/*
  변수

  1 기본 사용 방법
  2 전역 변수와 지역 변수
*/

// 기본 사용
// var foo = "bar"; // 변수 초기화
// console.log(foo); // bar

// var foo = "bar"; // 변수 초기화
// foo = "baz"; // 변수 재정의
// console.log(foo); // baz

// var foo; // 변수 선언
// foo = "bar"; // 변수 정의
// console.log(foo); // bar

/*
  전역 변수와 지역변수
*/
// 전역 변수(global variables)
// 소스 코드 어디에서든 접근가능하다.
// var varInGlobal = true;
// console.log(varInGlobal);

// 지역 변수(local variables)
// 함수 내에서 선언된 변수, 해당함수 내에서만 접근가능하다.
// function f(){
//   var varInFunction =  true;
//   console.log(varInFunction);
// }
// console.log(varInFunction); // 접근 불가능.
// f();

/* 1000lines */

/*
  함수
  호출할 때만 실행되는 코드

  1 함수 선언 방법
  2 Hoisting
  3 매개변수와 인자
  4 return
  5 콜백
*/

// 함수 선언방법
// function f(){
//   // 함수 선언
//   console.log("foo");
// }
// f(); // 함수 호출

// Hoisting (게양)
// 함수 선언이 게양(올라간다).
// f()
// function f(){
//   console.log("foo")
// }

/*
  매개변수와 인자(Parameter and Argument)
*/
// function add(x,y){
//   // 매개변수 : 인자를 치환한 문자, x 와 y
//   console.log("결과:", x + y) // 3
// }
// add(1,2) // 인자 : 실제 함수에 전달되는 값

/*
  return

  함수는 결과값을 리턴할 수 있다.
*/
// function add(x,y){
//   return x + y;
// }

// var r = add(1,2);
// console.log(r); // 결과 : 3

/*
  콜백(calkback)
  함수 인자
*/
// function f(calkback){
//   var r = calkback();

//   console.log(r);
// }

// function cb(){
//   return "foo";
// }

// f(cb); // cb함수는 콜백함수이다.

// 콜백의 사용예시
// function getTime(){
//   // 현재시간을 Time 변수에 담는다.
//   var time = new Date().toLocaleTimeString();

//   console.log(time);
// }
// // setInterval(callback, ms) : ms마다 callback함수를 실행한다.
// // 1000ms = 1s
// setInterval(getTime, 1000);

/*
  Q. 나이를 입력받아
  성인이면 "성인" 그렇지 않으면 "미성년자"를 출력하는
  함수를 만들어보세요.
*/
// function isAdult(age){
//   if(typeof age !== "number"){
//     console.log("잘못 입력했습니다.")
//     return; // 함수 실행을 중단한다.
//   }

//   if(age >= 20){
//     console.log("성인")
//   } else {
//     console.log("미성년자")
//   }
// }
// isAdult(25);
// isAdult("잘못 입력했습니다");

/* 1000lines */

/*
  배열
  한개 이상의 값을 가지는 데이터 타입이다.

  1. 배열에 접근하기
  2. 배열 메서드
  3. 배열 순회
*/
// 1. 배열에 접근하기
// var arr = ["foo", "bar", "baz"];
// console.log(arr); // foo, bar, baz
// console.log(arr[0]); // foo
// console.log(arr[1]); // bar
// console.log(arr[2]); // baz
// console.log(arr.length); // 3

/*
  배열 메서드
  배열에 특정한 작업을 수행한다.

  1. push
  2. pop
  3. concat
  4. sort 
*/
// push [new item1, new item2, ...]
// var arr = ["foo", "bar"];
// arr.push("baz"); // 배열의 마지막에 새 아이템을 추가한다.
// console.log(arr); // foo, bar, baz

// pop
// var arr = ["foo", "bar", "baz"];
// arr.pop(); // 배열에 마지막 아이템을 제거한다.
// console.log(arr); // foo, bar

// Array1.concat(Array2, Array3, ...)
// var Array1 = ["foo", "bar"];
// var Array2 = ["baz", "duck"];
// var newArray = Array1.concat(Array2); // 배열을 연결(concatenation)한다.
// console.log(newArray); // foo, bar, baz, duck

// sort()
// var arr = ["foo", "bar", "baz"];
// arr.sort(); // 문자 배열일 경우 알파벳순, 숫자일 경우 오름차순으로 정렬한다.
// console.log(arr); // bar, baz, foo

/*
  배열 순회하기
  배열에 특정한 작업을 수행한다.
*/
// 문자 배열의 각 문자열을 대문자로 변환한다.
// var arr = ["foo", "bar", "baz"];
// for(var i = 0; i < arr.length; i++){
//   // i변수를 인덱스로 활용한다.
//   console.log(arr[i].toUpperCase()); // FOO, BAR, BAZ
// }

// 필터 작업
// var arr = ["foo", "bar", "baz"];
// for(var i = 0; i < arr.length; i++){
//   // arr[i] = foo, bar, baz
//   // foo[0], bar[0], baz[0] === "b" (첫 글자가 b로 시작하는 요소)
//   if(arr[i][0] === "b"){
//     console.log(arr[i]);
//   } // bar, baz
// }

/*
  Q. 맥주 리스트에 미국 맥주를 추가해보세요.
*/
// var beers = ["기네스", "하이네캔"]
// var add_beer = "버드와이저"

// beers.push(add_beer);
// console.log(beers); // ["기네스", "하이네캔", "버드와이저"]

// var beer = beers.concat(add_beer);
// console.log(beer); // ["기네스", "하이네캔", "버드와이저"]

/*
  Q. 성인의 나이만 콘솔에 출력해보세요. (배열 순회)
*/

// var ages = [12, 19, 23, 30];

// 필터링 작업
// for(var i = 0; i < ages.length; i++){
//   if(ages[i] > 20){
//     console.log(ages[i]); // 23 30
//   };
// };

/* 1000lines */

/*
  객체 (object)

  함수와 데이터의 집합
*/

// var cat = {
//   // 속성(Properties)
//   name : "치즈",
//   home : null,
//   // 객체내 함수를 메서드(Method)라고 칭한다.
//   sound : function(){
//     return "야옹"
//   }
// }

// cat 객체에 접근하기
// console.log(cat);

// cat 객체 속성에 접근하기
// console.log(cat.name); // name 속성 출력 : 치즈
// console.log(cat["name"]); // name 속성 출력 : 치즈

// console.log(cat.home); // home 속성 출력 : null
// console.log(cat["home"]); // home 속성 출력 : null

// console.log(cat["sound"]); // sound 메서드 출력 : [function : sound]
// console.log(cat.sound()); // sound 메서드 호출 : 야옹

// console.log(cat.color); // 존재하지 않는 속성에 접근 : undefined
// console.log(cat["color"]); // 존재하지 않는 속성에 접근 : undefined

// cat 객체 속성 추가
// cat.age = 2; // { name : "치즈", home : null, sound: [Function: sound], age : 2}
// // cat["age"] = 2; // { name : "치즈", home : null, sound: [Function: sound], age : 2}
// console.log(cat);

// cat 객체 속성 수정
// cat.home = "삼산동"; // { name : "치즈", home : "삼산동", sound: [Function: sound], age : 2}
// // cat["home"] = "삼산동"; // { name : "치즈", home : "삼산동", sound: [Function: sound], age : 2}
// console.log(cat);

// cat 객체 속성 삭제
// delete cat.home; // { name : "치즈", sound: [Function: sound], age : 2}
// // delete cat["home"]; // { name : "치즈", sound: [Function: sound], age : 2}
// console.log(cat);

/*
  Q. 기네스 맥주가 재입고 되었습니다.
  객체의 속성을 업데이트해보세요.
*/

// var irishBear = {
//   name : "기네스",
//   origin : "아일랜드",
//   available : false // 품절
// }

// irishBear.available = true;
// // irishBear["available"] = true;
// console.log(irishBear)

/*
  배열 순회를 통해서 맥주의 이름을 대문자로 출력해보세요.
*/

// var beers = [
//   {name : "Guinness", origin : "Ireland"},
//   {name : "Heineken", origin : "Netherlands"},
//   {name : "Budwiser", origin : "USA"}
// ];

// for(var i = 0; i < beers.length; i++){
//   console.log(beers[i].name.toLocaleUpperCase()); // GUINNESS, HEINEKEN, BUDWISER
//   // console.log(beers[i]["name"].toLocaleUpperCase()); // GUINNESS, HEINEKEN, BUDWISER
// };

/* 1000lines */

/*
  클래스(Class)
  객체 생성을 위한 틀

  1. 클래스와 인스턴스
  2. 생성자
  3. 상속
  4. static 속성과 메서드
  5. 내장 클래스
  6. 리터럴 표기법
*/

/*
  클래스와 인스턴스

  인스턴스 : 클래스로부터 생성된 객체
*/

// 클래스의 이름은 대문자로 시작해야한다.
// class Beer {
//   // 클래스의 멤버
//   name;
//   origin;
//   available;
// }

// var irishBear = new Beer
// console.log(irishBear);

// irishBear.name = "기네스";
// irishBear["name"] = "기네스";
// irishBear.origin = "아일랜드";
// irishBear["origin"] = "아일랜드";
// irishBear.available = "false";
// irishBear["available"] = "false";

// console.log(irishBear);
// console.log(irishBear instanceof Beer) // true

// var dutchBeer = new Beer();
// dutchBeer.name = "하이네캔";
// dutchBeer["name"] = "하이네캔";
// dutchBeer.origin = "네덜란드";
// dutchBeer["origin"] = "네덜란드";
// dutchBeer.available = "true";
// dutchBeer["available"] = "true";

// console.log(dutchBeer);
// console.log(dutchBeer instanceof Beer) // true

/*
  생성자(constructor)

  인스턴스의 속성 설정을 처리한다.
*/

// class Beer {
//   // 옵션(option)
//   constructor(name, origin, available){
//     // this : 인스턴스
//     this.name = name,
//     this.origin = origin,
//     this.available = available;
//   }

//   name;
//   origin;
//   available;
// }

// 생성자를 통해 간편하게 속성 추가
// var irishBear = new Beer("기네스", "아일랜드", "false")
// console.log(irishBear);

/*
  상속

  인스턴스는 클래스의 속성과 메서드를 상속받는다.
*/

// class Beer {
//   // ...

//   // 클래스에 속한 함수 - 메서드(Method)

//   drink(){
//     return "시원하다!"
//   }
// }

// var beer = new Beer();
// console.log(beer.drink()) // 시원하다! : Beer 클래스의 모든 인스턴스는 drink 메서드(Method)에 접근할 수 있다.

/*
  static 속성과 메서드

  클래스와 관련된 유용한 기능을 제공한다.
*/

// class Beer {
//   // ...

//   static history = "기원전 3000년"

//   static recipe(){
//     return "밀, 홉, 효모 그리고 물"
//   }
// }

// class(클래스) 자체가 호출한다.
// console.log(Beer.history); // 기원전 3000년
// console.log(Beer.recipe()); // 밀, 홉, 효모 그리고 물

// class Beer{
//   constructor(name, origin, available){
//     this.name = name;
//     this.origin = origin;
//     this.available = available;
//   };

//   name;
//   origin;
//   available;

//   beer_talk = "기원전 3000년";

//   drink(){
//     return "시원하다!";
//   };

//   static history = "기원전 3000년";

//   static recipe(){
//     return "밀, 홉, 효모 그리고 물"
//   };
// };

// var beer = new Beer("기네스", "아일랜드", true);
// console.log(beer);
// console.log(beer.talk);
// console.log(beer.drink());

// console.log(Beer.history);
// console.log(Beer.recipe());

/*
  자바스크립트에 내장된 클래스

  1. 문자처리 : String
  2. 숫자와 날짜 : Number, Math, Date
  3. 인덱스가 있는 컬렉션 : Array
  4. 에러 : syntaxError, ReferenceError ... 등
  5. 기타 : Object, Promise, JSON
*/

// var pi = Math.PI; // 내장된 클래스의 static 속성 사용 예시
// console.log(pi);  // 3.141592653589793

/*
  리터럴 표기법

  값만 작성한다.
*/

// String의 인스턴스
// var foo = new String("bar");
// console.log(foo); // [String : "bar"]
// var foo = "bar";
// console.log(foo); // bar

// Number의 인스턴스
// var year = new Number(2023);
// console.log(year); // [Number : 2023]
// var year = 2023;
// console.log(year); // 2023

// 리터럴 표기를 할수없는 클래스
// var date = new Date();
// console.log(date); // 현재 날짜

// FAQ
// {key : value} 객체
// console.log("foo".toUpperCase())

/*
  Q. 다음 조건을 만족하는 클래스를 선언하고 인스턴스를 생성해보세요.

  1. 클래스 이름 : Car

  2. 클래스 멤버 : name, brand, color

  3. 속성 설정을 위한 생성자를 가지고 있다.

  4. static 메서드 : getAge (구매일을 입력하면 차의 연식을 알려준다.) 
*/

// class Car{
//   constructor(name, brand, color){
//     this.name = name;
//     this.brand = brand;
//     this.color = color;
//   };

//   name;
//   brand;
//   color;

//   static getAge(x){
//     var current_year = new Date().getFullYear()
//     return `차의 연식은 ${current_year - x}년 입니다.`
//   };
// };

// car = new Car("GV80", "Hyundai", "gray");
// console.log(car);
// console.log(Car.getAge(2020));

/* 1000lines */

/*
  에러와 에러처리

  1. 에러 개념
  2. 에러 처리
  3. 에러의 종류
  4. 예외 (Exception)
*/

/*
  1. 에러 개념

  에러는 프로그램을 중단시킨다.
*/
// console.log(foo); // app crashed (실행 중단)

/*
  2. 에러 처리

  try {} catch (){} 구문
*/
// try{
//   // 코드 작성
//   console.log(foo);

// } catch (error){
//   // 에러 처리
//   console.log(error);

// };

/*
  3. 에러의 종류

  1. SyntaxError
  2. ReferenceError
  3. TypeError
  4. RangeError
  5. URIError
*/
/*
  SyntaxError

  문법 에러
  컴파일 에러를 발생시킨다.
*/
// try{
//   // SyntaxError : unexpected token ')'
//   // try {} catch (){} 구문으로 처리할 수 없다.
//   console.log(2023));

// } catch (error){

//   console.log(error);

// };

/*
  ReferenceError

  존재하지 않는 변수를 참조할 때 발생한다.
*/
// try{
//   // ReferenceError (error name)
//   // foo is not defined (error message)
//   // error stack trace
//   console.log(foo);

// } catch (error){

//   console.log(error);

// };

/*
  TypeError

  변수나 매개변수가 유효한 타입이 아닐 떄 발생한다.
*/
// try{
//   // TypeError : the "callback" argument must be of type function Received null
//   // setInterval(callback, ms) : (callback : 함수 o /  null x)(에러의 이유)
//   setInterval(null, 1000);

// } catch (error){

//   console.log(error);

// };

/*
  RangeError

  값이 지정된 범위를 벗어났을 때 발생한다.
*/
// try{
//   // RangeError : toPrecision() argument must be between 1 and 100
//   var pi = Math.PI;
//   console.log(pi.toPrecision(200));

// } catch (error){

//   console.log(error);

// };

/*
  URIError

  encodeURI()와 decodeURI() 메서드에 잘못된 인자를 전달했을 경우 발생한다.
*/
// try {
//   // URI malformed (URI가 잘못생성되었습니다.)
//   // Error 이유 : %만은 인자로 가질 수 없다.
//   console.log(decodeURI('%'));

// } catch (error){

//   console.log(error);

// };

/*
  예외 (Exception)

  필요한 경우 에러를 발생시킨다.
*/
// try {

//   var age = 15;
//   console.log("학생", "술 한병 주세요.");

//   if(age < 18){

//     // 에러를 준다.
//     // 대표적으로 로그인에서 사용할 수 있다.
//     throw console.log("미성년자는 술을 살 수 없습니다.")

//   }

//   console.log("직원", "네 여기 있습니다.");

// } catch (error){

//   console.log(error);

// };

/* 1000lines */

/*
  비동기 작업

  앱에서 블로킹을 방지하기 위해 사용된다.
  예) 서버에서 데이터 가져오기 등...

  1. 동기작업 (Synchronous operation)
  2. 비동기작업 (Asynchronous operation)
*/

/*
  1. 동기 작업

  코드가 순서대로 실행된다
  대부분의 작업은 동기 작업이다.
*/
// function f(){
//   console.log("첫번째 동기작업 입니다.")
// }
// f();

// function next_f(){
//   console.log("두번째 동기작업 입니다.")
// }
// next_f();

/*
  2. 비동기 작업

  빠른 작업부터 실행된다.
  예) 서버에서 데이터 가져오기 등...
*/
// function fetchData(callback){

//   setTimeout(function(){

//     callback(null, "duck");

//   },1000);

// };

// fetchData(function(error, data){
//   if(error){
//     throw error
//   }

//   console.log("서버에서 가져온 데이타:", data);
// });

// // 다음 작업부터 실행된다. (blocking : 대기 및 중단)
// console.log("다음 작업입니다.");

/*
  JSON (JavaScript Object Notation)
  자바스크립트 객체를 저장하거나 전송하기 위한 텍스트 포맷

  1. 객체와 JSON
  2. JSON.stringify
  3. JSON.parse
*/

/*
  객체와 JSON
*/
// var obj = { foo : "bar" }; // 객체(Object)
// var json = '{ "foo" : "bar" }'; // JSON (string)

// console.log(obj); // { foo : "bar" }
// console.log(json); // { "foo" : "bar" }

// console.log(typeof obj) // Object
// console.log(typeof json); // String

/*
  JSON.stringify

  객체를 JSON으로 변환한다.
*/
// var obj = { foo : "bar" };
// console.log(obj); // { foo : "bar" }
// console.log(typeof obj) // Object

// var json = JSON.stringify(obj); // JSON.stringify() 객체를 JSON으로 변환한다.

// console.log(json); // JSON { "foo" : "var" }
// console.log(typeof json) // String

/*
  JSON.parse

  JSON을 객체로 변환한다.
*/
// var json = '{ "bar" : "foo" }'
// console.log(json); // { "bar" : "foo" }
// console.log(typeof json); // String

// var obj = JSON.parse(json); // JSON.parse() : JSON을 객체로 변환한다.

// console.log(obj); // { bar : "foo" }
// console.log(typeof obj); //Object

/* 1000lines */

/*
  자바스크립트 ES6 버전
  새로운 문법이 등장

  1 let, const
  2 새로운 메서드
  3 화살표 함수
  4 구조분해할당
  5 스프레드 연산자
  6 프로미스
*/

/*
  let, const, 블록 범위

  1. let
  2. const
  3. 블록 범위
*/

// 1. let
// 변수 선언 예약어, 재선언이 불가능
// let foo = "bar";
// console.log(foo); // bar
// let foo = "baz";
// console.log(foo); // 재선언 불가능(오류)

// 2. const (constant)
// 상수, 선언 후 값을 바꿀 수 없다.
// const foo = "bar";
// console.log(foo); // bar

// 3. 블록 범위 (block scope)
// let과 const는 블록 범위를 가진다.
// {} (블록)
// {
//   var varInBlock = true;
//   let letInBlock = false;
//   const constInBlock = false;
// }
// console.log(varInBlock); // true (접근 가능)
// console.log(letInBlock); // 접근 불가
// console.log(constInBlock); // 접근 불가

/*
  ES6 등장한 새로운 메서드

  1. Array.map
  2. Array.filter
  3. Object.keys
*/

// 1. Array.map
// 배열에 특정한 작업을 수행 후 업데이트 된 배열을 리턴한다.
// 각 item에 10을 곱한 새로운 배열을 만든다.
// var arr = [10, 20, 30];
// let updateArr = arr.map(function(item, index, self){
//   return item * 10;
// });
// console.log(updateArr); // 100, 200, 300

// 2. Array.filter
// 배열에 특정한 작업을 수행 후 업데이트 된 배열을 리턴한다.
// 필터링 작업
// var ages = [13, 20, 34, 40];
// var updateAges = ages.filter(function (item) {
//   // if (item > 18) {
//   //   return item;
//   // };

//   return item > 18; // return + 조건
// });
// console.log(updateAges); // 20, 34, 40

// Object.keys
// 객체의 키를 문자열 배열로 리턴한다.
var cat = {
  name : "치즈",
  home : null,
  sound : function(){
    return "야옹";
  }
};

