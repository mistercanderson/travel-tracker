import {
  travelers,
  trips,
  destinations,
  // data
} from './apiCalls';

import Traveler from './Traveler';
import Destination from './Destination';
// import Repo from './Repo';
import TripRepo from './TripRepo';
import DestinationRepo from './DestinationRepo';
import Trip from './Trip';

let user;
// console.log(data);
// console.log(travelers);
// setTimeout(() => console.log(travelers), 1000);

function instantiateClasses() {
  generateDestinations();
  generateDestinationRepo();
  generateTrips();
  generateTripRepo();
  generateTravelers();
}

function generateDestinations() {
  return destinations.map(dest => dest = new Destination(dest))
}

function generateDestinationRepo() {
  return new DestinationRepo(generateDestinations())
}

function generateTrips() {
  return trips.map(trip => trip = new Trip(trip, generateDestinationRepo().list))
}

function generateTripRepo() {
  return new TripRepo(generateTrips())
}
function generateTravelers() {
  return travelers.map(traveler => traveler = new Traveler(traveler, generateTripRepo().list))
}

