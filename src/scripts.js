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
  inputValues
} from './domManipulation'
import Trip from './Trip';

let user;
const today = new Date().toISOString().slice(0, 10);
const tomorrow = new Date(new Date(today).getTime() + 86400000).toISOString().slice(0, 10)
console.log(tomorrow);

window.addEventListener('load', loadFunctions)
window.addEventListener('click', clickFunctions)
// window.addEventListener('click', () => console.log(event.target.id))

function loadFunctions() {
  instantiateClasses();
  pickRandomUser();
  displayUsername();
  displayTrips();
  console.log(destinationRepo);
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
    id: 999999,
    userID: user.id,
    destinationID: destRequest.id,
    travelers: inputValues.travelerAmt,
    date: finalizeInputDate(),
    duration: calculateDays(inputValues.start, inputValues.end),
    status: 'pending',
    suggestedActivities: finalizeSuggestedActivities()
  }
  // const newTrip = new Trip(tripRequest, destinationRepo.list);
  // return newTrip
  return tripRequest.JSONStringify();
}

function finalizeSuggestedActivities() {
  if (inputValues.activities = 'N/A') {
    return [];
  }
  return inputValues.activities.split(',')
}

function finalizeInputDate() {
  const date = inputValues.start.split('-');
  return date.join('/')
}

export {
  user,
  today,
  tomorrow,
  destinationRepo,
  formatInputDate,
  calculateDays
}