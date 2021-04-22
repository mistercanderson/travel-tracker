import chai from 'chai';
const expect = chai.expect;
import Destination from '../src/Destination';
import destinations from './test-data/sample-destination-data';

describe('Destination', () => {

  let destination;

  beforeEach(() => {
    destination = new Destination()
  })

  it('should be an instance of Destination', () => {
    expect(destination).to.be.an.instanceof(Destination)
  });
});