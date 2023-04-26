import React, { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import Geocode from 'react-geocode';
import { LanguageSharp } from '@mui/icons-material';
// import { Position } from './types/Map';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import EcoPointIcon from './image/tree.png';
import defaultTheme from './theme/Theme';
const API_KEY = process.env.REACT_APP_API_KEY;

const containerStyle = {
  width: '100%',
  height: '655px',
};

const defaultOptions = {
  panControl: true,
  mapTypeControl: false,
  zoomControl: true,
  scaleControl: false,
  streetViewControl: true,
  rotateControl: false,
  clickableIcons: false,
  keyboardShortcuts: false,
  scrollwheel: true,
  disableDoubleClickZoom: false,
  fullscreenControl: false,
  styles: defaultTheme,
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

  const mapRef = useRef(undefined);

  const onLoad = React.useCallback(function callback(map: any) {
    mapRef.current = map;
  }, []);
  const onUnmount = React.useCallback(function callback(map: any) {
    mapRef.current = undefined;
  }, []);

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
    googleMapsApiKey: String(API_KEY),
  });

  return isLoaded ? (
    <div className="map__card">
      <div className="map__card__body" id="map">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={11}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={defaultOptions}>
          {myPlaces.map((place, idx) => (
            <Marker key={uuidv4()} position={place.pos} icon={EcoPointIcon} />
          ))}
        </GoogleMap>
      </div>
    </div>
  ) : (
    <></>
  );
}

//fff

export default React.memo(MapCard);
