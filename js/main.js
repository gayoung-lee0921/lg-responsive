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
  slidesPerView: 2,
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: "#introduce .btn-next",
    prevEl: "#introduce .btn-prev",
  },
});

const activitySlider = new Swiper("#activity .banner", {
  slidesPerView: 4,
  slidePerGroup: 4,
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: "#activity .btn-next",
    prevEl: "#activity.btn-prev",
  },
});

const noticeSlider = new Swiper("#notice .banner", {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 30,
  navigation: {
    nextEl: "#notice .btn-next",
    prevEl: "#notice .btn-prev",
  },
});
