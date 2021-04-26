let travelers, trips, destinations;

// ********** THIRD WAY **********
const names = ['travelers', 'trips', 'destinations'];

const requests = () => {
  const results = names.map(name => fetch(`http://localhost:3001/api/v1/${name}`).then(response => {
      if (response.ok) {
        return response.json()
      }
      throw new Error(response)
    })
    .catch(err => console.log(err))
  );
  const assignResults = () => {
    results[0].then(data => travelers = data.travelers);
    results[1].then(data => trips = data.trips);
    results[2].then(data => destinations = data.destinations);
  }
  return assignResults()
};

requests();

// const data = requests();


// const assignData = () => {
//   assignTravelers();
//   assignTrips();
//   assignDestinations()
// };

// assignData();
// const data = requests();

// const assignTravelers = () => data[0].then(data => travelers = data.travelers);

// const assignTrips = () => data[1].then(data => trips = data.trips);

// const assignDestinations = () => data[2].then(data => destinations = data.destinations);

// const assignData = () => {
//   assignTravelers();
//   assignTrips();
//   assignDestinations()
// };

// assignData();

// ********** SECOND WAY **********
// const dataGET = () => Promise.all(data)
//   .then(dataSets => dataSets.forEach((set, i) => {
//     if (i < 1) {
//       set.then(data => travelers = data.travelers)
//     } else if (i === 1) {
//       set.then(data => trips = data.trips)
//     } else {
//       set.then(data => destinations = data.destinations)
//     }
//   }))
//   .catch(err => console.log(err));

// dataGET()


// ********** OLDEST WAY **********
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
  destinations,
  // data
}