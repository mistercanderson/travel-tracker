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
} from './domManipulation'

import Trip from './Trip';

import {
  postTrip,
  postMessage
} from './apiCalls'

let user;
const today = new Date().toISOString().slice(0, 10);
const tomorrow = new Date(new Date(today).getTime() + 86400000).toISOString().slice(0, 10);

window.addEventListener('load', loadFunctions);
window.addEventListener('click', clickFunctions);

function loadFunctions() {
  instantiateClasses();
  if (checkApi()) {
    displayLogin();
  }
}

function clickFunctions() {
  displayChanges();
  sendPostRequest();
}

function checkApi() {
  if (destinationRepo.list && users && tripRepo.list) {
    return true
  } else {
    return false
  }
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
    }, 300)
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
  const idList = users.map(u => u.id);
  const nameId = Number(nameInput.slice(-2));
  if (idList.includes(nameId) && password === 'travel2020') {
    user = users.find(u => u.id === nameId);
    return true
  } else {
    alert('Please enter a valid username & password 😓')
    return false
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
  convertTripRequest,
  userValidate,
  sendPostRequest
}