import React, { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from '@react-google-maps/api';
import Geocode from 'react-geocode';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store';
import EcoPointIcon from './image/tree.png';
import defaultTheme from './theme/Theme';
import AddEcoPoint from './AddEcoPoint';
import { removeEcoPoint } from './mapSlice';
import './styles/Map.css';
import ModalAdd from './ModalAdd';

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
  clickableIcons: true,
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
  Geocode.setApiKey(String(API_KEY));
  Geocode.setLanguage('ru');
  Geocode.setRegion('ru');
  Geocode.setLocationType('ROOFTOP');
  Geocode.enableDebug();

  const dispatch = useAppDispatch();
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
  const [lngs, setLngs] = useState<number[]>([]);
  const [name, setName] = useState<string[]>([]);

  const [activeMarker, setActiveMarker] = useState(null);
  const [myPlaces, setMyPlaces] = useState<
    {
      pos: { lat: number; lng: number };
      name: string;
      id: number;
      title: string;
    }[]
  >([]);

  const newAdresses = ecoPoint.ecoPoints.map((point) => point.pointAddress);
  const newPlaces = lats.map((lat, idx) => ({
    pos: { lat, lng: lngs[idx] },
    name: name[idx],
    id: ecoPoint.ecoPoints[idx]?.id,
    title: ecoPoint.ecoPoints[idx]?.pointName,
  }));

  const getCoordinates = async (adresses: string[]): Promise<void> => {
    for (let i = 0; i < adresses.length; i += 1) {
      const some = await Geocode.fromAddress(adresses[i]);
      const { lat, lng } = some.results[0].geometry.location;
      setLats((prev) => [...prev, lat]);
      setLngs((prev) => [...prev, lng]);
      setName((prev) => [...prev, adresses[i]]);
    }
  };

  const rndId = uuidv4();
  useEffect(() => {
    setAdress(newAdresses);
  }, [ecoPoint]);

  useEffect(() => {
    setMyPlaces(newPlaces);
  }, [lngs, lats]);

  useEffect(() => {
    getCoordinates(adress);
    // geoCode();
  }, [adress, ecoPoint]);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: String(API_KEY),
  });

  const handleActiveMarker = (marker: any): any => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const handleOnLoad = (map: any): void => {
    const bounds = new google.maps.LatLngBounds();
    myPlaces.forEach((place) => bounds.extend(place.pos));
    map.fitBounds(bounds);
  };

  const onHandleClickDelete = (pointId: number): void => {
    dispatch(removeEcoPoint(Number(pointId)));
  };

  const { user } = useSelector((store: RootState) => store.auth);
  const admin = 1;
  return isLoaded ? (
    <div className="map__card">
      <div className="chel_container marquee">
        <span className="chel_text">
          • НАШИ ЭКО-ТОЧКИ • РАЗДЕЛЯЕТ ВЕСЬ ЧЕЛЯБИНСК • НАШИ ЭКО-ТОЧКИ • РАЗДЕЛЯЕТ ВЕСЬ ЧЕЛЯБИНСК •
          НАШИ ЭКО-ТОЧКИ • РАЗДЕЛЯЕТ ВЕСЬ ЧЕЛЯБИНСК
        </span>
      </div>
      {/*<p className="text__main_p top_map">Наши Эко-Точки</p>*/}
      <div className="map__card__body" id="map">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={11}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={defaultOptions}
          onClick={() => setActiveMarker(null)}
        >
          {myPlaces?.map((place, idx) => (
            <Marker
              key={place.id}
              position={place.pos}
              icon={EcoPointIcon}
              onClick={() => handleActiveMarker(idx)}
            >
              {activeMarker === idx ? (
                <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                  <div>
                    {/*{title[idx]}*/}
                    <h1>
                      <b>Эко-точка {place.title}</b>
                    </h1>
                    <p>По адресу: {name[idx]}</p>
                    {'id' in user && Number(user?.id) === admin ? (
                      <button
                        type="button"
                        onClick={() => onHandleClickDelete(place.id)}
                      >
                        Удалить
                      </button>
                    ) : (
                      <p></p>
                    )}
                  </div>
                </InfoWindow>
              ) : null}
            </Marker>
          ))}
        </GoogleMap>
      </div>
      <div className="modalic">{Object.values(user).includes(1) && <ModalAdd />}</div>
    </div>
  ) : (
    <></>
  );
}

export default React.memo(MapCard);
