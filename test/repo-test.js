import chai from 'chai';
const expect = chai.expect;
import Repo from '../src/Repo'
import destinations from './test-data/sample-destination-data';

describe('Repo', () => {

  let repo;

  beforeEach(() => {
    repo = new Repo(destinations)
  });

  it('should hold a list of objects', () => {
    expect(repo.list).to.deep.equal(destinations)
  });
})