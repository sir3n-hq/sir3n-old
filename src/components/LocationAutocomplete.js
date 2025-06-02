import React, { useRef, useEffect } from 'react';

const LocationAutocomplete = ({ onSelect }) => {
  const inputRef = useRef(null);
  const autocompleteRef = useRef(null);

  useEffect(() => {
    if (!window.google || !window.google.maps) return;

    autocompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      { types: ['geocode'] }
    );

    autocompleteRef.current.addListener('place_changed', () => {
      const place = autocompleteRef.current.getPlace();
      if (place.geometry) {
        onSelect({
          address: place.formatted_address,
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        });
      }
    });
  }, [onSelect]);

  return (
    <input
      type="text"
      ref={inputRef}
      placeholder="Enter location"
      className="w-full p-2 border rounded"
    />
  );
};

export default LocationAutocomplete;
