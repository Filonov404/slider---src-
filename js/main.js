const slide = document.querySelector('.slide-img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener("click", showPrev);
next.addEventListener("click", showNext);

const srcs = [];

srcs.push("images/1.jpg");
srcs.push("images/2.jpg");
srcs.push("images/3.jpg");
srcs.push("images/4.jpg");
srcs.push("images/5.jpg");
srcs.push("images/6.jpg");
srcs.push("images/7.jpg");
srcs.push("images/8.jpg");


let currentIndex = 1;

slide.src = srcs[currentIndex];

function showPrev() {
  currentIndex--;
  slide.src = srcs[currentIndex];
  if ( currentIndex <= 0 ) {
    currentIndex = srcs.length 
  }
}

function showNext() {
  currentIndex++;
  slide.src = srcs[currentIndex];
  if (currentIndex >= (srcs.length - 1)){
    currentIndex = - 1 ;
  }
}

