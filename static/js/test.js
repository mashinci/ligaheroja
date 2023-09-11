"use strict";
const coin_cost_champs = document.querySelectorAll(".coin-cost-champs");

// const list = document.querySelector(".list");
// function show_champs(player) {
//   var list = document.getElementById(player);
//   if (list.style.display === "flex") {
//     list.style.display = "none";
//   } else {
//     list.style.display = "flex";
//     list.style.flexDirection = "column";
//   }
// }
function show_champs(player) {
  let list = document.getElementById(player);
  if (list.style.display === "none" || list.style.display === "") {
    list.style.display = "flex";
    list.style.flexDirection = "column";
    list.style.opacity = "0";
    list.style.transition = "opacity 0.3s ease-in";
    setTimeout(function () {
      list.style.opacity = "1";
    }, 10);
  } else {
    list.style.opacity = "0";
    list.style.transition = "opacity 0.3s";
    setTimeout(function () {
      list.style.display = "none";
    }, 300);
  }
}
