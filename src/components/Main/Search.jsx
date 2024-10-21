import React from 'react';
import { View, TextInput, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MainStyle from '../../styles/MainStyle';

const Search = () => (
  <>
    <View style={MainStyle.searchContainer}>
      <Ionicons name="menu" size={24} color="white" />
      <TextInput
        style={MainStyle.searchInput}
        placeholder="Search Meetings"
        placeholderTextColor="#ccc"
      />
      <View style={MainStyle.buttonSearchContainer}>
        <Ionicons name="search" size={21} color="white" />
      </View>
    </View>

    <View style={MainStyle.ideaContainer}>
      <View style={MainStyle.textContainer}>
        <Text style={MainStyle.descrText}>Search Example:</Text>
        <Text style={MainStyle.titleText}>Marathon In Tel-Aviv</Text>
      </View>
      <Image source={require('../../../assets/images/natureBW.png')} style={MainStyle.image} />
    </View>
  </>
);

export default Search;
