import chai from 'chai';
const expect = chai.expect;
import Traveler from '../src/Traveler';
import travelers from './test-data/sample-traveler-data';
import trips from './test-data/sample-trip-data';

describe('Traveler', () => {

  let traveler;

  beforeEach(() => {
    traveler = new Traveler(travelers[0], trips);
  });

  it('should be an instance of Traveler', () => {
    expect(traveler).to.be.an.instanceof(Traveler)
  });

  it('should have an id', () => {
    expect(traveler.id).to.equal(1)
  });

  it('should have a name', () => {
    expect(traveler.name).to.equal('Ham Leadbeater')
  });

  it('should have a preferred travel activity', () => {
    expect(traveler.travelerType).to.equal('relaxer')
  });

  it('should know what trips it has been on & trips it has planned', () => {
    expect(traveler.getTrips()).to.deep.equal([trips[3]]);
    expect(traveler.trips).to.deep.equal([trips[3]])
  });

  it('should tell the user if they don\'t have any trips', () => {
    const traveler2 = new Traveler(travelers[1], trips);

    expect(traveler2.getTrips()).to.equal('You don\'t have any trips');
  });

  it('should be able to plan a new trip', () => {
    const myNewTrip = traveler.planTrip(1, 3, '2021/04/22', 9, ['swim']);
    
    expect(myNewTrip).to.deep.equal({
      userID: 1,
      destinationID: 1,
      travelers: 3,
      date: '2021/04/22',
      duration: 9,
      status: 'pending',
      suggestedActivities: ['swim']
    })
  });
  
  it('should let the traveler know if they are missing info for their planned trip', () => {
    const badTrip = traveler.planTrip('2021/04/22', 9, ['swim']);
    
    expect(badTrip).to.equal('Please make sure to fill out all the trip information.')
  });
});