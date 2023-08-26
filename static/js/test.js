"use strict";
const hero_btn = document.querySelector("#hero-btn");
const players_container = document.querySelectorAll(".player-container");
const all_players = document.querySelector("#all-players");
const players_img = document.querySelectorAll(".player-img");
// const player = document.querySelector(".player-img");
let hero_choices = document.querySelector(".hero-choises");
hero_btn.addEventListener("click", function () {
  hero_btn.style.display = "none";
  all_players.style.display = "flex";
  all_players.style.flexDirection = "column";
  all_players.style.gap = "50px";
});
//------------prikaz pocetak
// players.forEach((player) => {
//   player.addEventListener("click", function () {
//     let content = ``;
//     let entries = Object.entries(player);
//     for (let [poeni, heroji] of entries) {
//       const [prvi, ...ostali] = heroji;
//       content = `${prvi}, ${ostali}`;
//     }
//     hero_choices.innerHTML = content;
//   });
// });
// player.addEventListener("click", function () {
//   let content = ``;
//   let entries = Object.entries(mein);
//   for (let [poeni, heroji] of entries) {
//     // const [prvi, drugi] = heroji;
//     // content += `${prvi} ${drugi} = ${poeni} <br  >`;
//     content += `${heroji} = ${poeni} <br  >`;
//   }
//   hero_choices.innerHTML = content;
// });
let poeni = 15;
let tim1 = new Array();
let tim2 = new Array();
const mein = {
  5: ["twisted fate", "tahm kench"],
  4: ["zoe", "zilean"],
  3: ["zed", "renata glasc"],
  2: ["riven", "blitzcrank"],
  1: ["akali", "senna"],
  //   image: "./img/mein.png",
};
const kole = {
  5: ["sylas", "pyke"],
  4: ["akshan", "k'sante"],
  3: ["yone", "samira"],
  2: ["yasuo", "karate kennen"],
  1: ["riven", "gangplank"],
  //   image: "./img/kole.png",
};
const bellyfut = {
  5: ["zed", "kayn"],
  4: ["jhin", "akali"],
  3: ["kai'sa", "rengar"],
  2: ["katarina", "gwen"],
  1: ["sylas", "rek'sai"],
  //   image: "./img/bellyfut.png",
};
const marko = {
  8: ["mordekaiser", "rammus"],
  4: ["amumu", "olaf"],
  3: ["trundle", "shen"],
  2: ["ornn", "yone"],
  1: ["yasuo", "aphelios"],
  //   image: "./img/mein.png",
};
const jesus = {
  5: ["malzahar", "yummi"],
  4: ["swain", "diana"],
  3: ["aurelion sol", "nami"],
  2: ["cho'gath", "lissandra"],
  1: ["hecarim", "xin zhao"],
  //   image: "./img/jesus.png",
};
const lio = {
  5: ["sett", "sejuani"],
  4: ["sydra", "miss fortune"],
  3: ["varus", "azir"],
  2: ["jinx", "nami"],
  1: ["kalista", "yone"],
  //   image: "./img/lio.png",
};
const pajaPlatina = {
  4: ["jhin", "swain"],
  2: ["morgana", "miss fortune"],
  1: ["ezreal", "lux"],
  0: ["aphelios", "nautilus"],
  "-1": ["sion", "malphite"],
  //   image: "./img/pajaPlatina.png",
};
const vucko = {
  8: ["vladimir"],
  4: ["darius", "zed"],
  3: ["amumu", "viktor"],
  2: ["rengar", "yasuo"],
  1: ["nautilus", "graves"],
  //   image: "./img/vucko.png",
};
const sofija = {
  9: ["lux"],
  4: ["seraphine", "nami"],
  3: ["evelynn", "ahri"],
  2: ["ornn", "alistar"],
  1: ["bard", "ivern"],
  //   image: "./img/sofija.png",
};
const pes = {
  4: ["yorick"],
  3: ["yasuo", "nasus"],
  2: ["pantheon", "maokai"],
  1: ["kayn", "zed"],
  0: ["jhin", "pyke"],
  //   image: "./img/pes.png",
};

// let entries = Object.entries(kole);
// for (let [key, value] of entries) {
//   console.log(`Za ${value} izdvoji ${key}`);
// }

const info = function (igrac) {
  let entries = Object.entries(igrac);
  for (let [poeni, heroji] of entries) {
    const [prvi, ...ostali] = heroji;
    console.log(`${prvi} ${ostali} = ${poeni}`);
  }
};
info(pes);

const korisnickoIme = "djole12";
localStorage.setItem("username", korisnickoIme);

console.log(localStorage.getItem("username"));

hero_btn.addEventListener("click", function () {
  localStorage.removeItem("username");
});

// drag drop

// audio
players_container.forEach((container) => {
  const audio = container.querySelector(".player-hover");
  container.addEventListener("mouseenter", () => {
    audio.currentTime = 0;
    audio.play();
  });
  container.addEventListener("mouseleave", () => {
    audio.pause();
  });
});
