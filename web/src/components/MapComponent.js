// MapComponent.js
import React from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '400px'
};

const options = {
  disableDefaultUI: true,
  zoomControl: true
};

const MapComponent = ({ lat, lng }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAiGYk4HAvcw13AgpivwxV4MbwrrqS5pO8' // ใส่ API key ของคุณที่นี่
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={15}
      center={{ lat, lng }}
      options={options}
    >
      <Marker position={{ lat, lng }} />
    </GoogleMap>
  );
};

export default MapComponent;
