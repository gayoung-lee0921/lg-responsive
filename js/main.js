const mainSlider = new Swiper("#main-visual", {
  effect: "fade",
  loop: true,
  speed: 1500,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: "#main-visual .btn-next",
    prevEl: "#main-visual .btn-prev",
  },
  pagination: {
    el: ".pagination",
    type: "bullets",
    clickable: true,
  },
});

const introduceSlider = new Swiper("#introduce .banner", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: "#introduce .btn-next",
    prevEl: "#introduce .btn-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
  },
});

const activitySlider = new Swiper("#activity .banner", {
  slidesPerView: 1,
  slidePerGroup: 1,
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: "#activity .btn-next",
    prevEl: "#activity.btn-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      slidePerGroup: 2,
    },
    1280: {
      slidesPerView: 3,
      slidePerGroup: 3,
    },
    1400: {
      slidesPerView: 4,
      slidePerGroup: 4,
    },
  },
});

const noticeSlider = new Swiper("#notice .banner", {
  slidesPerView: 1,
  slidePerGroup: 1,
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: "#notice .btn-next",
    prevEl: "#notice .btn-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      slidePerGroup: 2,
    },
    1280: {
      slidesPerView: 3,
      slidePerGroup: 3,
    },
  },
});
