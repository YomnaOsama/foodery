import React from 'react';
import {
  StatusBar,
  StyleSheet,
} from 'react-native';

import MainNavigator from './src/navigators/MainNavigator';
import colors from './src/constants/colors';


function App(): JSX.Element {
  return (
    <>
      <StatusBar
        backgroundColor={colors.headerBackground}
        barStyle={'dark-content'}
      />
      <MainNavigator />
    </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
