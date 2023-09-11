"use strict";
const drafted_player_container = document.querySelectorAll(
  ".drafted-player-container"
);
const drafted_player_heroes_form = document.querySelector(
  ".drafted-player-heroes"
);
// One Player image variable
const one_player_img = document.querySelector(".drafted-player-img");
// Team points variables
const blue_team_points = document.querySelector("#blue-team-points");
const red_team_points = document.querySelector("#red-team-points");
let brojPoena = 15;

// On click player to show heroes
const radio_twisted_fate = document.querySelector("#twistedFate");
// const radio_hero_group = document.querySelectorAll(".radio-hero-group");
drafted_player_container.forEach((container) => {
  const player_img = container.querySelector(".drafted-player-img");
  player_img.addEventListener("click", function () {
    drafted_player_heroes_form.style.opacity = 1;
  });
});

// Points lower, Form disappear when Twisted Fate Checked
console.log(brojPoena);
radio_twisted_fate.addEventListener("change", function () {
  if (radio_twisted_fate.checked) {
    brojPoena -= 5;
    blue_team_points.textContent = brojPoena;
    drafted_player_heroes_form.style.opacity = 0;
    console.log("Posle izbora");
    console.log(brojPoena);
  }
});
