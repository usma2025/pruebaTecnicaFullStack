"use client";

import React, { useState } from "react";
import { LoadScript } from "@react-google-maps/api";
import SearchBar from "../components/SearchBar";
import MapComponent from "../components/MapComponent";
import "./globals.css";


const HomePage = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedDescription, setSelectedDescription] = useState("");

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setSelectedDescription(location.description);
  };

  const handleMapClick = (clickedLocation) => {
    if (!window.google) {
      console.error("Google Maps API no está disponible.");
      return;
    }

    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ location: clickedLocation }, (results, status) => {
      if (status === window.google.maps.GeocoderStatus.OK && results.length > 0) {
        const location = {
          lat: clickedLocation.lat,
          lng: clickedLocation.lng,
          description: results[0].formatted_address,
        };
        handleLocationSelect(location);
      } else {
        console.error("No se pudo obtener la dirección.");
      }
    });
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY} libraries={["places"]}>
      <div className="container">
        <h1>Buscador de Ubicaciones</h1>
        <SearchBar
          onLocationSelect={handleLocationSelect}
          selectedDescription={selectedDescription}
        />
        <MapComponent
          selectedLocation={selectedLocation}
          onMapClick={handleMapClick}
        />
      </div>
    </LoadScript>
  );
};

export default HomePage;
