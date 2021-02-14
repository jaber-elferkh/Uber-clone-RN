import React from 'react';
import {View, Text, Pressable} from 'react-native';
import typesData from '../../assets/data/types';
import TypeRow from '../TypesRow';
import styles from './styles';

const Types = () => {
  const confirm = () => {
    console.warn('Confirmed');
  };

  return (
    <View style={styles.container}>
      {typesData.map((type) => (
        <TypeRow type={type} />
      ))}

      <Pressable onPress={confirm} style={styles.button}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Confirm Uber</Text>
      </Pressable>
    </View>
  );
};

export default Types;
