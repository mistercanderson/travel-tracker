import {
  instantiateClasses,
  tripRepo,
  destinationRepo,
  users,
} from './classStructure';

import {
  displayUsername,
  navClick,
  displayTrips
} from './domManipulation'

let user;

window.addEventListener('load', loadFunctions)
window.addEventListener('click', clickFunctions)

function loadFunctions() {
  instantiateClasses();
  pickRandomUser();
  displayUsername();
  displayTrips();
  // console.log(user);
  console.log(destinationRepo);
}

function clickFunctions() {
  navClick()
}

function pickRandomUser() {
  user = users[Math.floor(Math.random() * users.length)]
}

// function assignDestinationR


// const buttons = {
//   login: document.getElementById(),
//   login: document.getElementById(),
//   login: document.getElementById(),
//   login: document.getElementById(),
// }

export {user, destinationRepo}