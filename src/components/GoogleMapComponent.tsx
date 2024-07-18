import React, { useCallback, useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { GoogleMap } from "@react-google-maps/api";
import { Loader } from "@googlemaps/js-api-loader";
import CONFIGURATION from "./MapConfig";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 44.413244,
  lng: 26.133751,
};

const GoogleMapComponent: React.FC = () => {
  const mapRef = useRef<google.maps.Map | null>(null);
  const [googleMapsLoaded, setGoogleMapsLoaded] = useState<boolean>(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const initializeMap = useCallback(async (map: google.maps.Map) => {
    mapRef.current = map;

    try {
      const loader = new Loader({
        apiKey: CONFIGURATION.mapsApiKey,
        version: "weekly",
        libraries: ["marker"],
      });

      // const google = await loader.importLibrary("maps");
      const { AdvancedMarkerElement } = await loader.importLibrary("marker");

      const markerContent = document.createElement("div");
      markerContent.style.display = "flex";
      markerContent.style.flexDirection = "column";
      markerContent.style.alignItems = "center";

      const iconElement = document.createElement("img");
      iconElement.src =
        "https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2_hdpi.png";
      iconElement.style.width = "32px";
      iconElement.style.height = "32px";

      const labelElement = document.createElement("div");
      labelElement.innerHTML = "TopalX - Scoala de Soferi";
      labelElement.style.color = "black";
      labelElement.style.fontFamily = "Arial";
      labelElement.style.fontSize = "14px";
      labelElement.style.fontWeight = "bold";

      markerContent.appendChild(iconElement);
      markerContent.appendChild(labelElement);

      new AdvancedMarkerElement({
        map,
        position: center,
        title: "TopalX",
        content: markerContent,
      });

      setGoogleMapsLoaded(true);
    } catch (error) {
      console.error("Error loading Google Maps", error);
    }
  }, []);

  const onLoad = useCallback(
    (map: google.maps.Map) => {
      initializeMap(map);
    },
    [initializeMap]
  );

  const onUnmount = useCallback(() => {
    mapRef.current = null;
  }, []);

  useEffect(() => {
    if (!googleMapsLoaded) {
      const loader = new Loader({
        apiKey: CONFIGURATION.mapsApiKey,
        version: "weekly",
        libraries: ["marker"],
      });

      loader.importLibrary("maps").then(() => {
        setGoogleMapsLoaded(true);
      });
    }
  }, [googleMapsLoaded]);

  return (
    <div ref={ref} className="mx-auto w-5/6">
      {inView && googleMapsLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={16}
          options={{ mapId: CONFIGURATION.mapOptions.mapId }}
          onLoad={onLoad}
          onUnmount={onUnmount}
        />
      )}
    </div>
  );
};

export default GoogleMapComponent;
