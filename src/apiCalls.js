import {
  renderGETError,
  renderPOSTError,
  dashboard,
  pageInfo
} from './domManipulation';

let postMessage;

const requests = (paths) => {
  const results = paths.map(path => fetch(`http://localhost:3001/api/v1/${path}`)
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
    .then(data => {
      postMessage = data.message
    })
    .catch(err => {
      postMessage = '';
      displayPOSTError();
      console.log(err)
    })
};

const updateTrip = trip => {
  const tripJSON = JSON.stringify(trip);
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: tripJSON,
    redirect: 'follow'
  };
  const request = fetch("http://localhost:3001/api/v1/updateTrip", requestOptions);
  request.then(response => {
    if (response.ok) {
      return response.json()
    }
    throw new Error(response)
  })
    .then(data => {
      postMessage = data.message
    })
    .catch(err => {
      postMessage = '';
      displayPOSTError();
      console.log(err)
    })
}

const deleteTrip = id => {
  const requestOptions = {
    method: 'DELETE',
    redirect: 'follow'
  };
  const request = fetch(`http://localhost:3001/api/v1/trips/${id}`, requestOptions);
  request.then(response => {
    if (response.ok) {
      return response.json()
    }
    throw new Error(response)
  })
    .then(data => {
      postMessage = data.message
    })
    .catch(err => {
      postMessage = '';
      displayPOSTError();
      console.log(err)
    })
}

const displayGETError = () => {
  dashboard.innerHTML = '';
  dashboard.innerHTML = renderGETError()
}

const displayPOSTError = () => {
  pageInfo.innerText = 'Sorry'
  dashboard.innerHTML = '';
  dashboard.innerHTML = renderPOSTError();
}

export {
  postTrip,
  postMessage,
  requests,
  updateTrip,
  deleteTrip
}