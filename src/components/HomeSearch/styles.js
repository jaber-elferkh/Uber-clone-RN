import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: '#d1d1d1',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
  inpuText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#434343',
  },
  timeContainer: {
    //   borderColor: 'red',
    //   borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,
    color: '#434343',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 2,
    borderColor: 'whitesmoke',
    marginHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  iconContainer: {
    backgroundColor: '#b3b3b3',
    padding: 10,
    borderRadius: 25,
  },
  destination: {
    marginLeft: 10,
    fontWeight: '500',
    fontSize: 16,
  },
});
export default styles;
