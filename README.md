# Travel Tracker

A travel app to help you book the trip of a lifetime!

## Technologies Used

* `JavaScript`
* `HTML`
* `SCSS`
* `Mocha/Chai`
* `Webpack`

## Overview

This project emulates the functions of a travel website by allowing users to login, view trips, & plan upcoming trips. It also includes functionality for an agent to login and approve/deny user trip requests. All data is pulled from & sent to a backend server using the JavaScript fetch API for `GET`, `POST`, and `DELETE` requests.

## Goals & Objectives

* Design & build a working app from scratch
* Send requests to API endpoints for data retrieval/manipulation
* Focus on modular code through class structure & file separation
* Accessibility
* Test-driven development
* Easy to navigate UI/UX

## Setup (using command line)

1. Fork & install this **Travel Tracker** repo onto your local machine by entering `git clone`
2. Install the necessary packages & dependencies through NPM by entering `npm install`
3. In a separate directory (outside your TravelTracker directory), clone down this [Travel Tracker API](https://github.com/turingschool-examples/travel-tracker-api) using `git clone` & run `npm install` (view API documentation for more detailed instructions)
4. `cd` into the **Travel Tracker API** directory & start the server by running `npm start`, then in a separate command line window `cd` into the **Travel Tracker** directory & run `npm start` to compile/launch the app (or open the [deployment](https://mistercanderson.github.io/travel_tracker/) from this repo)
5. To use the app enter `http://localhost:8080/` in your browser

* To run the tests enter `npm test`
* To run the linter enter `npm run lint`

## Using the App:

### Travler:
* On the login page, login as any user by entering `traveler<number>` as the username & `travel2020` as the password. For example, `traveler01` would log in as the first user & `traveler35` would log in as the 35th user. There are 50 total users.
* Upon logging in, you'll see the 'My Trips' dashboard containing all the trips the user has both approving & pending along with trip cost information.
* Navigate to different sections of the page using the tabs at the top for 'My Trips', 'Plan a Trip', & 'Destinations'.
* In the 'Plan a Trip' dashboard, you can select a variety of options for an upcoming trip. Once you hit the 'Plan Trip' button, a preview of the trip will be displayed & you can either finalize or cancel the trip request. All trip requests will default to 'pending' until approved by an agent.
* In the 'Destinations' dashboard, you can view a list of all destinations, & click the 'Book Now' button to be re-directed to the trip planner for that specific destination.

### Agent:
* On the login page, login by entering `agency` as the username, & `travel2020` as the password.
* Upon logging in, you'll see the 'Pending Trips' dashboard containing all pending trips from the user database & the amount of commission generated from those trips.
* Navigate to different sections of the page using the tabs at the top for 'Pending Trips', 'Approve/Deny Trip', & 'All Trips'.
* In the 'Approve/Deny Trips' dashboard, the agent can select from a list of pending trips along with the user ID, approve the trip, add activity suggestions, or delete the trip request.
* In the 'All Trips' dashboard, the agent can see all Travel Tracker trips & commission information.

## Road Map
##### Plans for future updates:

* Ability to filter destinations by lodging & flight cost
* Notifications to inform the user of trip approval/denial
* Links to more information about the destinations
* Add user trip pictures & trip reviews
* Ability for agent to filter pending trips by the user's name

## Preview

Traveler Login + Plan Trip:

![Traveler Login/Plan Trip:](https://media.giphy.com/media/gNoEsLOV1ApZjf0LNb/giphy.gif)

Plan Trip using Book Now:

![Traveler Book Now!:](https://media.giphy.com/media/gErfFVYF7nbCU6IV08/giphy.gif)

Agent Login + Approve/Deny Trip:

![Agent Approve/Deny:](https://media.giphy.com/media/wG6IlYxaSLHc77G2DZ/giphy.gif)

## Deployed Site

[Travel Tracker](https://mistercanderson.github.io/travel_tracker/)
(make sure you have the [Travel Tracker API](https://github.com/turingschool-examples/travel-tracker-api) running on your local machine)

## Author 

[Chris Anderson](https://github.com/mistercanderson)