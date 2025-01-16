"use client";

import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import "../app/globals.css";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const defaultCenter = {
  lat: 4.711, // Bogotá
  lng: -74.072,
};

const MapComponent = ({ selectedLocation, onMapClick }) => {
  const handleMapClick = (event) => {
    const clickedLocation = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    onMapClick(clickedLocation); 
  };

  return (
    <div className="map-container">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={selectedLocation || defaultCenter}
        zoom={selectedLocation ? 15 : 11}
        onClick={handleMapClick} 
      >
        {selectedLocation && (
          <Marker position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }} />
        )}
      </GoogleMap>
    </div>
  );
};

export default MapComponent;
