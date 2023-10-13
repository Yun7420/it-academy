/* 
  2023. 10. 10(화) 작업 중...
  작성자 : 한상윤

  서브페이지(sub.html)에 적용
  스크롤시 배경색 변경 기능으로 구성된 js 입니다.
*/

// 스크롤시 배경색 변경
function scrollBackgroundChange() {
  let subPosterPage = document.querySelector(".subPosterPage");

  window.addEventListener("scroll", function () {
    let scrollTop = document.documentElement.scrollTop;

    if (scrollTop > 20) {
      subPosterPage.classList.add("active");
    } else {
      subPosterPage.classList.remove("active");
    }
  });
}

scrollBackgroundChange();