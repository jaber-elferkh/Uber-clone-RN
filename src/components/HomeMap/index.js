import React from 'react';
import {FlatList, Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import cars from '../../assets/data/cars';

const HomeMap = () => {
  const getImage = (type) => {
    if (type === 'UberX') {
      return require('../../assets/images/top-UberX.png');
    }

    if (type === 'Comfort') {
      return require('../../assets/images/top-Comfort.png');
    }
    return require('../../assets/images/top-UberXL.png');
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
      {cars.map((car) => (
        <Marker
          key={car.id}
          coordinate={{latitude: car.latitude, longitude: car.longitude}}>
          <Image
            source={getImage(car.type)}
            style={{height: 70, width: 70, resizeMode: 'contain'}}
          />
        </Marker>
      ))}
    </MapView>
  );
};

export default HomeMap;
