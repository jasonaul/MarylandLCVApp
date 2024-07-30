import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screen components here (we'll create these later)
import HomeScreen from '../screens/HomeScreen';
import VotingInfoScreen from '../screens/VotingInfoScreen';
import TakeActionScreen from '../screens/TakeActionScreen';
import ResourcesScreen from '../screens/ResourcesScreen';
import MoreScreen from '../screens/MoreScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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
      <Stack.Navigator>
        <Stack.Screen 
          name="Main" 
          component={MainTabNavigator} 
          options={{ headerShown: false }}
        />
        {/* Add other stack screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;