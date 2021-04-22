import chai from 'chai';
const expect = chai.expect;
import Repo from '../src/Repo'
import DestinationRepo from '../src/DestinationRepo'
import destinations from './test-data/sample-destination-data';

describe('DestinationRepo', () => {

  let destinationRepo;

  beforeEach(() => {
    destinationRepo = new DestinationRepo(destinations)
  });

  it('should be an instance of the Repo class', () => {
    expect(destinationRepo).to.be.an.instanceof(Repo)
  });

  it('should hold a list of destinations', () => {
    expect(destinationRepo.list).to.deep.equal(destinations)
  });
})