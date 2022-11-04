
// configure Swiper to use modules
const swiperwork = new Swiper('.slider_work', {
   // Optional parameters
   spaceBetween: 30,
   slidesPerView: 1,
   // If we need pagination
   pagination: {
      el: '.slider_work-pagination',
      clickable: true,

   },
   breakpoints: {

      768: { slidesPerView: 3 },
      650: {
         slidesPerView: 2
      }
   },

   // Navigation arrows

});
var stars = document.querySelectorAll(".star__item"),
   starsActive,
   starsSelect;

stars.forEach((element, index) => {

   element.addEventListener('mouseover', () => {
      starsActive = Array.prototype.slice.call(stars, 0, index + 1);
      starsActive.forEach((star) => {
         star.classList.add("star__item_active");
      });
   });

   element.addEventListener('mouseout', () => {
      stars.forEach((star) => {
         star.classList.remove("star__item_active");
      });
   });

   element.addEventListener('click', () => {
      stars.forEach((star) => {
         star.classList.remove("star__item_select");
      });
      starsActive.forEach((star) => {
         star.classList.add("star__item_select");
      });
      starsSelect = starsActive;
   });

});

const video = document.getElementById("video");
const circlePlayButton = document.getElementById("circle-play-b");

function togglePlay() {
   if (video.paused || video.ended) {
      video.play();
   } else {
      video.pause();
   }
}

circlePlayButton.addEventListener("click", togglePlay);
video.addEventListener("playing", function () {
   circlePlayButton.style.opacity = 0;
});
video.addEventListener("pause", function () {
   circlePlayButton.style.opacity = 1;
});
