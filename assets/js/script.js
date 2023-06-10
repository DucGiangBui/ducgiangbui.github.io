
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
    mybutton.style.transition = "0.5s"
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


var swiper = new Swiper ('.mySwiper', {
  slidesPerView: 2,
  spaceBetween: 10,
  breakpoints: {
    380:{
      slidesPerView: 1
    },
    480: {
      slidesPerView: 2
    },
    640: {
      slidesPerView: 2
    },
    768:{
      slidesPerView: 3
    },
    1024:{
      slidesPerView: 3
    },
    1050:{
      slidesPerView: 4
    },
    1080:{
      slidesPerView: 4
    }, 
  }
});