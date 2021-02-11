import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const HomeSearch = () => {
  return (
    <View>
      <View style={styles.inputBox}>
        <Text style={styles.inpuText}>Where to ?</Text>

        <View style={styles.timeContainer}>
          <AntDesign name={'clockcircle'} size={16} color={'#434343'} />
          <Text style={{color: '#434343'}}>Now</Text>
          <MaterialIcons
            name={'keyboard-arrow-down'}
            size={16}
            color="#434343"
          />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <AntDesign name={'clockcircle'} size={20} color={'#fff'} />
        </View>
        <Text style={styles.destination}>Sidi Kacem</Text>
      </View>

      <View style={styles.row}>
        <View style={[styles.iconContainer, {backgroundColor: '#2ec4b6'}]}>
          <Entypo name={'home'} size={20} color={'#fff'} />
        </View>
        <Text style={styles.destination}>Sidi Kacem</Text>
      </View>
    </View>
  );
};

export default HomeSearch;
