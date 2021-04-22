import chai from 'chai';
const expect = chai.expect;
import Trip from '../src/Trip';
import trips from './test-data/sample-trip-data';

describe('Trip', () => {

  let trip;

  beforeEach(() => {
    trip = new Trip()
  })

  it('should be an instance of Trip', () => {
    expect(trip).to.be.an.instanceof(Trip)
  });
});