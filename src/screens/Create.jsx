import React, { useEffect, useState } from 'react';
import { View, Text, Alert, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import * as LocationGeocoding from 'expo-location';
import CreateStyle from '../styles/CreateStyle';

const Create = () => {
  const [location, setLocation] = useState(null);
  const [markerLocation, setMarkerLocation] = useState(null);
  const [inputAddress, setInputAddress] = useState('');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to access location was denied');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);
      setMarkerLocation(currentLocation.coords);
      await fetchAddress(currentLocation.coords);
    })();
  }, []);

  const fetchAddress = async (coords) => {
    const [reverseGeocode] = await LocationGeocoding.reverseGeocodeAsync(coords);
    if (reverseGeocode) {
      const fullAddress = `${reverseGeocode.street}, ${reverseGeocode.city}`;
      setInputAddress(fullAddress); // Update input with fetched address
    }
  };

  const handleMapPress = async (e) => {
    const newCoords = e.nativeEvent.coordinate;
    setMarkerLocation(newCoords);
    await fetchAddress(newCoords); // Fetch address when map is pressed
  };

  const handleAddressSubmit = async () => {
    const geocode = await LocationGeocoding.geocodeAsync(inputAddress);
    if (geocode.length > 0) {
      const newCoords = geocode[0];
      setMarkerLocation({ latitude: newCoords.latitude, longitude: newCoords.longitude });
    } else {
      Alert.alert('Address not found. Please try again.');
    }
  };

  return (
    <LinearGradient colors={['#FF7E5F', '#feb47b']} style={CreateStyle.container}>
      <View style={CreateStyle.header}>
        <Text style={CreateStyle.title}>Create a New Meeting</Text>
        <Text style={CreateStyle.description}>
          Here, you can creatively set up a meeting and magically visualize your current location!
        </Text>
      </View>

      {location ? (
        <View style={CreateStyle.mapContainer}>
          <MapView
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
              <Marker
                coordinate={markerLocation} 
                title={inputAddress} 
                description={"Selected Metz Place"}
              />
            )}
          </MapView>
          <TextInput
            style={CreateStyle.input}
            placeholder="Street Name - Number, City..."
            value={inputAddress}
            onChangeText={setInputAddress}
            onSubmitEditing={handleAddressSubmit}
            autoFocus
          />
        </View>
      ) : (
        <Text style={CreateStyle.loadingText}>Fetching your location...</Text>
      )}
    </LinearGradient>
  );
};

export default Create;
