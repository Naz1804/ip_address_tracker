# IP Address Tracker
IP address tracker is a tool that can be used to identify the location, time, and ISP of an IP address.

# Technologies
* Vite
* React
* JavaScript
* Tailwind CSS
* HTML
* API
* leaflet.js

# Installation
First thing first is you need `node.js` installed. USe this _[Link](https://nodejs.org/)_ to be sent to the `node.js` downloads.

1. Then you can clone the code locally by copying the `HTTPS` from the `<> Code` button.

![image](https://github.com/Naz1804/ip_address_tracker/assets/121124109/1137bc4a-e9e6-4ec1-bc1c-30926e5bd13f)

2. Open a terminal window or open your code editor that you can open up a terminal.
3. Navigate to the directory where you want to clone the repository.
4. Then type `git clone` paste the `HTTPS` after that.
   
```sh
git clone https://github.com/Naz1804/ip_address_tracker.git
```

To install the dependencies, run the following command in your terminal:

```sh
npm install
```

Then:

```sh
npm run dev
```

Next you will see this:

![image](https://github.com/Naz1804/todolist/assets/121124109/10254502-15b6-43a2-b1dc-ede50c3cd804)

You have two options to either click on the `http://localhost:5173/` or press `o` to open up the `localhost`.

You can always press `h` to see what more commands they are.

Then you should have the project running !!

# API

The API we are using is ipgeolocation this is the _[Link](https://ipgeolocation.io/documentation/ip-geolocation-api.html)_ to the Documentation. And they have a free plan which you can use, make an account and get your `API KEY` from your dashboard.

On `App.jsx` find the variable called `API_KEY` and replace the value with your `API KEY` and remember to keep it in quotes.

![image](https://github.com/Naz1804/ip_address_tracker/assets/121124109/e18745db-b38e-4124-ab50-bdaabbc985e2)

```
const API_KEY = // this is where you put your api key replacing of what was their
```

We using 2 API fetch to get the location, ISP and the other fetch is to get the exact time from the given IP address. 

If you look at `App.jsx` you can see how we are calling the API, how we using the data to get the output we want. 

Also remember to use the document to know which data you are calling and what other calling plus what data you can get. 

# Leaflet.js

_[Leaflet.js](https://react-leaflet.js.org/docs/start-installation/)_ is an open-source JavaScript library for building interactive web maps. It is designed to be lightweight and easy to use, and it supports a wide variety of features, including:

* Tile layers: Leaflet.js can display tiled maps from a variety of sources, including OpenStreetMap, Google Maps, and Bing Maps.
* Markers: Leaflet.js can display markers on maps, and you can customize the appearance of markers using CSS.
* Popups: Leaflet.js can display popups on maps, and you can use popups to display information about markers or other features on the map.
* Polylines: Leaflet.js can display polylines on maps, and you can use polylines to represent features such as roads or trails.
* Polygons: Leaflet.js can display polygons on maps, and you can use polygons to represent features such as countries or states.

If you go to `Map.jsx` inside the src -> components file you can see how we are using the library and you can see how I put a custom Icon marker plus the `<MapContainer />` key & `Marker` posiiton is getting a `position` which is passed downed from the `App.jsx` and the position is holding the latitude and longitude which will move the map to that location. And also it works with the API because API also gives back latitude and longitude from the given IP address which then works with the Leaflet.js to give the exact location. 
