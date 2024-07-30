import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { OrganizationProvider } from './src/context/OrganizationContext';

const App = () => {
  return (
    <OrganizationProvider>
      <AppNavigator />
    </OrganizationProvider>
  );
};

export default App;