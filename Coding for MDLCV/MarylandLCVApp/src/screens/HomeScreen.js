import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useOrganization } from '../context/OrganizationContext';

const HomeScreen = () => {
  const { isC3 } = useOrganization();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome to {isC3 ? 'Maryland LCV Education Fund' : 'Maryland LCV'}
      </Text>
      <Text style={styles.subtitle}>
        {isC3 ? '501(c)(3) Organization' : '501(c)(4) Organization'}
      </Text>
      {/* Add more content here */}
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