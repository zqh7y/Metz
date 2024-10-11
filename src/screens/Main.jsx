import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MainStyle from '../styles/MainStyle';

const Main = ({ navigation }) => {
  return (
    <LinearGradient colors={['#FF7E5F', '#feb47b']} style={MainStyle.container}>
      <View style={MainStyle.titleContainer}>
        <Text style={[MainStyle.appTitle]}>Metz</Text>
        <Text style={[MainStyle.description]}>
          Your go-to app for scheduling and{'\n'}managing meetings efficiently.
        </Text>
      </View>
      <View style={MainStyle.buttonContainer}>
        <TouchableOpacity style={MainStyle.button} onPress={() => navigation.navigate('Create')}>
          <Text style={MainStyle.buttonText}>Create Meeting</Text>
          <Image source={require('../../assets/images/park.png')} style={MainStyle.image} />
        </TouchableOpacity>
        <TouchableOpacity style={MainStyle.button}>
          <Text style={MainStyle.buttonText}>Meeting History</Text>
          <Image source={require('../../assets/images/time.png')} style={MainStyle.image2} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Main;
