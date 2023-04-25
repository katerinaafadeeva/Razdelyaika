import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import Geocode from 'react-geocode';
import { LanguageSharp } from '@mui/icons-material';
import { Position } from './types/map';

const containerStyle = {
  width: '100%',
  height: '655px',
};

const center = {
  lat: 55.154,
  lng: 61.4291,
};

function MapCard(): JSX.Element {
  Geocode.setApiKey('AIzaSyBWkPNOHI1knOEfFe2GJNmL4sr0C1snsu4');
  Geocode.setLanguage('ru');
  Geocode.setRegion('ru');
  Geocode.setLocationType('ROOFTOP');
  Geocode.enableDebug();

  const [adress, setAdress] = useState('');
  const [lats, setLats] = useState(0);
  const [lngs, srtLng] = useState(0);

  const point: Position = {
    lat: lats,
    lng: lngs,
  };

  console.log(point);
  const myPlaces = [
    { id: 'place1', pos: point },
    { id: 'place2', pos: { lat: 55.182707, lng: 61.450696 } },
  ];

  useEffect(() => {
    Geocode.fromAddress('ул. 3-го Интернационала, Челябинск').then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
        setLats(lat);
        srtLng(lng);
      },
      (error) => {
        console.error(error);
      }
    );
  });
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBWkPNOHI1knOEfFe2GJNmL4sr0C1snsu4',
  });

  return isLoaded ? (
    <div className="map__card">
      <div className="map__card__body" id="map">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
          {/* Child components, such as markers, info windows, etc. */}
          <></>

          <Marker position={point} />
          {myPlaces.map((place) => (
            <Marker
              key={place.id}
              position={place.pos}
              icon={{
                path: 'M12.75 0l-2.25 2.25 2.25 2.25-5.25 6h-5.25l4.125 4.125-6.375 8.452v0.923h0.923l8.452-6.375 4.125 4.125v-5.25l6-5.25 2.25 2.25 2.25-2.25-11.25-11.25zM10.5 12.75l-1.5-1.5 5.25-5.25 1.5 1.5-5.25 5.25z',
                fillColor: '#0000ff',
                fillOpacity: 1.0,
                strokeWeight: 0,
                scale: 1.25,
              }}
            />
          ))}
        </GoogleMap>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default React.memo(MapCard);
