import React, { useState } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const cities = [
  {
    id: 1,
    data: { content: 'Saint-Petersburg' },
    options: { selectOnClick: false },
    coords: [59.93863, 30.31413],
  },
  {
    id: 2,
    data: { content: 'Dzerzhinsky' },
    options: { selectOnClick: false },
    coords: [55.630527, 37.849046],
  },
  {
    id: 3,
    data: { content: 'Moscow' },
    options: { selectOnClick: false },
    coords: [55.753559, 37.609218],
  },
];

function Gmap(): JSX.Element {
  const [offset, setOffset] = useState([0, 0]);

  const lat = 55.751574;
  const lon = 37.573856;

  const rnd = (): number => (Math.random() - 0.5) * 0.2;

  return (
    <div className="map__card">
      <div className="map__card__body" id="map">
        <YMaps>
          <div>
            My awesome application with maps!
            <Map
              defaultState={{
                center: [lat, lon],
                zoom: 9,
                controls: [],
              }}>
              {/*<Placemark geometry={[lat + offset[0], lon + offset[1]]} />*/}

              {cities?.map((city) => (
                <Placemark key={city.id} geometry={city.coords} />
              ))}
            </Map>
            <button onClick={() => setOffset([rnd(), rnd()])}>Move placemark</button>
          </div>
        </YMaps>
      </div>
    </div>
  );
}

export default Gmap;
