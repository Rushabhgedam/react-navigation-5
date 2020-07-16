import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Intro from '../screen/Intro';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useThemeContext } from '../../providers/ThemeProvider';
import Screen1 from '../screen/Screen1'
const Stack = createNativeStackNavigator();

function RootNavigator(): React.ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name="Home" component={Intro} />
        <Stack.Screen name="Notifications" component={Screen1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;