import React from 'react';
import { View, Text, Image } from 'react-native';
import ProfileStyle from '../styles/ProfileStyle';

const Profile = ({ city }) => {
  return (
    <View style={ProfileStyle.container}>
      <Image
        source={require('../../assets/images/profilePfp.png')}
        style={ProfileStyle.profileImage}
      />
      <View style={ProfileStyle.infoContainer}>
        <Text style={ProfileStyle.nameText}>Welcome, John Doe!</Text>
        <Text style={ProfileStyle.statusText}>{city ? `Looks like you located in ${city}` : "Didn't got your location..."}</Text>
      </View>
    </View>
  );
};

export default Profile;
