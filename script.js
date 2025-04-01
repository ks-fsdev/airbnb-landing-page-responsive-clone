const showMapBtn = document.querySelector(".show-map ");

//detecting scroll
document.addEventListener("DOMContentLoaded", function () {
  var btnHideSeek = document.getElementById("btn-hideandseek");

  window.addEventListener("scroll", function () {
    var tarPos = btnHideSeek.getBoundingClientRect().top;

    if (tarPos < window.innerHeight && tarPos > 0) {
      showMapBtn.classList.add("disappear");
      showMapBtn.classList.remove("appear");
    } else {
      showMapBtn.classList.remove("disappear");
      showMapBtn.classList.add("appear");
    }
  });
});
