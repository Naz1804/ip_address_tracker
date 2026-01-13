# IP Address Tracker

## Overview
An API-driven frontend application built with React and Tailwind CSS that allows users to look up IP address information and visualise geographic data on an interactive map.

This project demonstrates API integration, data-driven UI rendering, and third-party library usage within a modern frontend application.

## Why this project
This project was built to explore how frontend applications consume external APIs and translate raw data—such as geographic coordinates—into meaningful visual output using mapping libraries.

## Key Features
- Fetches IP address data including location, ISP, and time zone from an external API
- Displays geographic coordinates on an interactive world map
- Dynamically updates UI based on user input
- Responsive layout built with Tailwind CSS

## Technical Decisions
- React was used for component-based UI development and predictable rendering.
- Vite was chosen for fast project setup and modern development tooling.
- Tailwind CSS enabled rapid, consistent styling across components.
- Leaflet.js was used to visualise geographic coordinates on an interactive map.
- API responses are mapped directly to UI components to keep data flow simple and understandable.

## API & Map Integration
This project uses the ipgeolocation API to retrieve IP address information, including location, ISP, and time zone data.

API requests are handled in the main application logic, where the response data is parsed and passed to UI components for display. The API also returns `latitude` and `longitude coordinates`, which are used to power the map integration.

## Map Visualisation (Leaflet.js)
Geographic data from the API is visualised using Leaflet.js, an open-source mapping library.
- Latitude and longitude values from the API response are passed into the map component.
- The map updates dynamically based on user input.
- A custom marker is used to indicate the resolved IP location.
- Map logic is isolated within a dedicated component to keep concerns separated.
This integration demonstrates how external API data can be transformed into meaningful visual output within a React application.

## Challenges & Solutions
- Synchronising API data with map updates: Ensured the map re-renders correctly when new coordinates are received from the API.
- Third-party library integration: Integrated Leaflet.js within a React application while keeping map logic isolated from UI components.
- Async data handling: Managed loading and error states to avoid inconsistent UI during API requests.

## Improvements
- Refactor component structure to improve scalability and readability
- Introduce stronger separation between data-fetching and presentation logic
- Add input validation and improved error messaging
- Implement automated tests for API and map logic
- Enhance accessibility for map interactions and form controls

# Installation
First thing first is you need `node.js` installed. Use this _[Link](https://nodejs.org/)_ to be sent to the `node.js` downloads.

Clone the repository:   
```sh
git clone https://github.com/Naz1804/ip_address_tracker.git
```
Change directory:
```bash
cd ip_address_tracker
```

To install the dependencies, run the following command in your terminal:

```sh
npm install
```

Then:

```sh
npm run dev
```
