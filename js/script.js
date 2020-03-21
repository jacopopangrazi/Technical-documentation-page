// Author: jacopopangrazi

let arrow = document.getElementById("mobile-arrow");
let list = document.getElementById("navbar");
let links = document.querySelectorAll("#navbar > ul > li > a");

let hideIt = function() {
  if (document.body.offsetWidth <= 815) {
    if (list.style.left == "-315px") {
      list.style.left = "0px";
      arrow.style.transform = "rotate(180deg)";
    } else {
      list.style.left = "-315px";
      arrow.style.transform = "rotate(0deg)";
    }
  }
};

arrow.addEventListener("click", hideIt);
links.forEach(function(elem) {
  elem.addEventListener("click", hideIt);
});
