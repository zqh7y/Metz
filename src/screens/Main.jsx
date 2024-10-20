import React, { useEffect, useState } from 'react';
import { View, TextInput, Text, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import MapView, { Circle } from 'react-native-maps';
import * as Location from 'expo-location';
import MainStyle from '../styles/MainStyle';
import nightModeStyle from '../MapData/NightModeStyle';

const Main = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);
    })();
  }, []);

  return (
    <LinearGradient colors={['#777', '#555']} style={MainStyle.container}>
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
          <Text style={MainStyle.titleText}>Birthday In Tel-Aviv</Text>
        </View>

        <Image source={require('../../assets/images/natureBW.png')} style={MainStyle.image} />
      </View>

      <View style={MainStyle.mainContainer}>
        <View style={MainStyle.rowContainer}>
          <View>
            <Text style={MainStyle.mapDescription}>Meetings around you...</Text>
            <Text style={MainStyle.mapTitle}>Find Metz</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="white" />
        </View>

        <View style={MainStyle.mapContainer}>
          {location ? (
            <MapView
              style={MainStyle.map}
              customMapStyle={nightModeStyle}
              initialRegion={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
              }}
            >
              <Circle
                center={{
                  latitude: location.latitude,
                  longitude: location.longitude,
                }}
                radius={150}
                strokeColor="rgba(250, 250, 250, 0.6)"
                fillColor="rgba(250, 250, 250, 0.2)"
              />
            </MapView>
          ) : (
            <ActivityIndicator size="large" color="#fff" />
          )}
        </View>
        <TouchableOpacity style={MainStyle.createContainer} onPress={() => navigation.navigate("Create")}>
          <View style={MainStyle.createView}>
            <Text style={MainStyle.createTitle}>Create Metz</Text>
            <Text style={MainStyle.createDescr}>Create your own meeting in 2 minutes and share it with whoever you want!</Text>
          </View>
          <Ionicons name="chevron-forward" size={26} color="#ccc" />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Main;
