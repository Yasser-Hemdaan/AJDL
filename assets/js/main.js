var burgerBtn = document.querySelector(".burger");
var closeBtn = document.querySelector(".close");
var menuNavBody = document.querySelector(".menuNavBody");

burgerBtn.addEventListener("click", (e) => {
  menuNavBody.classList.add("smooth");
  menuNavBody.style.top = 0;
});

closeBtn.addEventListener("click", (e) => {
  menuNavBody.classList.add("smooth");
  menuNavBody.style.top = "";
  menuNavBody.style.display = none;
});

var owl = $(".owl-carousel");
owl.owlCarousel({
  items: 3,
  loop: true,
  margin: 30,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    800: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
});
