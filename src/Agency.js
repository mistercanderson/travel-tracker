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

  calculateTotalTripCommission() {
    const tripCosts = this.trips.map(t => t.calculateTripCost());
    const totalCosts = tripCosts.reduce((a, b) => a + b);
    return (totalCosts * .1).toFixed(0)
  }

  calculatePendingTripCommission() {
    if (this.pendingTrips.length) {
      const tripCosts = this.pendingTrips.map(t => t.calculateTripCost());
      const totalCosts = tripCosts.reduce((a, b) => a + b);
      return (totalCosts * .1).toFixed(0)
    } else {
      return 0
    }
  }

  calculateTripCommission(trip) {
    return (trip.calculateTripCost() * .1).toFixed(0)
  }
}

module.exports = Agency;