import { Configuration } from './Types/Types';

const CONFIGURATION: Configuration = {
  locations: [
    {
      title: "Calea Vitan 148a",
      address1: "Calea Vitan 148a",
      address2: "București 031301, Romania",
      coords: { lat: 44.41308853619927, lng: 26.13369858711985 },
      placeId: "ChIJW8o0Fe7-sUARUK33vcNy7M8",
    },
  ],
  mapOptions: {
    center: { lat: 38.0, lng: -100.0 },
    fullscreenControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    zoom: 4,
    zoomControl: true,
    maxZoom: 17,
    mapId: process.env.REACT_APP_GOOGLE_MAPS_MAP_ID || "",
  },
  mapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "",
  capabilities: {
    input: false,
    autocomplete: false,
    directions: false,
    distanceMatrix: false,
    details: false,
    actions: false,
  },
};

export default CONFIGURATION;
