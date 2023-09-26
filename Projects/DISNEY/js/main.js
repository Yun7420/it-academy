/* 
    JS 설명란
*/

// main page scroll event


// Visual (Slide Auto Play)
function visual() {
  let poster = document.querySelectorAll(".poster");
  let dot = document.querySelectorAll(".dot");
  let posterName = document.querySelectorAll(".posterName");

  let prevBtn = document.querySelector(".PrevBtn");
  let nextBtn = document.querySelector(".NextBtn");

  let currentIndex = 0;
  let firstIndex = 0;
  let lastIndex = poster.length - 1;
  let previousIndex = 0;

  // window load시 first slide 출력
  function firstSlide() {
    // first posterImage
    poster[firstIndex].classList.add("active");
    // first dot
    dot[firstIndex].classList.add("active");
    // first posterName
    posterName[firstIndex].classList.add("active");
  }

  firstSlide();

  // active 추가시 posterImage 변경, dot Color 변경, posterName 변경
  function activeSetting() {
    // posterImage 전 후 처리
    poster[previousIndex].classList.remove("active");
    poster[currentIndex].classList.add("active");
    // dot 전 후 처리
    dot[previousIndex].classList.remove("active");
    dot[currentIndex].classList.add("active");
    // posterName 전 후 처리
    posterName[previousIndex].classList.remove("active");
    posterName[currentIndex].classList.add("active");
  }

  // index 미만 = lastIndex, 초과 = firstIndex
  function overIndex() {
    // index 미만일 경우
    if (currentIndex < firstIndex) currentIndex = lastIndex;
    // index 초과일 경우
    if (currentIndex > lastIndex) currentIndex = firstIndex;
  }

  // 자동 이미지 전환 (3초)
  function autoPlay() {
    currentIndex += 1;

    overIndex();

    activeSetting();

    previousIndex = currentIndex;
  }

  setInterval(autoPlay, 3000);

  // 이전 버튼 클릭 시 autoplay 초기화 및 이전 이미지 이동
  function prevBtnMove() {
    clearInterval(autoPlay);

    prevBtn.addEventListener("click", function () {
      currentIndex -= 1;

      overIndex();

      activeSetting();

      previousIndex = currentIndex;
    });
  }

  prevBtnMove();

  // 다음 버튼 클릭 시 autoplay 초기화 및 다음 이미지 이동
  function nextBtnMove() {
    clearInterval(autoPlay);

    nextBtn.addEventListener("click", function () {
      currentIndex += 1;

      overIndex();

      activeSetting();

      previousIndex = currentIndex;
    });
  }

  nextBtnMove();

  // dot 버튼 클릭 시 autoplay 초기화 및 해당 이미지 이동
  function dotMove() {
    clearInterval(autoPlay);

    for (let i = 0; i < dot.length; i++) {
      dot[i].addEventListener("click", function () {
        currentIndex = i;

        overIndex();

        activeSetting();

        previousIndex = currentIndex;
      });
    }
  }

  dotMove();
}

visual();

// Faq (Show / Hide)
function Faq() {
  let faqTitle = document.getElementsByClassName("faqTitle");

  for (let i = 0; i < faqTitle.length; i++) {
    faqTitle[i].addEventListener("click", function (e) {
      e.target.classList.toggle("checked");
      e.target.nextElementSibling.classList.toggle("show");
    });
  }
}

Faq();