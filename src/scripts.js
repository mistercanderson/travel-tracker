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
  inputValues,
  pageInfo,
  displayTripsInfo
} from './domManipulation'
import Trip from './Trip';

let user;
const today = new Date().toISOString().slice(0, 10);
const tomorrow = new Date(new Date(today).getTime() + 86400000).toISOString().slice(0, 10);

window.addEventListener('load', loadFunctions);
window.addEventListener('click', clickFunctions);

function loadFunctions() {
  instantiateClasses();
  pickRandomUser();
  displayUsername();
  displayTripsInfo();
  displayTrips();
  console.log(user.trips.map(t => t.calculateTripCost()));
}

function clickFunctions() {
  displayChanges()
}

function pickRandomUser() {
  user = users[Math.floor(Math.random() * users.length)]
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

function finalizeTripRequest() {
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

export {
  user,
  today,
  tomorrow,
  destinationRepo,
  formatInputDate,
  calculateDays,
  finalizeTripRequest,
  calcluateTotalTripsCost,
  convertTripRequest
}