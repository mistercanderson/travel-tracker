class Destination {
  constructor({id, destination, estimatedLodgingCostPerDay, estimatedFlightCostPerPerson, image, alt}) {
    this.id = id;
    this.name = destination;
    this.estimatedLodgingCostPerDay = estimatedLodgingCostPerDay;
    this.estimatedFlightCostPerPerson = estimatedFlightCostPerPerson;
    this.image = image || null;
    this.alt = alt || this.name;
  }
}

module.exports = Destination;