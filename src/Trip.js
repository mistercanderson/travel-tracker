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
    return Number((expenses + agentFee).toFixed(0))
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
    }
    let day = endDate.getUTCDate();
    if (day.toString().length < 2) {
      day = '0' + day
    }
    return (`${year}/${month}/${day}`);
  }

  formatDate(date) {
    const dateElements = date.split('/');
    const year = dateElements.shift();
    dateElements.push(year)
    return dateElements.join('/');
  }

  returnTripDates(start = this.date, end = this.findEndDate()) {
    return [start, end].map(date => this.formatDate(date))
  }
}

module.exports = Trip;