/* 
  2023. 09. 27(수) 작업 중...
  작성자 : 한상윤

  메인페이지(index.html)에 적용
  슬라이드 배너 & 롤링 배너 기능 & 슬라이드 업다운 기능 & 메인페이지 팝업 기능으로 구성된 js 입니다.
*/

// main page scroll event
function mainScroll() {
  // BoundingHeight을 구할 item 목록
  let boundingItem = document.getElementsByClassName("boundingItem");
  // viewport 높이 값
  let viewportHeight = window.innerHeight;

  // boundingItem 일정 범위 진입 시 opacity 및 위치 복구
  window.addEventListener("scroll", function () {
    for (let i = 0; i < boundingItem.length; i++) {
      let BoundingHeight = boundingItem[i].getBoundingClientRect().y;

      if (BoundingHeight < viewportHeight * 0.9) {
        boundingItem[i].style.opacity = "1";
        boundingItem[i].style.transform = `translateY(${0}px)`;
      } else {
        boundingItem[i].style.opacity = "0";
        boundingItem[i].style.transform = `translateY(${100}px)`;
      }
    }
  });
}

mainScroll();

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

// RollingBanner
function rollingBanner() {
  let rolling = document.querySelector(".rolling");
  let rollingList = document.querySelector(".rollingList");

  // cloneNode : 노드 복제. 기본값은 false. 자식 노드까지 복제를 원하면 true 사용
  let cloneRollingList = rollingList.cloneNode(true);

  // clone 복제
  rolling.appendChild(cloneRollingList);

  // animation 효과를 위한 class 추가
  rollingList.classList.add("original");
  cloneRollingList.classList.add("clone");
}

rollingBanner();

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

// 바닦페이지 load 시 팝업 구현
function loadPopup() {
  let body = document.querySelector("body");

  // load시 body에 overflow hidden 처리
  function loadBodyBlock() {
    body.classList.add("hidden");
  }

  loadBodyBlock();

  let loadPopup = document.querySelector(".loadPopupSection");
  let neverImageBtn = document.querySelector(".neverImageBtn");
  let noImageBtn = document.querySelector(".noImageBtn");

  // popup 다시 보지않기
  neverImageBtn.addEventListener("click", function () {
    body.classList.remove("hidden");
    loadPopup.remove();

    localStorage.setItem("removeLoadPopup", new Date());
  });

  removeLoadPopup = localStorage.getItem("removeLoadPopup");

  if (removeLoadPopup) {
    body.classList.remove("hidden");
    loadPopup.remove();
  }

  // popup 닫기
  noImageBtn.addEventListener("click", function () {
    body.classList.remove("hidden");
    loadPopup.remove();
  });
}

loadPopup();