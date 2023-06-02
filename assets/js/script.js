
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


window.addEventListener('resize', function() {
  var element = document.getElementById('myElement');
  if (window.innerWidth < 380) {
    var swiper = new Swiper(".mySwiper", {
      watchSlidesProgress: true,
      slidesPerView: 2,
    });
  }
  else if((window.innerWidth < 600)){
    var swiper = new Swiper(".mySwiper", {
      watchSlidesProgress: true,
      slidesPerView: 2,
    });
  }
  else if((window.innerWidth < 768)){
    var swiper = new Swiper(".mySwiper", {
      watchSlidesProgress: true,
      slidesPerView: 3,
    });
  } 
  else{
    var swiper = new Swiper(".mySwiper", {
      watchSlidesProgress: true,
      slidesPerView: 5,
    });
  }
});