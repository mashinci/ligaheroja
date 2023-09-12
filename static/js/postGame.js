"use strict";
const dmg_dealt_slider = document.getElementById("dmg-dealt");
const dmg_taken_slider = document.getElementById("dmg-taken");
const self_mitigated_dmg_slider = document.getElementById("self-mitigated-dmg");
const turret_dmg_slider = document.getElementById("turret-dmg");

const display_dmg_dealt = document.getElementById("display-dmg-dealt");
const display_dmg_taken = document.getElementById("display-dmg-taken");
const display_self_mitigated_dmg = document.getElementById(
  "display-self-mitigated-dmg"
);
const display_turret_dmg = document.getElementById("display-turret-dmg");

// Function to update the value display
function updateValueDisplay(slider, display) {
  display.style.left = `${slider.value}%`;
  display.textContent = slider.value;
}
// DMG DEALT
// Event listener to show value display on slider input
dmg_dealt_slider.addEventListener("input", () => {
  updateValueDisplay(dmg_dealt_slider, display_dmg_dealt);
});
// Event listener to show value display when the slider is clicked
dmg_dealt_slider.addEventListener("mousedown", () => {
  display_number.style.display = "block";
  updateValueDisplay(dmg_dealt_slider, display_dmg_dealt);
});

// DMG TAKEN
// Event listener to show value display on slider input
dmg_taken_slider.addEventListener("input", () => {
  updateValueDisplay(dmg_taken_slider, display_dmg_taken);
});
// Event listener to show value display when the slider is clicked
dmg_taken_slider.addEventListener("mousedown", () => {
  display_number.style.display = "block";
  updateValueDisplay(dmg_taken_slider, display_dmg_taken);
});

// SELF- MITIGATED// Event listener to show value display on slider input
self_mitigated_dmg_slider.addEventListener("input", () => {
  updateValueDisplay(self_mitigated_dmg_slider, display_self_mitigated_dmg);
});
// Event listener to show value display when the slider is clicked
self_mitigated_dmg_slider.addEventListener("mousedown", () => {
  display_number.style.display = "block";
  updateValueDisplay(self_mitigated_dmg_slider, display_self_mitigated_dmg);
});
// Turret DMG// Event listener to show value display on slider input
turret_dmg_slider.addEventListener("input", () => {
  updateValueDisplay(turret_dmg_slider, display_turret_dmg);
});
// Event listener to show value display when the slider is clicked
turret_dmg_slider.addEventListener("mousedown", () => {
  display_number.style.display = "block";
  updateValueDisplay(turret_dmg_slider, display_turret_dmg);
});
