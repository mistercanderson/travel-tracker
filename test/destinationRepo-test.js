import chai from 'chai';
const expect = chai.expect;
import DestinationRepo from '../src/DestinationRepo'
import destinations from './test-data/sample-destination-data';

describe('DestinationRepo', () => {

  let destinationRepo;

  beforeEach(() => {
    destinationRepo = new DestinationRepo(destinations)
  });

  it('should hold a list of destinations', () => {
    expect(destinationRepo.destinations).to.equal(destinations)
  });
})