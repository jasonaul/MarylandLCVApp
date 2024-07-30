import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const HowToVoteScreen = () => {
  const votingSteps = [
    { title: 'Step 1: Register to Vote', content: 'Ensure you are registered to vote in Maryland. You can register online, by mail, or in person.' },
    { title: 'Step 2: Check Your Registration', content: 'Verify your registration status and polling place information.' },
    { title: 'Step 3: Know Your Voting Options', content: 'In Maryland, you can vote in person on Election Day, during early voting, or by mail-in ballot.' },
    { title: 'Step 4: Prepare Your ID', content: 'First-time voters may need to show ID. Bring a valid photo ID or a copy of a current utility bill, bank statement, government check, paycheck, or other government document with your name and address.' },
    { title: 'Step 5: Cast Your Ballot', content: 'Follow the instructions provided at your polling place or on your mail-in ballot to cast your vote.' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>How to Vote in Maryland</Text>
      {votingSteps.map((step, index) => (
        <View key={index} style={styles.stepContainer}>
          <Text style={styles.stepTitle}>{step.title}</Text>
          <Text style={styles.stepContent}>{step.content}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  stepContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  stepContent: {
    fontSize: 16,
  },
});

export default HowToVoteScreen;