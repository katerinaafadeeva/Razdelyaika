export type FromAddress = {
  address: string;
  apiKey?: string;
  language?: string;
  region?: string;
};

export type FromLatLng = {
  latitude: string;
  longitude: string;
  apiKey?: string;
  language?: string;
  region?: string;
};
export type SetApiKey = { api_key: string };
export type SetLanguage = { language: string };
export type EnableDebug = { enable?: boolean };
export type SetRegion = { region: string };
export type SetLocationType = { location_type: string };

export type Position = {
  lat: number[];
  lng: number[];
};

export type Point = {
  points: {
    id: string;
    pos: Position;
  };
};

//type
export type EcoPoint = {
  id: number;
  pointName: string;
  pointAddress: string;
};
