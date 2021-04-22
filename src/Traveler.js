class Traveler {
  constructor({
    id,
    name,
    travelerType
  }, trips) {
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

  planTrip(destinationID, travelers, date, duration, suggestedActivities) {
    let trip = {
      userID: this.id,
      destinationID,
      travelers,
      date,
      duration,
      status: 'pending',
      suggestedActivities
    }
    const tripValues = Object.values(trip);
    tripValues.forEach(value => {
      if (!value) {
        trip = 'Please make sure to fill out all the trip information.'
      }
    })
    return trip
  }
}

module.exports = Traveler;