import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import MapView, { Circle } from 'react-native-maps';
import MainStyle from '../../styles/MainStyle';
import { Ionicons } from '@expo/vector-icons';
import nightModeStyle from '../../MapData/NightModeStyle';
import * as Location from 'expo-location';

const MapComponent = ({ location, setCity }) => {

  useEffect(() => {
    if (location) {
      (async () => {
        let geocode = await Location.reverseGeocodeAsync({
          latitude: location.latitude,
          longitude: location.longitude,
        });
        if (geocode && geocode.length > 0) {
          setCity(geocode[0].city);
        }
      })();
    }
  }, [location]);

  return (
    <>
      <View style={MainStyle.rowContainer}>
        <View>
          <Text style={MainStyle.mapDescription}>Search for metz around you...</Text>
          <Text style={MainStyle.mapTitle}>Find Metz!</Text>
        </View>
        <Ionicons name="chevron-forward" size={22} color="#ccc" />
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
              center={{ latitude: location.latitude, longitude: location.longitude }}
              radius={150}
              strokeColor="rgba(250, 250, 250, 0.6)"
              fillColor="rgba(250, 250, 250, 0.2)"
            />
          </MapView>
        ) : (
          <ActivityIndicator size="large" color="#fff" />
        )}
      </View>
    </>
  );
};

export default MapComponent;
