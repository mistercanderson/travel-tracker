import {
  travelers,
  trips,
  destinations,
  user,
} from './scripts'

import Traveler from './Traveler';
import Destination from './Destination';
import TripRepo from './TripRepo';
import DestinationRepo from './DestinationRepo';
import Trip from './Trip';
import Agency from './Agency';

let destinationRepo;
let tripRepo;
let users;

function instantiateClasses() {
  generateDestinations();
  generateDestinationRepo();
  generateTrips();
  generateTripRepo();
  if (user) {
    generateTraveler();
  } else {
    generateAgency();
  }
}

function generateDestinations() {
  if (destinations) {
    return destinations.map(dest => dest = new Destination(dest))
  }
}

function generateDestinationRepo() {
  destinationRepo = new DestinationRepo(generateDestinations());
}

function generateTrips() {
  if (trips) {
    return trips.map(trip => trip = new Trip(trip, destinationRepo.list))
  }
}

function generateTripRepo() {
  tripRepo = new TripRepo(generateTrips());
}

function generateAgency() {
  if (travelers) {
    users = new Agency(tripRepo.list);
  }
}

function generateTraveler() {
  if (travelers) {
    users = new Traveler(travelers, tripRepo.list);
  }
}

export {
  instantiateClasses,
  tripRepo,
  destinationRepo,
  users,
};