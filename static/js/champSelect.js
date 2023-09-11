"use strict";
const big_drafted_players_container = document.querySelector(
  ".drafted-players-container"
);
// BLUE
const submit_blue_btn = document.querySelector(".submit-blue");
const submit_red_btn = document.querySelector(".submit-red");
const submit_draft_btn = document.querySelector(".submit-draft");
const blue_team_points_display = document.querySelector("#blue-team-points");
const blue_team_coins_img = document.querySelector(".blue-team-coins");
const red_team_coins_img = document.querySelector(".red-team-coins");
let blue_team_points = parseInt(
  document.querySelector("#blue-team-points").textContent
);

const sumArr = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

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

////////////////////////BLUE

// Blue players ids
const drafted_blue_team_players_divs = document.querySelectorAll(
  ".drafted-blue-team .drafted-players .drafted-player-container .list"
);
let blue_player_ids = [];
drafted_blue_team_players_divs.forEach((el) => {
  let element = el.id;
  blue_player_ids.push(element);
});

// Coins and points
const all_blue_players_champs = [];
const blue_current_selected_points = [0, 0, 0, 0, 0];
const blue_player_is_selected = [0, 0, 0, 0, 0];
const blue_player_selected_champs = new Array(5);
let blue_button_is_clicked = false;
for (let i = 0; i < blue_player_ids.length; i++) {
  const blue_player_name = blue_player_ids[i];
  const singular_blue_player_champs = document.querySelectorAll(
    `input[name="${blue_player_name}-champs"]`
  );
  all_blue_players_champs.push(singular_blue_player_champs);
}
all_blue_players_champs.forEach((blue_player_champs, playerIndex) => {
  blue_player_champs.forEach(function (blue_player_radio_button) {
    blue_player_radio_button.addEventListener("click", function () {
      // Check if the radio button is checked
      if (blue_player_radio_button.checked) {
        // Get the value of the selected radio button
        const selectedValue = parseInt(blue_player_radio_button.value);
        const selectedChamp = blue_player_radio_button.id;
        // Add the selected value for this player
        blue_current_selected_points[playerIndex] = selectedValue;
        blue_player_is_selected[playerIndex] = 1;
        blue_player_selected_champs[playerIndex] = selectedChamp;
        // Update the points display for this player
        let all_blue_players_points_sum = 0;

        for (let i = 0; i < blue_current_selected_points.length; i++) {
          all_blue_players_points_sum += blue_current_selected_points[i];
        }

        blue_team_points = 15 - all_blue_players_points_sum;
        blue_team_points_display.textContent = blue_team_points;
        if (blue_team_points >= 0 && sumArr(blue_player_is_selected) == 5) {
          submit_blue_btn.style.pointerEvents = "auto";
          submit_blue_btn.style.backgroundColor = "var(--plava)";
        } else {
          submit_blue_btn.style.pointerEvents = "none";
          submit_blue_btn.style.backgroundColor = "var(--siva)";
        }
        if (blue_team_points < 0) {
          blue_team_points_display.style.color = "var(--crvena)";
          blue_team_points_display.classList.add("bounce");
        } else {
          blue_team_points_display.style.color = "var(--bela)";
          blue_team_points_display.classList.remove("bounce");
        }
      }
    });
  });
});
submit_blue_btn.addEventListener("click", () => {
  blue_button_is_clicked = true;
  submit_blue_btn.style.display = "none";
  blue_team_points_display.style.display = "none";
  blue_team_coins_img.style.display = "none";
  let lists = document.querySelectorAll(".list");
  lists.forEach((el) => {
    el.style.opacity = "0";
    el.style.transition = "opacity 0.3s ease-in";
    setTimeout(function () {
      el.style.display = "none";
    }, 300);
  });
  if (red_button_is_clicked && blue_button_is_clicked) {
    submit_draft_btn.style.display = "block";
    big_drafted_players_container.style.gap = "150px";
  }
  // Create a new element
  const lockedOverlay = document.createElement("div");

  // Add a class to the new element
  lockedOverlay.classList.add("locked-overlay");

  // Set the styles for the new element
  lockedOverlay.style.position = "absolute";
  lockedOverlay.style.top = "0";
  lockedOverlay.style.left = "0";
  lockedOverlay.style.display = "flex";
  lockedOverlay.style.justifyContent = "center";
  lockedOverlay.style.alignItems = "center";
  lockedOverlay.style.fontSize = "4rem";
  lockedOverlay.style.letterSpacing = "60px";
  lockedOverlay.textContent = "LOCKED";
  lockedOverlay.style.color = "white";
  lockedOverlay.style.borderRadius = "20px";
  lockedOverlay.style.fontWeight = "bold";
  lockedOverlay.style.width = "100%";
  lockedOverlay.style.height = "100%";
  lockedOverlay.style.backgroundColor = "var(--crna)";
  lockedOverlay.style.opacity = "0.8";
  lockedOverlay.style.zIndex = "999999";

  // Get the "drafted-blue-team" div by its class name
  const blueTeamDiv = document.querySelector(".drafted-blue-team");

  // Append the new element to the "drafted-blue-team" div
  blueTeamDiv.appendChild(lockedOverlay);
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
const red_player_is_selected = [0, 0, 0, 0, 0];
const red_player_selected_champs = new Array(5);
let red_button_is_clicked = false;
for (let i = 0; i < red_player_ids.length; i++) {
  const red_player_name = red_player_ids[i];
  const singular_red_player_champs = document.querySelectorAll(
    `input[name="${red_player_name}-champs"]`
  );
  all_red_players_champs.push(singular_red_player_champs);
}
all_red_players_champs.forEach((red_player_champs, playerIndex) => {
  red_player_champs.forEach(function (red_player_radio_button) {
    red_player_radio_button.addEventListener("click", function () {
      // Check if the radio button is checked
      if (red_player_radio_button.checked) {
        // Get the value of the selected radio button
        const selectedValue = parseInt(red_player_radio_button.value);
        const selectedChamp = red_player_radio_button.id;

        // Add the selected value for this player
        red_current_selected_points[playerIndex] = selectedValue;
        red_player_is_selected[playerIndex] = 1;
        red_player_selected_champs[playerIndex] = selectedChamp;

        // Update the points display for this player
        let all_red_players_points_sum = 0;

        for (let i = 0; i < red_current_selected_points.length; i++) {
          all_red_players_points_sum += red_current_selected_points[i];
        }

        red_team_points = 15 - all_red_players_points_sum;
        red_team_points_display.textContent = red_team_points;
        if (red_team_points >= 0 && sumArr(red_player_is_selected) == 5) {
          submit_red_btn.style.pointerEvents = "auto";
          submit_red_btn.style.backgroundColor = "var(--crvena)";
        } else {
          submit_red_btn.style.pointerEvents = "none";
          submit_red_btn.style.backgroundColor = "var(--siva)";
        }
        if (red_team_points < 0) {
          red_team_points_display.style.color = "var(--crvena)";
          red_team_points_display.classList.add("bounce");
        } else {
          red_team_points_display.style.color = "var(--bela)";
          red_team_points_display.classList.remove("bounce");
        }
      }
    });
  });
});
submit_red_btn.addEventListener("click", () => {
  red_button_is_clicked = true;
  red_team_points_display.style.display = "none";
  red_team_coins_img.style.display = "none";
  submit_red_btn.style.display = "none";
  let lists = document.querySelectorAll(".list");
  lists.forEach((el) => {
    el.style.opacity = "0";
    el.style.transition = "opacity 0.3s ease-in";
    setTimeout(function () {
      el.style.display = "none";
    }, 300);
  });
  if (red_button_is_clicked && blue_button_is_clicked) {
    submit_draft_btn.style.display = "block";
    big_drafted_players_container.style.gap = "150px";
  }
  // Create a new element
  const lockedOverlay = document.createElement("div");

  // Add a class to the new element
  lockedOverlay.classList.add("locked-overlay");

  // Set the styles for the new element
  lockedOverlay.style.position = "absolute";
  lockedOverlay.style.top = "0";
  lockedOverlay.style.left = "0";
  lockedOverlay.style.display = "flex";
  lockedOverlay.style.justifyContent = "center";
  lockedOverlay.style.alignItems = "center";
  lockedOverlay.style.fontSize = "4rem";
  lockedOverlay.style.letterSpacing = "60px";
  lockedOverlay.textContent = "LOCKED";
  lockedOverlay.style.color = "white";
  lockedOverlay.style.borderRadius = "20px";
  lockedOverlay.style.fontWeight = "bold";
  lockedOverlay.style.width = "100%";
  lockedOverlay.style.height = "100%";
  lockedOverlay.style.backgroundColor = "var(--crna)";
  lockedOverlay.style.opacity = "0.8";
  lockedOverlay.style.zIndex = "999999";

  const redTeamDiv = document.querySelector(".drafted-red-team");

  redTeamDiv.appendChild(lockedOverlay);
});

submit_draft_btn.addEventListener("click", () => {
  if (red_button_is_clicked && blue_button_is_clicked) {
    const champ_data = {
      blue_team: [...blue_player_selected_champs],
      red_team: [...red_player_selected_champs],
    };
    console.log(champ_data);
    async function send_heroes_champs() {
      const res = await fetch("/submitChampionSelect", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(champ_data),
      });
      // const response_data = await res.json();
      window.location.href = "/postGame";
    }
    send_heroes_champs();
  }
});
