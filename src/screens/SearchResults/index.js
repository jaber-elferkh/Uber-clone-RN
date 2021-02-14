import React from 'react';
import {View, Text} from 'react-native';
import RouteMap from '../../components/RouteMap';
import Types from '../../components/Types';
import styles from './styles';

const SearchResult = () => {
  return (
    <View style={styles.container}>
      <View style={styles.home}>
        <RouteMap />
      </View>

      <View style={styles.types}>
        <Types />
      </View>
    </View>
  );
};

export default SearchResult;
