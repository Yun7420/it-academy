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
