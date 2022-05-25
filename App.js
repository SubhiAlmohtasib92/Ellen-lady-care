import 'react-native-gesture-handler';
import React from 'react';
import {
  StatusBar,
  View,
  Text
} from 'react-native';

import Routes from './routes';

import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {

  let [fontsLoaded] = useFonts({
    'regular': require('./assets/fonts/Harmattan-Regular.ttf'),
    'bold': require('./assets/fonts/Harmattan-Bold.ttf'),
    'english': require('./assets/fonts/GrapeNuts-Regular.ttf')
  });

  if (!fontsLoaded) {
    return <View><Text>Loading...</Text></View>
  }
  return (
    <SafeAreaProvider>
      <StatusBar
        translucent
        barStyle='dark-content'
      />
      <Routes />
    </SafeAreaProvider>
  )
};

export default App;