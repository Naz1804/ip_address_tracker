import { useEffect, useState } from "react"
import UserInput from "./components/UserInput"
import Map from "./components/Map"
import Detail from "./components/Details"

function App() {
  const [inputValue, setInputValue] = useState('')
  const [position, setPosition] = useState([40.712776, -74.005974])
  const [locationData, setLocationData] = useState({
    ipAddress: '',
    location: '',
    isp: ''
  })
  const [getTime, setGetTime] = useState('')

  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      setPosition([lat, lng])

      const timez = `https://api.ipgeolocation.io/timezone?apiKey=${API_KEY}`;
      fetch(timez)
        .then((response) => response.json())
        .then((timeZ) => {
          setGetTime(timeZ.time_24)
        });

      const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}&lat=${lat}&long=${lng}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setLocationData({
            ipAddress: data.ip,
            location: `${data.city}, ${data.country_name}`,
            isp: data.isp
          })
        });
    }, (error) => {
      console.log("Error getting current position", error);
      setLocationData({
        ipAddress: 'Unable to retrieve IP address',
        location: 'New York, NY 10001',
        isp: 'Unable to retrieve ISP',
      })
      setGetTime('UTC -5:00')
    });
  }, []);

  function handleSubmit() {
    let trimmValue = inputValue
    if (inputValue) {
      fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}&ip=${trimmValue}`)
      .then(response => response.json())
      .then(data => {
        setLocationData({
          ipAddress: data.ip,
          location: `${data.city}, ${data.country_name}`,
          isp: data.isp
        })
        setPosition([data.latitude, data.longitude])
      })
      fetch(`https://api.ipgeolocation.io/timezone?apiKey=${API_KEY}&ip=${trimmValue}`)
        .then(response => response.json())
        .then(timeZ => {
          setGetTime(timeZ.time_24)
      })
    }
    setInputValue('')
  }

  return (
    <div className="relative">
      <UserInput inputValue={inputValue} setInputValue={setInputValue} handleSubmit={handleSubmit}/>
      <Detail locationData={locationData} getTime={getTime}/>
      <Map position={position}/>
    </div>
  )
  
}

export default App