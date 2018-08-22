var mainExpand = window.document.querySelector(".main-expand");
var mainCard = window.document.querySelector(".main-card");

function clickMainExpand() {
  mainCard.classList.add("-isActive");
}

mainExpand.addEventListener("click", clickMainExpand);
