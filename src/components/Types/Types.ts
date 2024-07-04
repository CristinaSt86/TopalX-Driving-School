// types.ts

export interface Coordinates {
    lat: number;
    lng: number;
  }
  
  export interface Location {
    title: string;
    address1: string;
    address2: string;
    coords: Coordinates;
    placeId: string;
  }
  
  export interface MapOptions {
    center: Coordinates;
    fullscreenControl: boolean;
    mapTypeControl: boolean;
    streetViewControl: boolean;
    zoom: number;
    zoomControl: boolean;
    maxZoom: number;
    mapId: string;
  }
  
  export interface Capabilities {
    input: boolean;
    autocomplete: boolean;
    directions: boolean;
    distanceMatrix: boolean;
    details: boolean;
    actions: boolean;
  }
  
  export interface Configuration {
    locations: Location[];
    mapOptions: MapOptions;
    mapsApiKey: string;
    capabilities: Capabilities;
  }
  