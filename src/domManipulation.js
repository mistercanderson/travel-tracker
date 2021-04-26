import {
  user,
  today,
  tomorrow,
  destinationRepo,
  formatInputDate,
  calculateDays,
  calcluateTotalTripsCost,
} from './scripts'

let plannedDest;
const dashboard = document.querySelector('.dashboard');
const pageInfo = document.getElementById('pageInfo');
const inputValues = {
  name: null,
  start: null,
  end: null,
  travelerAmt: null,
  activities: null,
}
const agentInputValues = {
  tripId: null,
  activities: null
}

function displayChanges() {
  plannedDest = '';
  switch (event.target.id) {
    case 'myTrips':
      displayTripsInfo();
      displayTrips();
      break;
    case 'planTrip':
      displayTripPlanner();
      break;
    case 'destinations':
      displayDestinations();
      break;
    case 'admin':
      displayUserProfile();
      break;
    case 'logo':
      displayTripsInfo();
      displayTrips();
      break;
    case 'planTripButton':
      if (extractInputValues()) {
        displayTripPreview();
      }
      break;
    case 'bookNow':
      plannedDest = (event.target.previousElementSibling.previousElementSibling.innerText);
      displayTripPlanner();
      autoFillDestinationName();
      break;
    case 'cancelTrip':
      displayTripPlanner();
      autoFillDestinationName();
      break;
    case 'finalizeTrip':
      displayTripSuccess();
      break;
    case 'successHome':
      displayTripsInfo();
      displayTrips();
      break;
    case 'approveTrip':
      if (extractAgentInputValues()) {
        displayTripUpdate();
      }
      break;
    case 'denyTrip':
      if (extractAgentInputValues()) {
        displayTripDelete();
      }
      break;
  }
}

function displayTripsInfo() {
  if (user.name !== 'Agency') {
    pageInfo.innerText = `My Trips ($${calcluateTotalTripsCost()})`;
  } else {
    displayAgencyInfo();
  }
}

function displayUsername() {
  const name = document.getElementById('user');
  const nameButton = document.getElementById('admin');
  name.innerText = user.name
  nameButton.innerText = user.name[0];
  name.classList.remove('hidden');
  nameButton.classList.remove('hidden');
}

function displayTrips() {
  dashboard.innerHTML = '';
  user.trips.forEach(trip => {
    let name = trip.destination.name;
    let dates = trip.returnTripDates().join(' - ');
    let status = trip.status;
    let travelerCount = trip.travelers;
    let image = trip.destination.image;
    let alt = trip.destination.alt;
    let duration = trip.duration;
    let cost = trip.calculateTripCost();
    let commission;
    if (user.name === 'Agency') {
      commission = user.calculateTripCommission(trip);
    }
    // let activities = trip.suggestedActivities.join(', ');
    dashboard.innerHTML += renderTrips(name, dates, status, travelerCount, image, alt, duration, cost, commission)
  })
}

function displayDestinations() {
  dashboard.innerHTML = '';
  destinationRepo.list.forEach(dest => {
    let name = dest.name;
    let image = dest.image;
    let alt = dest.alt;
    let flightCost = dest.estimatedFlightCostPerPerson;
    let lodgingCost = dest.estimatedLodgingCostPerDay;
    dashboard.innerHTML += renderDestinations(name, image, alt, flightCost, lodgingCost)
  })
}

function displayTripPlanner() {

  dashboard.innerHTML = '';
  dashboard.innerHTML = renderTripPlanner();
}

function autoFillDestinationName() {
  const destName = document.getElementById('planDestination')
  if (plannedDest) {
    destName.value = plannedDest;
  } else if (inputValues.name) {
    destName.value = inputValues.name;
  }
}

function extractInputValues() {
  const inputs = {
    name: document.getElementById('planDestination'),
    start: document.getElementById('planStartDate'),
    end: document.getElementById('planEndDate'),
    travelerAmt: document.getElementById('planTravelers'),
    activities: document.getElementById('planActivities')
  };
  const inputKeys = Object.keys(inputs);
  if (calculateDays(inputs.start.value, inputs.end.value) < 1) {
    alert('Please Enter a Valid Date Range 🤪')
    return false
  }
  if (inputKeys.every(key => inputs[key].value)) {
    inputKeys.forEach(key => {
      inputValues[key] = inputs[key].value;
    })
    return true;
  } else {
    alert('Please Make Sure to Include All Required Information 🤠')
    return false;
  }
}

function displayTripPreview() {
  pageInfo.innerText = 'Trip Preview'
  dashboard.innerHTML = '';
  dashboard.innerHTML = renderTripPreview();
}

function displayTripSuccess() {
  pageInfo.innerText = 'Success'
  dashboard.innerHTML = '';
  dashboard.innerHTML = renderTripSuccess();
}

function displayUserProfile() {
  dashboard.innerHTML = '';
  dashboard.innerHTML = renderUserProfile();
}

function displayLogin() {
  dashboard.innerHTML = '';
  dashboard.innerHTML = renderLogin()
}

function renderTrips(name, dates, status, travelerCount, image, alt, duration, cost, commission) {
  if (user.name === 'Agency') {
    return renderAgentTrips(name, dates, status, travelerCount, image, alt, duration, cost, commission);
  }
  return `
     <div class="card-wrapper" tabindex="0">
        <div class="card-image-wrapper">
          <img
            src="${image}"
            alt="${alt}">
          <div class="card-image-overlay caps">
            <div class="day-counter-wrapper">
              <p class="days">Days</p>
              <p class="day-count">${duration}</p>
            </div>
          </div>
        </div>
        <div class="card-info-wrapper">
          <div>
            <h2 class="destination-name">${name}</h2>
            <p class="trip-dates">${dates}</p>
          </div>
          <div class="cost-wrapper">
            <p>Trip Price</p>
            <p class="card-cost">$${cost}</p>
          </div>
          <div class="trip-status-wrapper">
            <h3 class="caps smaller-font">Status:</h3>
            <p class="lighter">${status}</p>
          </div>
          <div class="traveler-wrapper">
            <h4 class="caps smaller-font">Travelers:</h4>
            <p class="traveler-count lighter">${travelerCount}</p>
          </div>
        </div>
      </div>`;
}

function renderDestinations(name, image, alt, flightCost, lodgingCost) {
  pageInfo.innerText = 'Destinations';
  return `
      <div class="card-wrapper">
        <div class="card-image-wrapper">
          <img
            src="${image}"
            alt="${alt}">
        </div>
        <div class="card-info-wrapper">
          <h2 class="destination-name">${name}</h2>
          <div class="cost-wrapper">
            <p>Flight:</p>
            <p class="card-cost">$${flightCost}/person</p>
            <p>Lodging:</p>
            <p class="card-cost">$${lodgingCost}/day</p>
          </div>
          <button id="bookNow" class="book-now">Book Now!</button>
        </div>
      </div>`;
}

function renderTripPlanner() {
  if (user.name === 'Agency') {
    return renderAgentApproval();
  }
  pageInfo.innerText = 'Plan a Trip';
  return `
    <form class="plan-trip" id="tripPlanner">
      <select name="destination" id="planDestination" required>
        <option value="">Select a Destination (required)</option>
        ${generateNameOptions()}
      <select>
      <label for="planStartDate">Start Date (required)</label>
      <input type="date" id="planStartDate" name="start-date" value="${today}"
       min="${today}" required>
      <label for="planEndDate">End Date (required)</label>
      <input type="date" id="planEndDate" name="end-date" min="${tomorrow}" required>
      <input placeholder="Number of Travelers (required)" type="number" min="1" name="travelers" id="planTravelers" required>
      <select name="activities" id="planActivities">
        <option value="N/A">Select an Activity (optional)</option>
        ${generateActivityOptions()}
      <select>
      <button type="button" id="planTripButton">Plan Trip</button>
    </form>`;
}

function generateNameOptions() {
  const names = destinationRepo.list.map(d => d.name);
  const options = names.map(name => `<option value="${name}">${name}</option>`);
  return [...options]
}

function generateActivityOptions() {
  const suggestions = ['Relax', 'Seek Thrills', 'Shop', 'Sight-Seeing', 'Museum Hopping', 'Dine Out'];
  const options = suggestions.map(s => `<option value="${s}">${s}</option>`);
  return [...options]
}

function renderTripPreview() {
  const dest = destinationRepo.list.find(d => d.name === inputValues.name);
  return `
    <section class="trip-preview">
      <div class="card-wrapper">
        <div class="card-image-wrapper">
          <img
            src="${dest.image}"
            alt="${dest.alt}">
          <div class="card-image-overlay caps">
            <div class="day-counter-wrapper">
              <p class="days">Days</p>
              <p class="day-count">${calculateDays(inputValues.start, inputValues.end)}</p>
            </div>
          </div>
        </div>
        <div class="card-info-wrapper">
          <div>
            <h2 class="destination-name">${inputValues.name}</h2>
            <p class="trip-dates">${formatInputDate(inputValues.start)} - ${formatInputDate(inputValues.end)}</p>
          </div>
          <p>Suggested Activity:</p>
          <p class="card-cost">${inputValues.activities}</p>
          <div class="trip-status-wrapper">
            <h3 class="caps smaller-font">Status:</h3>
            <p class="lighter">pending</p>
          </div>
          <div class="traveler-wrapper">
            <h4 class="caps smaller-font">Travelers:</h4>
            <p class="traveler-count lighter">${inputValues.travelerAmt}</p>
          </div>
        </div>
      </div>
      <article class="trip-cost">
        After TravelTracker agent fees, the total cost of your trip will be $${calcPreviewCost(dest.estimatedFlightCostPerPerson, dest.estimatedLodgingCostPerDay, inputValues.travelerAmt, calculateDays(inputValues.start, inputValues.end))}.
      </article>
      <form class="plan-trip" id="planTripTwo">
        <button type="button" id="finalizeTrip">Submit Trip Request</button>
        <button type="button" class="bad-button" id="cancelTrip">Cancel</button>
      </form>
    </section>`;
}

function calcPreviewCost(flightCost, lodgCost, people, days) {
  const expenses = (flightCost * people) + (lodgCost * days);
  const agentFee = expenses * .1;
  return (expenses + agentFee).toFixed(0)
}

function renderUserProfile() {
  const highestCost = Math.max(...user.trips.map(t => t.calculateTripCost()));
  const expensiveTrip = user.trips.find(t => t.calculateTripCost() === highestCost);
  const pending = user.trips.filter(t => t.status === 'pending');
  pageInfo.innerText = 'My Profile';
  return `
    <div class="card-wrapper user-profile">
      <h2>${user.name}</h2>
      <ul class="user-data">
        <li class="user-data">Total Trips: ${user.trips.length}</li>
        <li class="user-data">Most Expensive Trip:</li>
        <li class="user-data">${expensiveTrip.destination.name} ($${expensiveTrip.calculateTripCost()})</li>
        <li class="user-data">Pending Trips: ${pending.length}</li>
        <li class="user-data">Traveler Type:</li>
        <li class="user-data">${user.travelerType}</li>
      </ul>
    </div`;
}

function renderLogin() {
  return `
    <form class="login">
      <input placeholder="username" type="text" name="username" id="username" required>
      <input placeholder="password" type="password" name="password" id="password" required>
      <button type="button" class="login-button" id="login">Login</button>
    </form>`;
}

function renderTripSuccess() {
  return `
    <div class="success-wrapper">
      <p class="trip-success">Congratulations! Your trip to ${inputValues.name} has been submitted & will be reviewed by a TravelTracker agent shortly!</p>
      <button id="successHome">View My Trips</button>
    </div>
  `
}

function renderGETError() {
  return `
  <p class="error-message">Sorry, it looks like the TravelTracker servers are down right now. Please try again later.</p>
  `
}

function renderPOSTError() {
  return `
  <div class="plan-trip">
    <p class="error-message">Something went wrong with your trip request. Please try again later.</p>
    <button type="button" class="bad-button" id="cancelTrip">Back</button>
  </div>
  `
}

function displayAgencyInfo() {
  const navButtons = {
    trips: document.getElementById('myTrips'),
    plan: document.getElementById('planTrip'),
    dest: document.getElementById('destinations'),
  }
  const navImages = {
    plane: document.getElementById('planeIcon'),
    suitcase: document.getElementById('suitcaseIcon')
  }
  navButtons.trips.innerText = 'All Trips';
  navButtons.trips.insertAdjacentElement('afterbegin', navImages.plane);
  navButtons.plan.innerText = 'Approve/Deny Trips';
  navButtons.plan.insertAdjacentElement('afterbegin', navImages.suitcase);
  navButtons.dest.style.display = 'none';
  pageInfo.innerText = `All Trips ($${user.calculateTotalTripCommission()} total commission)`;
}

function renderAgentTrips(name, dates, status, travelerCount, image, alt, duration, cost, commission) {
  return `
     <div class="card-wrapper" tabindex="0">
        <div class="card-image-wrapper">
          <img
            src="${image}"
            alt="${alt}">
          <div class="card-image-overlay caps">
            <div class="day-counter-wrapper">
              <p class="days">Days</p>
              <p class="day-count">${duration}</p>
            </div>
          </div>
        </div>
        <div class="card-info-wrapper">
          <div>
            <h2 class="destination-name">${name}</h2>
            <p class="trip-dates">${dates}</p>
          </div>
          <div class="cost-wrapper">
            <p>Commission Earned:</p>
            <p class="card-cost">$${commission}</p>
          </div>
          <div class="trip-status-wrapper">
            <h3 class="caps smaller-font">Status:</h3>
            <p class="lighter">${status}</p>
          </div>
          <div class="traveler-wrapper">
            <h4 class="caps smaller-font">Travelers:</h4>
            <p class="traveler-count lighter">${travelerCount}</p>
          </div>
        </div>
      </div>`;
}

function renderAgentApproval() {
  pageInfo.innerText = 'Approve/Deny Trips';
  return `
   <form class="plan-trip" id="tripApproval">
      <select name="trips" id="pendingTrips" required>
        <option value="">Select a Pending Trip (required)</option>
        ${generatePendingTripOptions()}
      <select>
      <select name="activities" id="suggestActivities">
        <option value="N/A">Suggest an Activity (optional)</option>
        ${generateActivityOptions()}
      <select>
      <button type="button" id="approveTrip">Approve Trip</button>
      <button type="button" id="denyTrip" class="bad-button">Deny Trip</button>
    </form> 
  `
}

function generatePendingTripOptions() {
  const pendingTrips = user.trips.filter(t => t.status === 'pending');
  const options = pendingTrips.map(t => `<option value="${t.id}">${t.destination.name}: User #${t.userID}</option>`);
  return [...options]
}

function extractAgentInputValues() {
  const inputs = {
    tripId: document.getElementById('pendingTrips'),
    activities: document.getElementById('suggestActivities')
  };
  const inputKeys = Object.keys(inputs);
  if (inputKeys.every(key => inputs[key].value)) {
    inputKeys.forEach(key => {
      agentInputValues[key] = inputs[key].value;
    })
    return true;
  } else {
    alert('Please Make Sure to Include All Required Information 🤠')
    return false;
  }
}

function displayTripUpdate() {
  console.log('trip has been updated');
}

function displayTripDelete() {
  console.log('trip has been deleted');
}


export {
  displayChanges,
  displayUsername,
  displayTrips,
  inputValues,
  displayTripsInfo,
  displayLogin,
  renderGETError,
  renderPOSTError,
  dashboard,
  pageInfo,
  agentInputValues,
}