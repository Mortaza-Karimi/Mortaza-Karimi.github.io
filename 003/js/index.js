const slides = document.getElementsByClassName("slide");
const sliderBox = document.getElementById("slider_box");
const forDragChange = document.getElementById("forDragChange");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
console.log(slides.length);
let currentKey = 0;
var animationInterval = setInterval(() => {
  nextSlide();
}, 1000);

const nextSlide = () => {
  if (currentKey == slides.length - 1) {
    slides[currentKey].style.display = "none";
    currentKey = 0;
    console.log(currentKey);
    slides[currentKey].style.display = "block";
    return;
  }
  slides[currentKey].style.display = "none";
  slides[currentKey + 1].style.display = "block";
  currentKey++;
  console.log(currentKey);
  return;
};

const prevSlide = () => {
  if (currentKey == 0) {
    slides[currentKey].style.display = "none";
    currentKey = slides.length - 1;
    console.log(currentKey);
    slides[currentKey].style.display = "block";
    return;
  }
  slides[currentKey].style.display = "none";
  slides[currentKey - 1].style.display = "block";
  currentKey--;
  console.log(currentKey);
  return;
};

console.log("init");
const interval = null;

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

sliderBox.addEventListener("mouseenter", () => {
  clearInterval(animationInterval);
  console.log("cleared");
});

sliderBox.addEventListener("mouseleave", () => {
  animationInterval = setInterval(() => {
    nextSlide();
  }, 1000);
  console.log("started");
});

var dragStartX = 0;
var dragEndX = 0;
var dragStartY = 0;
var dragEndY = 0;

forDragChange.addEventListener("mousedown", function (e) {
  dragStartX = e.pageX;
  dragStartY = e.pageY;
});

forDragChange.addEventListener("mouseup", function (e) {
  dragEndX = e.pageX - dragStartX;
  dragEndY = e.pageY - dragStartY;

  console.log("X: " + dragEndX + " Y: " + dragEndY);
  if (dragEndX < 0) {
    prevSlide();
  } else {
    nextSlide();
  }
});

forDragChange.addEventListener("click", () => {
  console.log("click");
});
