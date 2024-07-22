import * as React from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function MainMap() {
  const [viewState, setViewState] = React.useState({
    longitude: 36.96,
    latitude: -1.16,
    zoom: 12,
  });
  
  const markerLongitude = 36.96;
  const markerLatitude = -1.16;
  
  return (
      <Map
        mapboxAccessToken="pk.eyJ1IjoibWlraTAwNyIsImEiOiJjbGNxNHd2aGkwMmg1M29reWd2ZGJod2M1In0.f9-OPY7z8IFoBGwdM7zUZw"
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        style={{ width: 1300, height: 400 }}
      >
        <Marker longitude={markerLongitude} latitude={markerLatitude}>
          <p
            role="img"
            className="cursor-pointer text-2xl animate-bounce"
            aria-label="push-pin"
          >
            📌
          </p>
        </Marker>
      </Map>
  
  );
}

export default MainMap;