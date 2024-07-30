import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import VotingInfoScreen from '../screens/VotingInfoScreen';
import TakeActionScreen from '../screens/TakeActionScreen';
import ResourcesScreen from '../screens/ResourcesScreen';
import MoreScreen from '../screens/MoreScreen';
import HamburgerMenu from '../components/HamburgerMenu';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Voting Info" component={VotingInfoScreen} />
      <Tab.Screen name="Take Action" component={TakeActionScreen} />
      <Tab.Screen name="Resources" component={ResourcesScreen} />
      <Tab.Screen name="More" component={MoreScreen} />
    </Tab.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <HamburgerMenu {...props} />}>
        <Drawer.Screen name="Main" component={MainTabNavigator} />
        {/* Add other screens here */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;