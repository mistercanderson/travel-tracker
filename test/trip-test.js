import chai from 'chai';
const expect = chai.expect;
import Trip from '../src/Trip';
import trips from './test-data/sample-trip-data';
import destinations from './test-data/sample-destination-data'

describe('Trip', () => {

  let trip;

  beforeEach(() => {
    trip = new Trip(trips[0], destinations)
  })

  it('should be an instance of Trip', () => {
    expect(trip).to.be.an.instanceof(Trip)
  });

  it('should hold some basic data about itself', () => {
    expect(trip.id).to.equal(1)
    expect(trip.userID).to.equal(4)
    expect(trip.travelers).to.equal(1)
    expect(trip.date).to.equal('2019/09/16')
    expect(trip.duration).to.equal(8)
    expect(trip.status).to.equal('approved')
    expect(trip.suggestedActivities).to.be.an('array')
  });

  it('should be able to get information about the trip destination', () => {
    expect(trip.destination).to.deep.equal(destinations[3])
  });

  it('should be able to calculate the cost of the trip including 10% agent fee', () => {
    expect(trip.calculateTripCost()).to.equal(957)
  });

  it('should be able to be approved', () => {
    const unapprovedTrip = new Trip(trips[1], destinations);
    expect(unapprovedTrip.status).to.equal('pending')

    unapprovedTrip.approveTrip();

    expect(unapprovedTrip.status).to.equal('approved')
  });

  it('should only be approved if the status is pending', () => {
    expect(trip.approveTrip()).to.equal('This trip has already been approved')
  });

  it('should be able to add an activity', () => {
    trip.addActivity('ski');
    trip.addActivity('relax');
    
    expect(trip.suggestedActivities).to.deep.equal(['ski', 'relax'])
  });
  
  it('should be able to remove an activity', () => {
    trip.addActivity('eat');
    trip.removeActivity('relax');

    expect(trip.suggestedActivities).to.deep.equal(['ski', 'eat'])
  });

  it('should only remove an activity if it\'s included in the activity list', () => {
    expect(trip.removeActivity('dance')).to.equal('Sorry, dance is not in your activity list.');

    expect(trip.removeActivity('skip rope')).to.equal('Sorry, skip rope is not in your activity list.')
  });

  it('should be able to find the end date of the trip', () => {
    trip.findEndDate()
  })

});