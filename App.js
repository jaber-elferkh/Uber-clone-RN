/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import DestinationScreen from './src/screens/DestinationScreen';
import HomeScreen from './src/screens/HomeScreen/';
import SearchResult from './src/screens/SearchResults';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <HomeScreen /> */}
      {/* <DestinationScreen /> */}
      <SearchResult />
    </>
  );
};

export default App;
