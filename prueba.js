const cardImg = document.querySelector(".card img"),
  menuBtn = document.querySelector(".menu-btn"),
  popular = document.querySelector(".popular"),
  more = document.querySelector(".more");

menuBtn.addEventListener("click", function () {
  cardImg.classList.toggle("img-expand");
  menuBtn.firstElementChild.classList.toggle("fa-times");
  menuBtn.classList.toggle("opened");
  more.classList.toggle("opened");

  document.querySelectorAll(".card").forEach((item) => {
    item.classList.toggle("opened");
  });
  document.querySelectorAll(".popular").forEach((item) => {
    item.classList.remove("opened");
  });
});

document.querySelectorAll(".popular").forEach((item) => {
  item.addEventListener("click", (event) => {
    item.classList.toggle("opened");
  });
});

