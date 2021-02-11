import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

const CovidMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Covid Message</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur rem
        quasi explicabo a quae, non voluptatem quod corporis adipisci ex.
      </Text>
      <Text style={styles.learnMore}>Learn More</Text>
    </View>
  );
};

export default CovidMessage;
