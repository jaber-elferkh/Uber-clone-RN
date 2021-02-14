import React, {useEffect, useState} from 'react';
import {View, TextInput, SafeAreaView} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import styles from './styles';

const DestinationScreen = () => {
  const [from, setFrom] = useState('');
  const [destination, setDestination] = useState('');
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  useEffect(() => {
    // console.warn('useEffect is called');
    if (originPlace && destinationPlace) {
      console.warn('Redirects to results');
    }
  }, [originPlace, destinationPlace]);

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        style={{
          container: {
            flex: 1,
          },
        }}
        placeholder="Where to?"
        onPress={(data, details = null) => {
          console.log(data, details);
        }}
        fetchDetails={true}
        query={{
          key: 'AIzaSyAZuFzQO8RMcOrbfG2rndjO0yoysArQ_co',
          language: 'en',
        }}
      />
    </View>
  );
};

export default DestinationScreen;
