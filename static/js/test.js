"use strict";
// const list = document.querySelector(".list");
function show_champs(player) {
  var list = document.getElementById(player);
  if (list.style.display === "flex") {
    list.style.display = "none";
  } else {
    list.style.display = "flex";
    list.style.flexDirection = "column";
  }
}
