class Traveler {
  constructor({id, name, travelerType}, trips) {
    this.id = id;
    this.name = name;
    this.travelerType = travelerType;
    this.trips = trips;
    this.getTrips();
  }

  getTrips() {
    const myTrips = this.trips.filter(trip => trip.userID === this.id);
    if (myTrips.length) {
      this.trips = myTrips
      return myTrips
    } else {
      return 'You don\'t have any trips'
    }
  }
}

module.exports = Traveler;