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

const dashboard = document.querySelector('.dashboard');

function navClick() {
  displayPageInfo(event)
}

function hideDashboard() {
  dashboard.classList.add('hidden')
}

function showDashboard() {
  dashboard.classList.remove('hidden')
}

function displayPageInfo(event) {
  const pageInfo = document.getElementById('pageInfo');
  switch (event.target) {
    case navButtons.trips:
      pageInfo.innerText = 'My Trips'
      displayTrips();
      showDashboard();
      break;
    case navButtons.plan:
      pageInfo.innerText = 'Plan a Trip'
      hideDashboard();
      break;
    case navButtons.destinations:
      pageInfo.innerText = 'Destinations'
      break;
    case navButtons.admin:
      pageInfo.innerText = 'My Profile'
      hideDashboard();
      break;
    case navButtons.logo:
      pageInfo.innerText = 'My Trips'
      displayTrips();
      showDashboard();
      break;
  }
}

function displayUsername() {
  const name = document.getElementById('username');
  navButtons.admin.innerText = user.name[0];
  name.innerText = user.name
}

function displayTrips() {
  dashboard.innerHTML = ''
  user.trips.forEach(trip => {
    let name = trip.destination.name;
    let dates = trip.returnTripDates().join(' - ');
    let activities = trip.suggestedActivities.join(', ');
    let status = trip.status;
    let travelerCount = trip.travelers;
    let image = trip.destination.image;
    let alt = trip.destination.alt;
    let duration = trip.duration;
    let cost = trip.calculateTripCost();
    dashboard.innerHTML += renderTripCard(name, dates, activities, status, travelerCount, image, alt, duration, cost)
  })
}

function renderTripCard(name, dates, activities, status, travelerCount, image, alt, duration, cost) {
  return `
  <div class="card-wrapper">
        <div class="card-image-wrapper">
          <img
            src="${image}"
            alt="${alt}">
          <div class="card-image-overlay caps">
            <div class="day-counter-wrapper">
              <p class="days">Days</p>
              <p class="day-count">${duration}</p>
            </div>
          </div>
        </div>
        <div class="card-info-wrapper">
          <div>
            <h2 class="destination-name">${name}</h2>
            <p class="trip-dates">${dates}</p>
          </div>
          <div class="cost-wrapper">
            <p>Trip Price</p>
            <p class="card-cost">$${cost}</p>
          </div>
          <div class="trip-status-wrapper">
            <h3 class="caps smaller-font">Status:</h3>
            <p class="lighter">${status}</p>
          </div>
          <div class="traveler-wrapper">
            <h4 class="caps smaller-font">Travelers:</h4>
            <p class="traveler-count lighter">${travelerCount}</p>
          </div>
        </div>
      </div>
  `
}

export {
  navClick,
  displayUsername,
  displayTrips
}