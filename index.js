document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("background-video");


  video.addEventListener("ended", function () {
    video.currentTime = 0;
    video.play();
  });
});


$(document).ready(function () {
  $('.carousel').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,


    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
});