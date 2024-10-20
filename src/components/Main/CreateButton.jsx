import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MainStyle from '../../styles/MainStyle';

const CreateButton = ({ navigation }) => (
  <TouchableOpacity style={MainStyle.createContainer} onPress={() => navigation.navigate("Create")}>
    <View style={MainStyle.createView}>
      <Text style={MainStyle.createTitle}>Create Metz</Text>
      <Text style={MainStyle.createDescr}>Create your own meeting in 2 minutes and share it with whoever you want!</Text>
    </View>
    <Ionicons name="chevron-forward" size={26} color="#ccc" />
  </TouchableOpacity>
);

export default CreateButton;
