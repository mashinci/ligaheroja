"use strict";
const drafted_player_heroes = document.querySelector(".drafted-player-heroes");
const drafted_player_container = document.querySelectorAll(
  ".drafted-player-container"
);
const radio_twisted_fate = document.querySelector("#twistedFate");
drafted_player_container.forEach((container) => {
  const player_img = container.querySelector(".drafted-player-img");
  player_img.addEventListener("click", function () {
    drafted_player_heroes.style.opacity = 1;
  });
});
let brojPoena = 15;
console.log(brojPoena);
radio_twisted_fate.addEventListener("change", function () {
  if (radio_twisted_fate.checked) {
    brojPoena -= 5;
    drafted_player_heroes.style.opacity = 0;
    console.log("Posle izbora");
    console.log(brojPoena);
  }
});
