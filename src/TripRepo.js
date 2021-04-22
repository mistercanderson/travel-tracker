import Trip from './Trip'

class TripRepo {
  constructor(trips) {
    this.trips = trips.map(trip => new Trip(trip));
  }
}

module.exports = TripRepo;