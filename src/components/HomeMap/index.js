import React from 'react';
import {View, Text} from 'react-native';

const HomeMap = () => {
  return (
    <View
      style={{
        height: 200,
        backgroundColor: '#2ec4b6',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 25}}>
        Home Map
      </Text>
    </View>
  );
};

export default HomeMap;
