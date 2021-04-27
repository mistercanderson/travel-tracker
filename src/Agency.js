class Agency {
  constructor(trips) {
    this.name = 'Agency'
    this.trips = trips;
    this.pendingTrips = this.trips.filter(t => t.status === 'pending');
    this.travelerType = 'agent'
  }

  getPendingTrips() {
    this.pendingTrips = this.trips.filter(t => t.status === 'pending');
  }

  approvePendingTrip(trip) {
    return trip.approveTrip();
  }

  calculateTripCommission(trip) {
    return Number((trip.calculateTripCost() * .1).toFixed(0))
  }

  calculateTotalTripCommission() {
    const tripsCommiss = this.trips.map(t => this.calculateTripCommission(t));
    const commissionSum = tripsCommiss.reduce((a, b) => a + b);
    return commissionSum
  }

  calculatePendingTripCommission() {
    if (this.pendingTrips.length) {
      const tripsCommiss = this.pendingTrips.map(t => this.calculateTripCommission(t));
      const commissionSum = tripsCommiss.reduce((a, b) => a + b);
      return commissionSum
    } else {
      return 0
    }
  }
}

module.exports = Agency;