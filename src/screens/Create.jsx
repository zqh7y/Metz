import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Alert, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import * as LocationGeocoding from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import CreateStyle from '../styles/CreateStyle';

const Create = () => {
  const [location, setLocation] = useState(null);
  const [markerLocation, setMarkerLocation] = useState(null);
  const [inputAddress, setInputAddress] = useState('');
  const [locationSelected, setLocationSelected] = useState(false);
  
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);
  
  const mapRef = useRef(null);

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
        const fullAddress = `${reverseGeocode.street}, ${reverseGeocode.city}`;
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

  const handleNext = async () => {
    if (markerLocation) {
      setLocationSelected(true);
    } else {
      Alert.alert('Please select a location and date for the meeting.');
    }
  };

  const renderTimeDigits = () => {
    const timeString = selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return (
      <View style={CreateStyle.timeDigitsContainer}>
        {timeString.split('').map((digit, index) => (
          <View key={index} style={CreateStyle.timeDigit}>
            <Text style={CreateStyle.timeDigitText}>{digit}</Text>
          </View>
        ))}
      </View>
    );
  };

  return (
    <LinearGradient colors={['#FF7E5F', '#feb47b']} style={CreateStyle.container}>
      <View style={CreateStyle.header}>
        <Text style={CreateStyle.title}>Create a New Meeting</Text>
        <Text style={CreateStyle.description}>
          Here, you can creatively set up a meeting and magically visualize your current location!
        </Text>
      </View>

      {locationSelected ? (
        <View style={CreateStyle.timeContainer}>
          <Text style={CreateStyle.text}>Set the Meeting Date 📅</Text>
          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <Text>{selectedDate.toLocaleDateString()}</Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={selectedDate}
              mode="date"
              display="default"
              onChange={(event, date) => {
                setShowDatePicker(false);
                if (date) setSelectedDate(date);
              }}
            />
          )}

            <Text style={CreateStyle.text}>Set the Meeting Time ⏰</Text>
            {showTimePicker && (
              <DateTimePicker
                value={selectedTime}
                mode="time"
                display="default"
                onChange={(event, time) => {
                  setShowTimePicker(false);
                  if (time) setSelectedTime(time);
                }}
              />
            )}

          <TouchableOpacity onPress={() => setShowTimePicker(true)}>
            {renderTimeDigits()}
          </TouchableOpacity>
        </View>
      ) : (
        location ? (
          <View style={CreateStyle.mapContainer}>
            <Text style={CreateStyle.text}>Choose next meeting location 🏡</Text>
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
                <Marker
                  coordinate={markerLocation}
                  title={inputAddress}
                  description={"Selected Place"}
                />
              )}
            </MapView>
            
            <View style={CreateStyle.inputRow}>
              <TextInput
                style={CreateStyle.input}
                placeholder="Street Name - Number, City..."
                value={inputAddress}
                onChangeText={setInputAddress}
              />
              <TouchableOpacity style={CreateStyle.submitButton} onPress={handleAddressSubmit}>
                <MaterialIcons name="check" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <Text style={CreateStyle.loadingText}>Fetching your location...</Text>
        )
      )}

      {location ? (
        <View style={CreateStyle.buttonsContainer}>
          <TouchableOpacity style={CreateStyle.nextButton} onPress={handleNext}>
            <Text style={CreateStyle.nextButtonText}>Next</Text>
            <View style={CreateStyle.hr} />
            <MaterialIcons name="arrow-right-alt" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ) : null}
    </LinearGradient>
  );
};

export default Create;
