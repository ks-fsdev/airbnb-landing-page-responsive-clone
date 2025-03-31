// making on scroll menu
window.addEventListener("scroll", function () {
  let navbar = document.getElementById("navbar");
  navbar.classList.toggle("shrink", window.scrollY > 50);

  if (navbar.classList.contains("shrink")) {
    console.log("Shrink class added! ✅");
  } else {
    console.log("Shrink class removed! ❌");
  }
});

//scrolling
const scrollContainer = document.querySelector(".scroll-content");
scrollContainer.scrollBy({ left: -200, behavior: "smooth" });
scrollContainer.scrollBy({ left: 200, behavior: "smooth" });
