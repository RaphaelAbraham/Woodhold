scrolldown = document.querySelector(".scrolldown");

window.addEventListener("scroll", (e) => {
  // console.log(window.scrollY);
  if (window.scrollY > 777) {
    scrolldown.style.display = "none";
  } else {
    scrolldown.style.display = "block";
  }
});
