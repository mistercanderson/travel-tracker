import chai from 'chai';
const expect = chai.expect;
import Traveler from '../src/Traveler';
import travelers from './test-data/sample-traveler-data';

describe('Traveler', () => {

  let traveler;

  beforeEach(() => {
    traveler = new Traveler()
  })

  it('should be an instance of Traveler', () => {
    expect(traveler).to.be.an.instanceof(Traveler)
  });
});