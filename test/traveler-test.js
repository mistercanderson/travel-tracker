import chai from 'chai';
const expect = chai.expect;
import Traveler from '../src/Traveler'

describe('Traveler', () => {

  let traveler;

  beforeEach(() => {
    traveler = new Traveler()
  })

  it('should be an instance of Traveler', () => {
    expect(traveler).to.be.an.instanceof(Traveler)
  });
});