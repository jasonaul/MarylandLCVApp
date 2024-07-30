import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useOrganization } from '../context/OrganizationContext';

const HamburgerMenu = ({ navigation }) => {
  const { isC3, toggleOrganization } = useOrganization();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('About')}>
        <Text style={styles.menuItem}>About Us</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
        <Text style={styles.menuItem}>Contact</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Text style={styles.menuItem}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleOrganization}>
        <Text style={styles.menuItem}>
          Switch to {isC3 ? 'Maryland LCV (501c4)' : 'Maryland LCV Education Fund (501c3)'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Donate')}>
        <Text style={styles.menuItem}>Donate</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  menuItem: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default HamburgerMenu;