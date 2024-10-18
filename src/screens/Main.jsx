import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MainStyle from '../styles/MainStyle';

const Main = ({ navigation }) => {
  return (
<LinearGradient colors={['#7B0000', '#0C0C0C']} style={MainStyle.container}>
<View style={MainStyle.titleContainer}>
        <Text style={[MainStyle.appTitle]}>Metz</Text>
        <Text style={[MainStyle.description]}>
          Your go-to app for scheduling and{'\n'}managing meetings efficiently.
        </Text>
      </View>
      <View style={MainStyle.buttonContainer}>
        <TouchableOpacity style={MainStyle.button} onPress={() => navigation.navigate('Create')}>
          <Image source={require('../../assets/images/park.png')} style={MainStyle.image} />
          <Text style={MainStyle.buttonText}>Create Meeting</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Main;
