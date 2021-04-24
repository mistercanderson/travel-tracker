import {
  instantiateClasses,
  tripRepo,
  destinationRepo,
  users,
} from './classStructure';

import {
  displayChanges,
  displayUsername,
  displayTrips,
} from './domManipulation'

let user;
const today = new Date().toISOString().slice(0, 10);

window.addEventListener('load', loadFunctions)
window.addEventListener('click', clickFunctions)
// window.addEventListener('click', () => console.log(event.target.id))

function loadFunctions() {
  instantiateClasses();
  pickRandomUser();
  displayUsername();
  displayTrips();
  console.log(destinationRepo);
}

function clickFunctions() {
  displayChanges()
}

function pickRandomUser() {
  user = users[Math.floor(Math.random() * users.length)]
}

export {user, today, destinationRepo}