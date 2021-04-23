import {
  user,
  destinationRepo
} from './scripts'

const navButtons = {
  trips: document.getElementById('myTrips'),
  plan: document.getElementById('planTrip'),
  destinations: document.getElementById('destinations'),
  admin: document.getElementById('admin'),
  logo: document.querySelector('.logo')
};

const dashboard = document.querySelector('.dashboard');
const userProfile = document.querySelector('.user-profile');
const tripPlanner = document.getElementById('tripPlanner');

function navClick() {
  displayPageInfo(event)
}

function displayPageInfo(event) {
  const pageInfo = document.getElementById('pageInfo');
  switch (event.target) {
    case navButtons.trips:
      pageInfo.innerText = 'My Trips';
      hideTripPlanner();
      hideUserProfile();
      displayTrips();
      showDashboard();
      break;
    case navButtons.plan:
      pageInfo.innerText = 'Plan a Trip';
      hideUserProfile();
      hideDashboard();
      showTripPlanner();
      break;
    case navButtons.destinations:
      pageInfo.innerText = 'Destinations';
      hideTripPlanner();
      hideUserProfile();
      displayDestinations();
      showDashboard();
      break;
    case navButtons.admin:
      pageInfo.innerText = 'My Profile';
      hideTripPlanner();
      showUserProfile();
      hideDashboard();
      break;
    case navButtons.logo:
      pageInfo.innerText = 'My Trips';
      hideTripPlanner();
      hideUserProfile();
      displayTrips();
      showDashboard();
      break;
  }
}

function hideDashboard() {
  dashboard.classList.add('hidden')
}

function showDashboard() {
  dashboard.classList.remove('hidden')
}

function hideUserProfile() {
  userProfile.classList.add('hidden')
}

function showUserProfile() {
  userProfile.classList.remove('hidden')
}

function showTripPlanner() {
  tripPlanner.classList.remove('hidden')
}

function hideTripPlanner() {
  tripPlanner.classList.add('hidden')
}

function displayUsername() {
  const name = document.getElementById('username');
  navButtons.admin.innerText = user.name[0];
  name.innerText = user.name
}

function displayTrips() {
  dashboard.innerHTML = '';
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
    dashboard.innerHTML += renderTripDashboard(name, dates, activities, status, travelerCount, image, alt, duration, cost)
  })
}

function displayDestinations() {
  dashboard.innerHTML = '';
  destinationRepo.list.forEach(dest => {
    let name = dest.name;
    let image = dest.image;
    let alt = dest.alt;
    let flightCost = dest.estimatedFlightCostPerPerson;
    let lodgingCost = dest.estimatedLodgingCostPerDay;
    dashboard.innerHTML += renderDestinationDashboard(name, image, alt, flightCost, lodgingCost)
  })
}

function renderTripDashboard(name, dates, activities, status, travelerCount, image, alt, duration, cost) {
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

function renderDestinationDashboard(name, image, alt, flightCost, lodgingCost) {
  return `<div class="card-wrapper">
        <div class="card-image-wrapper">
          <img
            src="${image}"
            alt="${alt}">
        </div>
        <div class="card-info-wrapper">
          <h2 class="destination-name">${name}</h2>
          <div class="cost-wrapper">
            <p>Flight:</p>
            <p class="card-cost">$${flightCost}/person</p>
            <p>Lodging:</p>
            <p class="card-cost">$${lodgingCost}/day</p>
          </div>
          <button class="book-now">Book Now!</button>
        </div>
      </div> 
      `
}

export {
  navClick,
  displayUsername,
  displayTrips
}