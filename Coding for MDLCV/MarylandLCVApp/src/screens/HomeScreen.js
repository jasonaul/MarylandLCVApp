import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useOrganization } from '../context/OrganizationContext';

console.log('HomeScreen.js is being executed');

const HomeScreen = () => {
  console.log('HomeScreen is rendering');
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Maryland LCV Education Fund</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default HomeScreen;