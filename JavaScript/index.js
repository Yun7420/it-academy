/*
  프로미스 객체 (Promiss Object)

  비동기 작업의 성공 및 실패 여부와 그 결과값을 나타낸다.
  비동기 작업의 가독성을 높이기 위해 사용된다.

  1. 프로미스의 구조
  2. 실제 사용 예시
  3. asyn / await
*/

/*
  프로미스의 구조

  1. 프로미스 객체
  두개의 매개변수가 있는 콜백을 가진다.
  resolve와 rejected

  1) resolve
  비동기 작업이 성공한 경우 호출된다.

  2) rejected
  비동기 작업이 실패한 경우 호출된다.

  ---

  2. 프로미스 객체의 상태

  1) fullfilled
  비동기 작업의 성공

  2) rejected
  비동기 작업의 실패

  3) pending
  대기 상태

  ---

  3. 프로미스 객체의 메서드
  
  1) then
  성공한 경우 데이터를 처리한다.

  2) catch
  실패한 경우 에러를 처리한다.

  3) finally
  성공 실패와 관계없이 최종적으로 처리되는 작업 관리
*/

// 프로미스 객체
// const promise = new Promise((res, rej) => {
//   // 비동기 작업의 성공
//   res({ foo : "bar"});
// });

// console.log(promise);
// // Promise { { foo : "bar" } } 

// promise
//   .then((value) => { // 데이터를 처리하는 부분
//     console.log(value);
//   })

//   .catch((error) => { // 에러를 처리하는 부분
//     console.log(error);
//   })

// console.log("다음 작업");

/*
  2. 실제 사용 예시

  서버에 데이터를 요청하는 예시
*/

// 서버에 데이터를 요청하는 함수
// 결과로 프로미스 객체를 리턴한다.
// function fetchData(){
//   const promise = new Promise((res, rej) => {
//     res("데이터");
//   });

//   return promise;
// };

// fetchData()
//   .then((data) => {
//     console.log("서버에서 전송받은 데이터:", data);
//   })

//   .catch((error) => {
//     console.log(error);
//   })

/*
  async / await

  프로미스 객체가 결과를 리턴할 때까지 기다린다.
  프로미스 작업의 가독성을 향상시킨다.
  try / catch 구문에서 에러를 처리한다.
*/

// 서버에 데이터를 요청하는 함수
// 결과값으로 프로미스 객체를 리턴한다.
// function fetchData(){
//   const promise = new Promise((res, rej) => {
//     res("데이터");
//   });

//   return promise;
// };

// async function f(){
//   try {
    
//     // 결과를 반환할 때까지 기다린다.
//     const data =  await fetchData();

//     // 반환한 결과에 접근
//     console.log("서버에서 전송받은 데이터:", data);

//   } catch(error) {

//     console.log(error);

//   };
// };