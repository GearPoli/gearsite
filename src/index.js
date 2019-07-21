import "bootstrap";

import $ from "jquery";

import gearlogo from "./svg/gear_full.svg";

import facebook from "./img/facebook.png";
import site from "./img/grid-world.png";

import teams from "./teams.json";

$("#gearlogo").attr("src", gearlogo);

function shuffleArray(array) {
  var counter = array.length,
    temp,
    index;
  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

shuffleArray(teams).forEach((team, idx, arr) => {
  let logo = require(`${team.logo}`);
  let cover = require(`${team.cover}`);
  $("#teams-grid").append(`<div id="${
    team.id
  }" class="team" style="background-image: url('${cover}')">
    <div class="logo d-flex justify-content-center align-items-center">
      <div class="info d-flex flex-column justify-content-around align-items-center">
        <div class="name text-center">
          ${team.name}
        </div>
        <div class="description text-center px-3">
          ${team.desc}
        </div>
        <div class="buttons d-flex">
          <a href="${team.facebook}" class="mr-2">
            <img class="facebook" src="${facebook}" alt="">
          </a>
          <a href="${team.site}" class="ml-2">
            <img class="site" src="${site}" alt="">
          </a>
        </div>
      </div>
      <img src="${logo}" />
    </div>
  </div>`);
});
