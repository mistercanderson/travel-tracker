let travelers, trips, destinations;

const names = ['travelers', 'trips', 'destinations'];

const requests = names.map(name => fetch(`http://localhost:3001/api/v1/${name}`));

const dataGET = () => Promise.all(requests)
  .then(responses => responses.map(response => response.json()))
  .then(dataSets => dataSets.forEach((set, i) => {
    if (i < 1) {
      set.then(data => travelers = data.travelers)
    } else if (i === 1) {
      set.then(data => trips = data.trips)
    } else {
      set.then(data => destinations = data.destinations)
    }
  }))
  .catch(err => console.log(err));

dataGET()

// export default travelers

// let travelers;
// let trips;
// let destinations;

// const travelersGET = () => fetch('http://localhost:3001/api/v1/travelers')
// .then(response => response.json())
// .then(data => travelers = data)
// .catch(err => err.message)

// const tripsGET = () => fetch('http://localhost:3001/api/v1/trips')
// .then(response => response.json())
// .then(data => trips = data)
// .catch(err => err.message)

// const destinationsGET = () => fetch('http://localhost:3001/api/v1/destinations')
// .then(response => response.json())
// .then(data => destinations = data)
// .catch(err => err.message)

// travelersGET();
// tripsGET();
// destinationsGET();

export {
  travelers,
  trips,
  destinations
}