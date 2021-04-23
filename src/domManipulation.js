import {
  user,
} from './scripts'

const navButtons = {
  trips: document.getElementById('myTrips'),
  plan: document.getElementById('planTrip'),
  destinations: document.getElementById('destinations'),
  admin: document.getElementById('admin'),
  logo: document.querySelector('.logo')
};

function navClick() {
  displayPageInfo(event)
}

function displayPageInfo(event) {
  const pageInfo = document.getElementById('pageInfo');
  switch (event.target) {
    case navButtons.trips:
      pageInfo.innerText = 'My Trips'
      break;
    case navButtons.plan:
      pageInfo.innerText = 'Plan a Trip'
      break;
    case navButtons.destinations:
      pageInfo.innerText = 'Destinations'
      break;
    case navButtons.admin:
      pageInfo.innerText = 'My Profile'
      break;
    case navButtons.logo:
      pageInfo.innerText = 'My Trips'
      break;
  }
}

function displayUsername() {
  const name = document.getElementById('username');
  navButtons.admin.innerText = user.name[0];
  name.innerText = user.name
}

export {
  navClick,
  displayUsername
}