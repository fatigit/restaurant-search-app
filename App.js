import React from 'react';
import {Text, StyleSheet, SafeAreaView, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createAppContainer} from 'react-navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{title: 'Business Search'}}
        />
        <Stack.Screen
          name="ResultsShow"
          component={ResultsShowScreen}
          options={{title: 'Results Search'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
