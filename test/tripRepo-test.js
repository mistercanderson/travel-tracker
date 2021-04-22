import chai from 'chai';
const expect = chai.expect;
import TripRepo from '../src/TripRepo'
import trips from './test-data/sample-trip-data';

describe('TripRepo', () => {

  let tripRepo;

  beforeEach(() => {
    tripRepo = new TripRepo(trips)
  });

  it('should hold a list of trips', () => {
    expect(tripRepo.trips).to.equal(trips)
  });
})