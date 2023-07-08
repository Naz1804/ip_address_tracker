import {MapContainer, TileLayer, Marker} from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import markerIcon from '../assets/icon-location.svg'

export default function Map({position}) {
    let myIcon = L.icon({
        iconUrl: markerIcon,
        iconSize: [33, 33],
        iconAnchor: [16.5, 33],
    })

    return (
        <MapContainer key={position.toString()} center={position} zoom={13}>
          <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={myIcon}/>
        </MapContainer>
    )
}