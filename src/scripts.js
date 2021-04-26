import {
  instantiateClasses,
  tripRepo,
  destinationRepo,
  users,
} from './classStructure';

import {
  displayChanges,
  inputValues,
  displayLogin,
  // enableNavigation,
  displayUsername,
  displayTripsInfo,
  displayTrips,
} from './domManipulation'

import Trip from './Trip';

import {
  postTrip,
  postMessage,
  requests,
} from './apiCalls'

let user;
let travelers, trips, destinations;
const today = new Date().toISOString().slice(0, 10);
const tomorrow = new Date(new Date(today).getTime() + 86400000).toISOString().slice(0, 10);

window.addEventListener('load', loadFunctions);
window.addEventListener('click', clickFunctions);

function loadFunctions() {
  disableNavigation();
  displayLogin();
}

function clickFunctions() {
  if (userLogin()) {
    setTimeout(() => {
      instantiateClasses();
      user = users;
      displayUsername();
      displayTripsInfo();
      displayTrips();
    }, 200);
  };
  displayChanges();
  sendPostRequest();
}

function sendPostRequest() {
  if (event.target.id === 'finalizeTrip') {
    const tripRequest = formatTripRequest();
    postTrip(tripRequest);
    setTimeout(() => {
      if (postMessage) {
        const trip = convertTripRequest(tripRequest)
        tripRepo.list.push(trip);
        user.trips.push(trip);
      }
    }, 200)
  }
}

function formatInputDate(date) {
  const dateSplit = date.split('-');
  const year = dateSplit.shift();
  dateSplit.push(year);
  return dateSplit.join('/')
}

function calculateDays(start, end) {
  const startTime = new Date(start).getTime();
  const endTime = new Date(end).getTime();
  const timeDifference = endTime - startTime;
  return (timeDifference / 86400000) + 1;
}

function formatTripRequest() {
  const destRequest = destinationRepo.list.find(d => d.name === inputValues.name)
  const tripRequest = {
    id: generateTripRequestId(),
    userID: user.id,
    destinationID: destRequest.id,
    travelers: Number(inputValues.travelerAmt),
    date: finalizeInputDate(),
    duration: calculateDays(inputValues.start, inputValues.end),
    status: 'pending',
    suggestedActivities: finalizeSuggestedActivities()
  }
  return tripRequest
}

function generateTripRequestId() {
  const tripIds = tripRepo.list.map(t => t.id);
  const highestId = Math.max(...tripIds);
  return highestId + 1
}

function finalizeSuggestedActivities() {
  if (inputValues.activities === 'N/A') {
    return [];
  }
  return inputValues.activities.split()
}

function finalizeInputDate() {
  const date = inputValues.start.split('-');
  return date.join('/')
}

function convertTripRequest(tripReq) {
  const trip = new Trip(tripReq, destinationRepo.list);
  return trip
}

function calcluateTotalTripsCost() {
  const costs = user.trips.map(t => t.calculateTripCost());
  return costs.reduce((a, cost) => a + cost);
}

function userValidate() {
  const nameInput = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const expected = 'travel2020'
  const nameId = nameInput.slice(-2);
  if (nameInput === 'agency' && password === expected) {
    user = '';
    return true
  } else if (Number(nameId) && password === expected) {
    user = '/' + nameId;
    return true
  } else {
    alert('Please enter a valid username & password 😓')
    return false
  }
}

function userLogin() {
  if (event.target.id === 'login' && userValidate()) {
    const paths = [`travelers${user}`, 'trips', 'destinations'];
    assignResults(requests(paths));
    return true
  } else {
    return false
  }
}

function assignResults(results) {
  results[0].then(data => {
    if (user) {
      travelers = data;
    } else {
      travelers = data.travelers;
    }
  });
  results[1].then(data => trips = data.trips);
  results[2].then(data => destinations = data.destinations);
}

function disableNavigation() {
  const logo = document.querySelector('.logo');
  const navBtns = document.querySelectorAll('.nav-btn');
  const navTabs = document.querySelectorAll('li');
  logo.disabled = true;
  navBtns.forEach(btn => btn.disabled = true);
  navTabs.forEach(tab => tab.classList.add('hidden'))
}

function enableNavigation() {
  const logo = document.querySelector('.logo');
  const navBtns = document.querySelectorAll('.nav-btn');
  const navTabs = document.querySelectorAll('li');
  logo.disabled = false;
  navBtns.forEach(btn => btn.disabled = false);
  navTabs.forEach(tab => tab.classList.remove('hidden'))
}

export {
  user,
  today,
  tomorrow,
  destinationRepo,
  formatInputDate,
  calculateDays,
  formatTripRequest,
  calcluateTotalTripsCost,
  convertTripRequest,
  userValidate,
  sendPostRequest,
  enableNavigation,
  travelers,
  trips,
  destinations,
  userLogin,
}