const openAsideBtn = document.getElementById("openBtn");
const closeAsideBtn = document.getElementById("closeBtn");
const Aside = document.getElementById("right-aside");

const openAside = () => {
  Aside.style.display = "inline";
  closeAsideBtn.style.display = "inline";
  openAsideBtn.style.display = "none";
};

const closeAside = () => {
  Aside.style.display = "none";
  closeAsideBtn.style.display = "none";
  openAsideBtn.style.display = "inline";
};

openAsideBtn.addEventListener("click", openAside);
closeAsideBtn.addEventListener("click", closeAside);
