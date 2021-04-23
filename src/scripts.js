import {
  instantiateClasses,
  tripRepo,
  destinationRepo,
  users,
} from './classStructure'

let user;

window.addEventListener('load', loadFunctions)
window.addEventListener('click', clickFunctions)

function loadFunctions() {
  instantiateClasses();
  pickRandomUser()
  console.log(user);
  // console.log(tripRepo);
  // console.log(destinationRepo);
}

function clickFunctions(event) {
  displayPageInfo(event)
}

function pickRandomUser() {
  user = users[Math.floor(Math.random() * users.length)]
}

const nav = {
  trips: document.getElementById('myTrips'),
  plan: document.getElementById('planTrip'),
  destinations: document.getElementById('destinations'),
  admin: document.getElementById('admin')
};


function displayPageInfo(event) {
  const pageInfo = document.getElementById('pageInfo');
  switch (event.target) {
    case nav.trips:
      pageInfo.innerText = 'My Trips'
      break;
    case nav.plan:
      pageInfo.innerText = 'Plan a Trip'
      break;
    case nav.destinations:
      pageInfo.innerText = 'Destinations'
      break;
    case nav.admin:
      pageInfo.innerText = 'My Profile'
      break;
  }
}

// const buttons = {
//   login: document.getElementById(),
//   login: document.getElementById(),
//   login: document.getElementById(),
//   login: document.getElementById(),
// }