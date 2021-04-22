class Trip {
  constructor({
    id,
    userID,
    destinationID,
    travelers,
    date,
    duration,
    status,
    suggestedActivities
  }, destinations) {
    this.id = id;
    this.userID = userID;
    this.destination = destinations.filter(destination => destination.id === destinationID)[0]
    this.travelers = travelers;
    this.date = date;
    this.duration = duration;
    this.status = status;
    this.suggestedActivities = suggestedActivities;
  }

  calculateTripCost() {
    const flightCost = this.travelers * this.destination.estimatedFlightCostPerPerson;
    const lodgingCost = this.duration * this.destination.estimatedLodgingCostPerDay;
    const expenses = flightCost + lodgingCost;
    const agentFee = expenses * .1;
    return expenses + agentFee
  }

  approveTrip() {
    if (this.status === 'pending') {
      this.status = 'approved'
    } else {
      return 'This trip has already been approved'
    }
  }

  addActivity(activity) {
    this.suggestedActivities.push(activity)
  }

  removeActivity(activity) {
    if (this.suggestedActivities.includes(activity)) {
      this.suggestedActivities.splice(this.suggestedActivities.indexOf(activity), 1)
    } else {
      return `Sorry, ${activity} is not in your activity list.`
    }
  }

  findEndDate() {
    const startDate = new Date(this.date);
    const daysToMs = (this.duration - 1) * 86400000;
    const endTime = startDate.getTime() + daysToMs;
    const endDate = new Date(endTime);
    const year = endDate.getUTCFullYear();
    let month = endDate.getUTCMonth() + 1;
    if (month.toString().length < 2) {
      month = '0' + month
    };
    const day = endDate.getUTCDate();
    return (`${year}/${month}/${day}`);
  }

}

module.exports = Trip;