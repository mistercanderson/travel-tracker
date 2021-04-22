import chai from 'chai';
const expect = chai.expect;
import Repo from '../src/Repo';
import TripRepo from '../src/TripRepo';
import trips from './test-data/sample-trip-data';

describe('TripRepo', () => {

  let tripRepo;

  beforeEach(() => {
    tripRepo = new TripRepo(trips)
  });

  it('should be an instance of the Repo class', () => {
    expect(tripRepo).to.be.an.instanceof(Repo)
  });

  it('should hold a list of trips', () => {
    expect(tripRepo.list).to.equal(trips)
  });
})