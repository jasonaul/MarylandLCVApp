import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import candidateData from '../data/candidateData';

const OfficeSection = ({ office, candidates, showDistricts }) => {
  const [expandedDistrict, setExpandedDistrict] = useState(null);

  const renderCandidates = (candidateList) => (
    <FlatList
      data={candidateList}
      renderItem={({ item }) => <CandidateCard candidate={item} />}
      keyExtractor={(item) => item.name}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );

  if (showDistricts) {
    const districts = [...new Set(candidates.map(c => c.district))];
    return (
      <View style={styles.officeSection}>
        <Text style={styles.officeTitle}>{office}</Text>
        {districts.map(district => (
          <View key={district}>
            <TouchableOpacity 
              style={styles.districtHeader}
              onPress={() => setExpandedDistrict(expandedDistrict === district ? null : district)}
            >
              <Text style={styles.districtTitle}>{district}</Text>
              <FontAwesome 
                name={expandedDistrict === district ? "chevron-up" : "chevron-down"} 
                size={20} 
                color="black" 
              />
            </TouchableOpacity>
            {expandedDistrict === district && renderCandidates(candidates.filter(c => c.district === district))}
          </View>
        ))}
      </View>
    );
  } else {
    return (
      <View style={styles.officeSection}>
        <Text style={styles.officeTitle}>{office}</Text>
        {renderCandidates(candidates)}
      </View>
    );
  }
};

const CandidateCard = ({ candidate }) => {
    const openLink = (url) => {
      if (url) {
        Linking.openURL(url).catch((err) => console.error('An error occurred', err));
      }
    };
  
    const SocialIcon = ({ name, url }) => (
      <View style={styles.socialIconContainer}>
        <TouchableOpacity onPress={() => openLink(url)} disabled={!url}>
          <FontAwesome name={name} size={24} color={url ? "blue" : "gray"} />
        </TouchableOpacity>
        {!url && <FontAwesome name="times" size={16} color="red" style={styles.xIcon} />}
      </View>
    );
  
    return (
      <View style={styles.candidateCard}>
        <Image
          source={candidate.photoUrl ? { uri: candidate.photoUrl } : require('../assets/notfound.png')}
          style={styles.candidatePhoto}
        />
        <Text style={styles.candidateName}>{candidate.name}</Text>
        <Text style={styles.candidateParty}>{candidate.party}</Text>
        <View style={styles.socialLinks}>
          <SocialIcon name="globe" url={candidate.website} />
          <SocialIcon name="facebook-square" url={candidate.facebook} />
          <SocialIcon name="twitter-square" url={candidate.twitter} />
          <SocialIcon name="instagram" url={candidate.instagram} />
          <SocialIcon name="envelope" url={candidate.email ? `mailto:${candidate.email}` : null} />
        </View>
      </View>
    );
  };

const WhosRunningScreen = () => {
  const offices = [
    { name: "President of the United States", showDistricts: false },
    { name: "U.S. Senator", showDistricts: false },
    { name: "Representative in Congress", showDistricts: true },
    { name: "Judge of the Circuit Court", showDistricts: true },
    { name: "Justice Supreme Court of Maryland", showDistricts: true },
    { name: "Judge Appellate Court of Maryland", showDistricts: true },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Who's Running</Text>
      <FlatList
        data={offices}
        renderItem={({ item }) => (
          <OfficeSection
            office={item.name}
            candidates={candidateData.filter(candidate => candidate.office === item.name)}
            showDistricts={item.showDistricts}
          />
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  officeSection: {
    marginBottom: 20,
  },
  officeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  candidateCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    width: 200,
    alignItems: 'center',
  },
  candidatePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  candidateName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  candidateParty: {
    fontSize: 14,
    color: 'gray',
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
  },
  districtHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#e0e0e0',
    marginBottom: 10,
  },
  districtTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialIconContainer: {
    position: 'relative',
    marginHorizontal: 5,
  },
  xIcon: {
    position: 'absolute',
    top: -5,
    right: -5,
  },
});

export default WhosRunningScreen;