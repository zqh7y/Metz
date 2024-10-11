import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CreateStyle from '../styles/CreateStyle';

const Create = () => {
  return (
    <LinearGradient colors={['#FF7E5F', '#feb47b']} style={CreateStyle.container}>
      <View style={CreateStyle.header}>
        <Text style={CreateStyle.title}>Create a New Meeting</Text>
        <Text style={CreateStyle.description}>
          Here, you can create a new meeting by adding the meeting title, participants, and other relevant details.
        </Text>
      </View>
    </LinearGradient>
  );
};

export default Create;
