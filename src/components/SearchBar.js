"use client";

import React, { useState, useEffect } from "react";
import "../app/globals.css";

const SearchBar = ({ onLocationSelect, selectedDescription }) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (selectedDescription) {
      setInputValue(selectedDescription);
    }
  }, [selectedDescription]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value && window.google) {
      const autocompleteService = new window.google.maps.places.AutocompleteService();
      autocompleteService.getPlacePredictions(
        { input: value, types: ["establishment", "geocode"] },
        (predictions, status) => {
          if (
            status === window.google.maps.places.PlacesServiceStatus.OK &&
            predictions.length > 0
          ) {
            setSuggestions(predictions);
          } else {
            setSuggestions([]);
          }
        }
      );
    } else {
      setSuggestions([]);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && inputValue) {
      const selectedSuggestion = suggestions[0];
      if (selectedSuggestion) {
        fetchPlaceDetails(selectedSuggestion.place_id);
      }
    }
  };

  const handleSuggestionClick = (suggestion) => {
    fetchPlaceDetails(suggestion.place_id);
  };

  const fetchPlaceDetails = (placeId) => {
    const placesService = new window.google.maps.places.PlacesService(
      document.createElement("div")
    );

    placesService.getDetails({ placeId }, (place, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        const location = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
          description: place.formatted_address,
        };
        onLocationSelect(location);
        setSuggestions([]);
      } else {
        console.error("Error al obtener los detalles del lugar.");
      }
    });
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar ubicación..."
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.place_id}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
