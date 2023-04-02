let menuIcon = document.querySelector(".menu__icon");

menuIcon.addEventListener("click", ()=>{
    menuIcon.classList.toggle("move")
})

// services swiper

var swiper = new Swiper(".swiper__content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });