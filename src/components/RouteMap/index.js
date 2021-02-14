import React from 'react';
import {FlatList, Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import cars from '../../assets/data/cars';
import MapViewDirections from 'react-native-maps-directions';

const RouteMap = () => {
  const GOOGLE_MAPS_APIKEY = 'AIzaSyAmvd3PHOvtkXg-g8-IUt6SvazQ4sNExQU';

  const origin = {
    latitude: 28.450627,
    longitude: -16.263045,
  };

  const destination = {
    latitude: 28.450127,
    longitude: -16.269045,
  };

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={{height: '100%', width: '100%'}}
      region={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}>
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
      />
    </MapView>
  );
};

export default RouteMap;
