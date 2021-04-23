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

function navClick() {
  displayPageInfo(event)
}

function displayPageInfo(event) {
  const pageInfo = document.getElementById('pageInfo');
  switch (event.target) {
    case navButtons.trips:
      pageInfo.innerText = 'My Trips';
      displayTrips();
      break;
    case navButtons.plan:
      pageInfo.innerText = 'Plan a Trip';
      displayTripPlanner();
      break;
    case navButtons.destinations:
      pageInfo.innerText = 'Destinations';
      displayDestinations();
      break;
    case navButtons.admin:
      pageInfo.innerText = 'My Profile';
      displayUserProfile();
      break;
    case navButtons.logo:
      pageInfo.innerText = 'My Trips';
      displayTrips();
      break;
  }
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

function displayTripPlanner() {
  dashboard.innerHTML = '';
  dashboard.innerHTML = renderTripPlanner();
}

function displayTripPreview() {
  renderTripPreview();
}

function displayUserProfile() {
  dashboard.innerHTML = '';
  dashboard.innerHTML = renderUserProfile();
}

function displayLogin() {
  dashboard.innerHTML = '';
  dashboard.innerHTML = renderLogin()
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

function renderTripPlanner() {
  return `
  <form class="plan-trip" id="tripPlanner">
      <input placeholder="Destination" type="text" name="destination" id="planDestination" required>
      <label for="start-date">Start Date</label>
      <input placeholder="Start Date" type="date" name="start-date" id="planStartDate" required>
      <label for="end-date">End Date</label>
      <input placeholder="End Date" type="date" name="end-date" id="planEndDate" required>
      <input placeholder="Number of Travelers" type="number" min="1" name="travelers" id="planTravelers" required>
      <input placeholder="Activities (optional)" type="text" name="activities" id="planActivities">
      <button type="button" id="planTripButton">Plan Trip</button>
    </form>
  `
}

function renderTripPreview() {
  return `<section class="trip-preview">
      <div class="card-wrapper">
        <div class="card-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
            alt="Trip Picture">
          <div class="card-image-overlay caps">
            <div class="day-counter-wrapper">
              <p class="days">Days</p>
              <p class="day-count">02</p>
            </div>
          </div>
        </div>
        <div class="card-info-wrapper">
          <div>
            <h2 class="destination-name">Destination Name</h2>
            <p class="trip-dates">01/23/16 - 01/25/16</p>
          </div>
          <p>Activities</p>
          <p class="card-cost">Swimming, Relaxation</p>
          <div class="trip-status-wrapper">
            <h3 class="caps smaller-font">Status:</h3>
            <p class="lighter">Pending</p>
          </div>
          <div class="traveler-wrapper">
            <h4 class="caps smaller-font">Travelers:</h4>
            <p class="traveler-count lighter">04</p>
          </div>
        </div>
      </div>
      <article class="trip-cost">
        After TravelTracker agent fees, the total cost of your trip will be $100.
      </article>
    </section>
    <form class="plan-trip" id="planTripTwo">
      <button type="button" id="finalizeTrip">Plan Trip</button>
      <button type="button" class="bad-button" id="cancelTrip">Cancel</button>
    </form>
  `;
}

function renderUserProfile() {
  return `<div class="card-wrapper user-profile">
      <h2>User Name</h2>
      <ul class="user-data">
        <li class="user-data">Age: 10</li>
        <li class="user-data">Height: 6' 10</li>
        <li class="user-data">Weight: 210</li>
        <li class="user-data">Blah blah</li>
      </ul>
    </div
  `
}

function renderLogin() {
  return `<form class="login hidden">
      <input placeholder="username" type="text" name="username" id="username" required>
      <input placeholder="password" type="password" name="password" id="password" required>
      <button class="login-button">Login</button>
    </form>
  `;
}

export {
  navClick,
  displayUsername,
  displayTrips
}