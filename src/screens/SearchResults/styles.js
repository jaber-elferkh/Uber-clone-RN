import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  home: {
    height: Dimensions.get('window').height - 400,
    borderRadius: 10,
  },
});
export default styles;
