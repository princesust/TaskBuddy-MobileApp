import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './NavigationService';

import { routes } from '../config';

import Login from '../screens/Login';
import Home from '../screens/Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={routes.LOGIN}>
        <Stack.Screen
          name={routes.HOME}
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name={routes.LOGIN} component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
