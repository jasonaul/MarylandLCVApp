import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Linking, Clipboard } from 'react-native';

const WhereToVoteScreen = () => {
  const [streetNumber, setStreetNumber] = useState('');
  const [streetName, setStreetName] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [showSummary, setShowSummary] = useState(false);

  const handleSubmit = () => {
    setShowSummary(true);
  };

  const copyToClipboard = () => {
    const text = `Street Number: ${streetNumber}\nStreet Name: ${streetName}\nZip Code: ${zipCode}`;
    Clipboard.setString(text);
    alert('Address information copied to clipboard!');
  };

  const openOfficialSite = () => {
    const url = 'https://voterservices.elections.maryland.gov/PollingPlaceSearch';
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  if (showSummary) {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Your Entered Information</Text>
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryText}>Street Number: {streetNumber}</Text>
          <Text style={styles.summaryText}>Street Name: {streetName}</Text>
          <Text style={styles.summaryText}>Zip Code: {zipCode}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={copyToClipboard}>
          <Text style={styles.buttonText}>Copy Information</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={openOfficialSite}>
          <Text style={styles.buttonText}>Go to Official Website</Text>
        </TouchableOpacity>
        <Text style={styles.instructions}>
          1. Click 'Copy Information' to copy your address details.
          2. Click 'Go to Official Website' to open the Maryland Voter Services site.
          3. Paste your information into the appropriate fields on the official site.
          4. Complete the CAPTCHA and submit to find your polling place.
        </Text>
      </ScrollView>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Find Your Polling Place</Text>
      <Text style={styles.instructions}>
        Enter your address information below. We'll help you copy this information to enter on the official Maryland Voter Services website.
      </Text>

      <Text style={styles.label}>Street Number:</Text>
      <TextInput
        style={styles.input}
        value={streetNumber}
        onChangeText={setStreetNumber}
        placeholder="e.g., 8219"
        keyboardType="numeric"
      />
      <Text style={styles.hint}>Do not include letters or 1/2. Enter 8219, instead of 8219A or 8219 1/2.</Text>

      <Text style={styles.label}>Street Name:</Text>
      <TextInput
        style={styles.input}
        value={streetName}
        onChangeText={setStreetName}
        placeholder="e.g., Main"
      />
      <Text style={styles.hint}>Do not include direction indicators or types. Enter Main, instead of North Main Street.</Text>

      <Text style={styles.label}>Zip Code:</Text>
      <TextInput
        style={styles.input}
        value={zipCode}
        onChangeText={setZipCode}
        placeholder="5 digit zip code"
        keyboardType="numeric"
        maxLength={5}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Find Polling Place</Text>
      </TouchableOpacity>
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
  instructions: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  hint: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  summaryContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  summaryText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default WhereToVoteScreen;