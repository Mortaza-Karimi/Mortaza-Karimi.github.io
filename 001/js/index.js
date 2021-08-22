const circleAnimate = document.getElementById("circle-animate");
const startAnimationBtn = document.getElementById("startBtn");
const stopAnimationBtn = document.getElementById("stopBtn");

var id = null;
var pos = 0;

const startAnimationFunction = () => {
  clearInterval(id);
  id = null;
  if (pos == 500) {
    pos = 0;
    circleAnimate.style.left = pos + "px";
  }
  id = setInterval(changePosition, 10);
};

const changePosition = () => {
  if (pos == 501) {
    clearInterval(id);
    id = null;
  } else {
    pos += 1.5;
    circleAnimate.style.left = pos + "px";
  }
};

const stopAnimationFunction = () => {
  console.log(typeof id);
  if (typeof id === "object") {
    pos = 0;
    circleAnimate.style.left = pos + "px";
    clearInterval(id);
    id = null;
  } else {
    clearInterval(id);
    id = null;
  }
};

startAnimationBtn.addEventListener("click", startAnimationFunction);
stopAnimationBtn.addEventListener("click", stopAnimationFunction);
