import React from 'react';
import { View, Text } from 'react-native';
import { OrganizationProvider } from './src/context/OrganizationContext';
import AppNavigator from './src/navigation/AppNavigator';

console.log('App.js is being loaded');

const App = () => {
  console.log('App component is rendering');
  return (
    <View style={{ flex: 1 }}>
      <Text>Welcome to Maryland LCV App</Text>
      <OrganizationProvider>
        <AppNavigator />
      </OrganizationProvider>
    </View>
  );
};

export default App;