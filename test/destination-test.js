import chai from 'chai';
const expect = chai.expect;
import Destination from '../src/Destination';
import destinations from './test-data/sample-destination-data';

describe.only('Destination', () => {

  let destination;

  beforeEach(() => {
    destination = new Destination(destinations[0])
  })

  it('should be an instance of Destination', () => {
    expect(destination).to.be.an.instanceof(Destination)
  });

  it('should hold some basic destination info', () => {
    expect(destination.id).to.equal(1);
    expect(destination.name).to.equal('Lima, Peru');
    expect(destination.estimatedLodgingCostPerDay).to.equal(70);
    expect(destination.estimatedFlightCostPerPerson).to.equal(400);
  });

  it('should always have an alt tag if the image is broken', () => {
    const destinationNoAltNoImage = new Destination(destinations[3])

    expect(destinationNoAltNoImage.alt).to.equal('Cartagena, Colombia')
  });
});