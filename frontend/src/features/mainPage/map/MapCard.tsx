import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import Geocode from 'react-geocode';
import { LanguageSharp } from '@mui/icons-material';
import { Position } from './types/Map';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

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

  const ecoPoint = useSelector((store: RootState) => store.ecoPointState);
  const [adress, setAdress] = useState<string[]>([]);
  const [lats, setLats] = useState<number[]>([]);
  const [lngs, srtLng] = useState<number[]>([]);
  const [myPlaces, setMyPlaces] = useState<{ pos: { lat: number; lng: number } }[]>([]);
  const getAdressBase = (): void => {
    ecoPoint.ecoPoints.forEach((point) => {
      setAdress((prev) => [...prev, point.pointAddress]);
    });
  };

  const getCoordinates = async (adresses: string[]): Promise<void> => {
    await adresses.forEach((element) => {
      Geocode.fromAddress(element).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          setLats((prev) => [...prev, lat]);
          srtLng((prev) => [...prev, lng]);
        },
        (error) => {
          console.error(error);
        }
      );
    });
    // await setMyPlaces(lats.map((lat, idx) => ({ pos: { lat, lng: lngs[idx] } })));
  };

  const rndId = uuidv4();
  useEffect(() => {
    getAdressBase();
  }, [ecoPoint]);

  useEffect(() => {
    setMyPlaces(lats.map((lat, idx) => ({ pos: { lat, lng: lngs[idx] } })));
  }, [lngs, lats]);

  useEffect(() => {
    getCoordinates(adress);
  }, [adress]);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBWkPNOHI1knOEfFe2GJNmL4sr0C1snsu4',
  });

  return isLoaded ? (
    <div className="map__card">
      <div className="map__card__body" id="map">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
          {myPlaces.map((place, idx) => (
            <Marker
              key={uuidv4()}
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

export default MapCard;
