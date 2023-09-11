"use strict";
const hero_section = document.querySelector(".hero");
const hero_btn = document.querySelector("#hero-btn");
const all_players = document.querySelector("#all-players");
const player_img = document.querySelectorAll(".player-img");
const blue_team_container = document.querySelector(".team-one");
const red_team_container = document.querySelector(".team-two");
let hero_choices = document.querySelector(".hero-choises");
const player_container = document.querySelectorAll(".player-container");
const timer = document.querySelector(".timer");
// igraci
// const mein_player = document.querySelector("#mein");
// const kole_player = document.querySelector("#kole");
// const bellyfut_player = document.querySelector("#bellyfut");
// const marko_player = document.querySelector("#marko");
// const jesus_player = document.querySelector("#jesus");
// const lio_player = document.querySelector("#lio");
// const pajaPlatina_player = document.querySelector("#pajaPlatina");
// const sofija_player = document.querySelector("#sofija");
// const vucko_player = document.querySelector("#vucko");
// const pes_player = document.querySelector("#pes");
// prikaz igraca na dugme
hero_btn.addEventListener("click", function () {
  hero_btn.style.display = "none";
  // players appear
  all_players.style.display = "flex";
  all_players.style.flexDirection = "row";
  all_players.style.gap = "10px";
  // timer appear
  timer.style.display = "block";
});

let blue_team = new Array();
let red_team = new Array();
let counter = 0;

player_container.forEach((container) => {
  const player_img = container.querySelector(".player-img");
  player_img.addEventListener("click", () => {
    if (counter % 2 == 0 && counter < 10) {
      blue_team.push(player_img.id);
      blue_team_container.appendChild(player_img);
    } else if (counter % 2 != 0 && counter < 10) {
      red_team.push(player_img.id);
      red_team_container.appendChild(player_img);
    }
    player_img.addEventListener("moruseover", (e) => {
      console.log(player_img);
    });
    // kada je slika u kontejneru, ne moze da se klikne
    player_img.style.pointerEvents = "none";

    counter += 1;

    if (counter >= 10) {
      if (blue_team.length === 5 && red_team.length === 5) {
        // New Button to take user to hero selection page
        const draft_done_btn = document.createElement("button");
        draft_done_btn.id = "submit-button-draft";
        draft_done_btn.textContent = "choose your heroes";
        document.body.appendChild(draft_done_btn);

        // On Button Click - Creating Object that contains teams that will be passed to backend
        draft_done_btn.addEventListener("click", () => {
          const draft_data = {
            blue_team: [...blue_team],
            red_team: [...red_team],
          };
          async function send_heroes() {
            const res = await fetch("/submitDraftSelect", {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify(draft_data),
            });
            // const response_data = await res.json();
          }
          send_heroes();
          window.location.href = "/champSelect";
        });
      }
    }
  });
});
audio
player_container.forEach((container) => {
  const audio = container.querySelector(".player-hover");
  container.addEventListener("mouseenter", () => {
    audio.currentTime = 0;
    audio.play();
  });
  container.addEventListener("mouseleave", () => {
    audio.pause();
  });
});
