import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useOrganization } from '../context/OrganizationContext';

const VotingInfoScreen = ({ navigation }) => {
  const { isC3 } = useOrganization();

  const votingInfoSections = [
    { title: 'Where to Vote', screen: 'WhereToVote' },
    { title: 'How to Vote', screen: 'HowToVote' },
    { title: "Who's Running", screen: 'WhosRunning' },
    { title: 'When to Vote', screen: 'WhenToVote' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Voting Information</Text>
      {votingInfoSections.map((section, index) => (
        <TouchableOpacity 
          key={index} 
          style={styles.sectionButton}
          onPress={() => navigation.navigate(section.screen)}
        >
          <Text style={styles.sectionButtonText}>{section.title}</Text>
        </TouchableOpacity>
      ))}
      {!isC3 && (
        <View style={styles.c4Section}>
          <Text style={styles.c4Text}>Additional 501(c)(4) Information:</Text>
          <TouchableOpacity 
            style={styles.sectionButton}
            onPress={() => navigation.navigate('LegislatorInfo')}
          >
            <Text style={styles.sectionButtonText}>Legislator Information</Text>
          </TouchableOpacity>
        </View>
      )}
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
  sectionButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  sectionButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  c4Section: {
    marginTop: 20,
  },
  c4Text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default VotingInfoScreen;