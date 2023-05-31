
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

window.addEventListener('load', function() {
  // Tạo một mảng chứa các class cho các skill-item
  var skillClasses = ['icon-primary', 'icon-secondary', 'icon-tertiary'];

  // Lặp qua tất cả các skill-item
  var skillItems = document.querySelectorAll('.skill-item');
  for (var i = 0; i < skillItems.length; i++) {
    // Thêm một class ngẫu nhiên từ mảng skillClasses
    var randomClass = skillClasses[Math.floor(Math.random() * skillClasses.length)];
    skillItems[i].classList.add(randomClass);
  }
});
