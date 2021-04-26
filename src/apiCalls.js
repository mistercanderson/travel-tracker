import {
  renderGETError,
  renderPOSTError,
  dashboard,
  pageInfo
} from './domManipulation'

let travelers, trips, destinations;

const names = ['travelers', 'trips', 'destinations'];

const requests = () => {
  const results = names.map(name => fetch(`http://localhost:3001/api/v1/${name}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      throw new Error(response)
    })
    .catch(err => {
      displayGETError();
      console.log(err.message)
    })
  );
  return results
};

const assignResults = (results) => {
  results[0].then(data => travelers = data.travelers);
  results[1].then(data => trips = data.trips);
  results[2].then(data => destinations = data.destinations);
}

const postTrip = trip => {
  const tripJSON = JSON.stringify(trip);
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: tripJSON,
    redirect: 'follow'
  };
  const request = fetch("http://localhost:3001/api/v1/trips", requestOptions);
  request.then(response => {
      if (response.ok) {
        return response.json()
      }
      throw new Error(response)
    })
    .then(data => trips = data.trips)
    .catch(err => {
      displayPOSTError();
      console.log(err)
    })
};

const displayGETError = () => {
  dashboard.innerHTML = '';
  dashboard.innerHTML = renderGETError()
}

const displayPOSTError = () => {
  pageInfo.innerText = 'Sorry'
  dashboard.innerHTML = '';
  dashboard.innerHTML = renderPOSTError()
}

assignResults(requests());

export {
  travelers,
  trips,
  destinations,
  postTrip
}