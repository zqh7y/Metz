import React, { useEffect, useState, useRef } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import * as LocationGeocoding from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';
import CreateStyle from '../styles/CreateStyle';

const MapComponent = ({ markerLocation, setMarkerLocation, inputAddress, setInputAddress, mapRef, meetingName, setMeetingName }) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        let { status: locationStatus } = await Location.requestForegroundPermissionsAsync();
        if (locationStatus !== 'granted') {
          Alert.alert('Permission to access location was denied');
          return;
        }

        let currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation.coords);
        setMarkerLocation(currentLocation.coords);
        await fetchAddress(currentLocation.coords);
      } catch (error) {
        Alert.alert('Error', 'Failed to fetch location. Please try again.');
        console.error(error);
      }
    })();
  }, []);

  const fetchAddress = async (coords) => {
    try {
      const [reverseGeocode] = await LocationGeocoding.reverseGeocodeAsync(coords);
      if (reverseGeocode) {
        const fullAddress = `${reverseGeocode.city}, ${reverseGeocode.street}`;
        setInputAddress(fullAddress);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch address. Please try again.');
      console.error(error);
    }
  };

  const handleMapPress = async (e) => {
    const newCoords = e.nativeEvent.coordinate;
    setMarkerLocation(newCoords);
    await fetchAddress(newCoords);
  };

  const handleAddressSubmit = async () => {
    try {
      const geocode = await LocationGeocoding.geocodeAsync(inputAddress);
      if (geocode.length > 0) {
        const newCoords = geocode[0];
        const region = {
          latitude: newCoords.latitude,
          longitude: newCoords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        };
        setMarkerLocation({ latitude: newCoords.latitude, longitude: newCoords.longitude });
        mapRef.current.animateToRegion(region, 1000);
      } else {
        Alert.alert('Address not found. Please try again.');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to find the address. Please try again.');
      console.error(error);
    }
  };

  return (
    <View style={CreateStyle.mapContainer}>
      <Text style={CreateStyle.text}>Choose meeting location 🏡</Text>
      {location ? (
        <>
          <MapView
            ref={mapRef}
            style={CreateStyle.map}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
            onPress={handleMapPress}
          >
            {markerLocation && (
              <Marker coordinate={markerLocation} title={inputAddress} description={"Selected Place"} />
            )}
          </MapView>

          <View style={CreateStyle.inputRow}>
            <TextInput
              style={CreateStyle.input}
              placeholder="City, Street Name - Number..."
              value={inputAddress}
              onChangeText={setInputAddress}
            />
            <TouchableOpacity style={CreateStyle.submitButton} onPress={handleAddressSubmit}>
              <MaterialIcons name="check" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <TextInput
            style={CreateStyle.inputName}
            placeholder="Enter meeting name... (optional)"
            value={meetingName}
            onChangeText={setMeetingName}
          />
        </>
      ) : (
        <Text style={CreateStyle.loadingText}>Fetching your location...</Text>
      )}
    </View>
  );
};

export default MapComponent;
