// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {User} from './screens/User';
import {Repositories} from './screens/Repositories';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="Repositories" component={Repositories} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export {Routes};
