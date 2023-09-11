"use strict";
// BLUE

const blue_team_points_display = document.querySelector("#blue-team-points");
let blue_team_points = parseInt(
  document.querySelector("#blue-team-points").textContent
);
// RED

const red_team_points_display = document.querySelector("#red-team-points");
let red_team_points = parseInt(
  document.querySelector("#red-team-points").textContent
);
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

const drafted_blue_team_players_divs = document.querySelectorAll(
  ".drafted-blue-team .drafted-players .drafted-player-container .list"
);

let blue_player_ids = [];
drafted_blue_team_players_divs.forEach((el) => {
  let element = el.id;
  blue_player_ids.push(element);
});

// Coins Blue

const all_blue_players_champs = [];
const blue_current_selected_points = [0, 0, 0, 0, 0];

for (let i = 0; i < blue_player_ids.length; i++) {
  const blue_player_name = blue_player_ids[i];
  const singular_blue_player_champs = document.querySelectorAll(
    `input[name="${blue_player_name}-champs"]`
  );
  all_blue_players_champs.push(singular_blue_player_champs);
}

console.log(all_blue_players_champs);

all_blue_players_champs.forEach((blue_player_champs, playerIndex) => {
  blue_player_champs.forEach(function (blue_player_radio_button) {
    blue_player_radio_button.addEventListener("click", function () {
      // Check if the radio button is checked
      if (blue_player_radio_button.checked) {
        // Get the value of the selected radio button
        const selectedValue = parseInt(blue_player_radio_button.value);

        // Add the selected value for this player
        blue_current_selected_points[playerIndex] = selectedValue;
        console.log(blue_current_selected_points);
        // Update the points display for this player
        let all_blue_players_points_sum = 0;

        for (let i = 0; i < blue_current_selected_points.length; i++) {
          all_blue_players_points_sum += blue_current_selected_points[i];
        }

        blue_team_points = 15 - all_blue_players_points_sum;
        blue_team_points_display.textContent = blue_team_points;
      }
    });
  });
});

////////////////////////RED
const drafted_red_team_players_divs = document.querySelectorAll(
  ".drafted-red-team .drafted-players .drafted-player-container .list"
);
let red_player_ids = [];
drafted_red_team_players_divs.forEach((el) => {
  let element = el.id;
  red_player_ids.push(element);
});

// Coins red

const all_red_players_champs = [];
const red_current_selected_points = [0, 0, 0, 0, 0];

for (let i = 0; i < red_player_ids.length; i++) {
  const red_player_name = red_player_ids[i];
  const singular_red_player_champs = document.querySelectorAll(
    `input[name="${red_player_name}-champs"]`
  );
  all_red_players_champs.push(singular_red_player_champs);
}

console.log(all_red_players_champs);

all_red_players_champs.forEach((red_player_champs, playerIndex) => {
  red_player_champs.forEach(function (red_player_radio_button) {
    red_player_radio_button.addEventListener("click", function () {
      // Check if the radio button is checked
      if (red_player_radio_button.checked) {
        // Get the value of the selected radio button
        const selectedValue = parseInt(red_player_radio_button.value);

        // Add the selected value for this player
        red_current_selected_points[playerIndex] = selectedValue;
        console.log(red_current_selected_points);
        // Update the points display for this player
        let all_red_players_points_sum = 0;

        for (let i = 0; i < red_current_selected_points.length; i++) {
          all_red_players_points_sum += red_current_selected_points[i];
        }

        red_team_points = 15 - all_red_players_points_sum;
        red_team_points_display.textContent = red_team_points;
      }
    });
  });
});
