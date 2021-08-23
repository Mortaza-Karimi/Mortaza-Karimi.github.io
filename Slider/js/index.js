const slides = document.getElementsByClassName("slide");
const sliderBox = document.getElementById("slider_box");
const forDragChange = document.getElementById("forDragChange");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const circlesDiv = document.getElementById("circles");
let currentKey = 0;
var animationInterval = setInterval(() => {
  nextSlide();
  generateCircles();
}, 1000);

const changeSlide = (value) => {
  slides[currentKey].style.display = "none";
  slides[value].style.display = "block";
  currentKey = value;
  generateCircles();
};

const generateCircles = () => {
  var circlesHTML = "";
  for (var i = 1; i <= slides.length; i++) {
    if (i == currentKey + 1) {
      circlesHTML +=
        "<div class='slideCircles slideCircleActive' onclick='changeSlide(" +
        (i - 1) +
        ")'></div>";
    } else {
      circlesHTML +=
        "<div class='slideCircles slideCircle' onclick='changeSlide(" +
        (i - 1) +
        ")'></div>";
    }
  }
  circlesDiv.innerHTML = circlesHTML;
};
generateCircles();

const nextSlide = () => {
  if (currentKey == slides.length - 1) {
    slides[currentKey].style.display = "none";
    currentKey = 0;
    slides[currentKey].style.display = "block";
    return;
  }
  slides[currentKey].style.display = "none";
  slides[currentKey + 1].style.display = "block";
  currentKey++;
  return;
};

const prevSlide = () => {
  if (currentKey == 0) {
    slides[currentKey].style.display = "none";
    currentKey = slides.length - 1;
    slides[currentKey].style.display = "block";
    return;
  }
  slides[currentKey].style.display = "none";
  slides[currentKey - 1].style.display = "block";
  currentKey--;
  return;
};

const interval = null;

prevBtn.addEventListener("click", () => {
  prevSlide();
  generateCircles();
});
nextBtn.addEventListener("click", () => {
  nextSlide();
  generateCircles();
});

sliderBox.addEventListener("mouseenter", () => {
  clearInterval(animationInterval);
});

sliderBox.addEventListener("mouseleave", () => {
  animationInterval = setInterval(() => {
    nextSlide();
    generateCircles();
  }, 1000);
});

nextBtn.addEventListener("mouseenter", () => {
  clearInterval(animationInterval);
});

nextBtn.addEventListener("mouseleave", () => {
  animationInterval = setInterval(() => {
    nextSlide();
    generateCircles();
  }, 1000);
});

prevBtn.addEventListener("mouseenter", () => {
  clearInterval(animationInterval);
});

prevBtn.addEventListener("mouseleave", () => {
  animationInterval = setInterval(() => {
    nextSlide();
    generateCircles();
  }, 1000);
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

  if (dragEndX < 0) {
    prevSlide();
    generateCircles();
  } else {
    nextSlide();
    generateCircles();
  }
});
