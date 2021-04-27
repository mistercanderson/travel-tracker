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
  displayUsername,
  displayTripsInfo,
  displayTrips,
  agentInputValues
} from './domManipulation'

import Trip from './Trip';

import {
  postTrip,
  postMessage,
  requests,
  updateTrip,
  deleteTrip
} from './apiCalls'

let user;
let travelers, trips, destinations;
const today = new Date().toISOString().slice(0, 10);
const tomorrow = new Date(new Date(today).getTime() + 86400000).toISOString().slice(0, 10);

window.addEventListener('load', loadFunctions);
window.addEventListener('click', clickFunctions);

function loadFunctions() {
  navigationSwitch();
  displayLogin();
}

function clickFunctions() {
  if (userLogin()) {
    setTimeout(() => {
      instantiateClasses();
      user = users;
      displayUsername();
      navigationSwitch(true);
      displayTripsInfo();
      displayTrips();
    }, 200);
  }
  displayChanges();
  sendPostRequest();
  sendUpdateRequest();
  sendDeleteRequest();
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

function sendUpdateRequest() {
  if (event.target.id === 'approveTrip' && verifyInputValues()) {
    const updateRequest = formatTripUpdate();
    updateTrip(updateRequest);
    setTimeout(() => {
      if (postMessage) {
        const trip = user.trips.find(t => t.id === Number(agentInputValues.tripId));
        user.approvePendingTrip(trip);
        user.getPendingTrips();
      }
    }, 500)
  }
}

function sendDeleteRequest() {
  if (event.target.id === 'denyTrip' && verifyInputValues()) {
    const deleteRequest = formatTripDelete();
    deleteTrip(deleteRequest);
    setTimeout(() => {
      if (postMessage) {
        const trip = user.trips.find(t => t.id === Number(agentInputValues.tripId));
        user.trips.splice(user.trips.indexOf(trip), 1);
        user.getPendingTrips();
      }
    }, 500)
  }
}

function verifyInputValues() {
  const inputKeys = Object.keys(agentInputValues);
  if (inputKeys.every(key => agentInputValues[key])) {
    return true
  } else {
    return false
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
    suggestedActivities: finalizeRequestActivities()
  }
  return tripRequest
}

function formatTripUpdate() {
  const updateRequest = {
    id: Number(agentInputValues.tripId),
    status: 'approved',
    suggestedActivities: finalizeUpdateActivities()
  }
  return updateRequest
}

function formatTripDelete() {
  return Number(agentInputValues.tripId)
}

function generateTripRequestId() {
  const tripIds = tripRepo.list.map(t => t.id);
  const highestId = Math.max(...tripIds);
  return highestId + 1
}

function finalizeRequestActivities() {
  if (inputValues.activities === 'N/A') {
    return [];
  }
  return inputValues.activities.split()
}

function finalizeUpdateActivities() {
  if (agentInputValues.activities === 'N/A') {
    return [];
  }
  return agentInputValues.activities.split()
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
  } else if (Number(nameId) && nameInput.includes('traveler') && password === expected) {
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
    assignGETResults(requests(paths));
    return true
  } else {
    return false
  }
}

function assignGETResults(results) {
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

function navigationSwitch(boolean) {
  const logo = document.querySelector('.logo');
  const navTabs = document.querySelectorAll('li');
  if (boolean) {
    logo.disabled = false;
    navTabs.forEach(tab => tab.classList.remove('hidden'))
  } else {
    logo.disabled = true;
    navTabs.forEach(tab => tab.classList.add('hidden'))
  }
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
  travelers,
  trips,
  destinations,
}