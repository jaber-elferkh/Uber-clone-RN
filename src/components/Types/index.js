import React from 'react';
import {View, Text} from 'react-native';
import styles from '../../screens/DestinationScreen/styles';
import TypeRow from '../TypesRow';

const Types = () => {
  return (
    <View style={styles.container}>
      <TypeRow />
    </View>
  );
};

export default Types;
