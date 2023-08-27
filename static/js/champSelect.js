"use strict";
const player_img = document.querySelector(".drafted-player-img");
const drafted_player_heroes = document.querySelector(".drafted-player-heroes");
player_img.addEventListener("mouseover", function () {
  drafted_player_heroes.style.opacity = 1;
});

// player_img.addEventListener("mouseout", function () {
//   drafted_player_heroes.style.opacity = 0;
// });
