import {
  instantiateClasses,
  tripRepo,
  destinationRepo,
  users,
} from './classStructure';

import {
  displayUsername,
  navClick
} from './domManipulation'

let user;

window.addEventListener('load', loadFunctions)
window.addEventListener('click', clickFunctions)

function loadFunctions() {
  instantiateClasses();
  pickRandomUser();
  displayUsername();
  console.log(user);
}

function clickFunctions() {
  navClick()
}

function pickRandomUser() {
  user = users[Math.floor(Math.random() * users.length)]
}


// const buttons = {
//   login: document.getElementById(),
//   login: document.getElementById(),
//   login: document.getElementById(),
//   login: document.getElementById(),
// }

export {user}