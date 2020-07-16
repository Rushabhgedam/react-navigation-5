import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabNavigator from './BottomTabNavigator';
import DrawerNavigator from './DrawerNavigator';
import Intro from '../screen/Intro';
import MaterialBottomTabNavigator from './MaterialBottomTabNavigator';
import MaterialTopTabNavigator from './MaterialTopTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import StackNavigator from './StackNavigator';
import { useThemeContext } from '../../providers/ThemeProvider';
import Screen1 from '../screen/Screen1'
const Stack = createNativeStackNavigator();

function RootNavigator(): React.ReactElement {
  const { theme } = useThemeContext();
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