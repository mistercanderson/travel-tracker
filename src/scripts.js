import {
  instantiateClasses,
  tripRepo,
  destinationRepo,
  users,
} from './classStructure'

let user;

window.addEventListener('load', loadFunctions)

function loadFunctions() {
  instantiateClasses();
  pickRandomUser()
  console.log(user);
  console.log(tripRepo);
  console.log(destinationRepo);
}

function pickRandomUser() {
  user = users[Math.floor(Math.random() * users.length)]
}