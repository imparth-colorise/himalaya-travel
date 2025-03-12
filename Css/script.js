const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  speed: 6500,
  autoplay: {
  delay: 0,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    
    1024: {
      slidesPerView:1
    },
  }
});


function stopAutoplay() {
  const swiperTranslate = swiper.getTranslate();
  swiper.setTranslate(swiperTranslate);
  swiper.autoplay.stop();
}

  function startAutoplay() {
  swiper.slideTo(swiper.activeIndex, 3000, false);
  swiper.autoplay.start();
  }


  container.addEventListener ("mouseenter", () => stopAutoplay());
  container.addEventListener ("mouseleave", () => startAutoplay());
  
  