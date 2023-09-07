"use strict";
// const list = document.querySelector(".list");
function show_champs(player) {
  var list = document.getElementById(player);
  if (list.style.display === "block") {
    list.style.display = "none";
  } else {
    list.style.display = "block";
  }
}
