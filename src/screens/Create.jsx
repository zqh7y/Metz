import React, { useState, useRef } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MapComponent from '../components/Map';
import DateComponent from '../components/Date';
import CreateStyle from '../styles/CreateStyle';

const Create = () => {
  const [markerLocation, setMarkerLocation] = useState(null);
  const [inputAddress, setInputAddress] = useState('');
  const [meetingName, setMeetingName] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [locationSelected, setLocationSelected] = useState(false);

  const mapRef = useRef(null);

  const handleNext = () => {
    if (markerLocation && meetingName && selectedDate && selectedTime) {
      setLocationSelected(true);
    } else {
      Alert.alert('Please select a location, name the meeting, and choose a date and time for the meeting.');
    }
  };

  return (
    <LinearGradient colors={['#FF7E5F', '#feb47b']} style={CreateStyle.container}>
      <View style={CreateStyle.header}>
        <Text style={CreateStyle.title}>Create a New Meeting</Text>
        <Text style={CreateStyle.description}>Set up a meeting location, give it a name & set the date with hour.</Text>
      </View>

      <DateComponent
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
      />
      <MapComponent
        markerLocation={markerLocation}
        setMarkerLocation={setMarkerLocation}
        inputAddress={inputAddress}
        setInputAddress={setInputAddress}
        mapRef={mapRef}
        meetingName={meetingName}
        setMeetingName={setMeetingName}
      />
    </LinearGradient>
  );
};

export default Create;
