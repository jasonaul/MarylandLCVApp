import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TakeActionScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to Maryland LCV Education Fund</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TakeActionScreen;