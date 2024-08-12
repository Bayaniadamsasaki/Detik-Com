var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1000: {
          slidesPerView: 3,
          spaceBetween: 20,
      },

      768: {
          slidesPerView: 2,
          spaceBetween: 20,
      },
      484: {
          slidesPerView: 1,
          spaceBetween: 20,
      },
      280: {
          slidesPerView: 1,
          spaceBetween: 20,
      },
      100: {
          slidesPerView: 1,
          spaceBetween: 10,
      },
  },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });