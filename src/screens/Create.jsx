import React, { useState, useRef } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MapComponent from '../components/Map';
import DateComponent from '../components/Date';
import Confirm from './Confirm';
import CreateStyle from '../styles/CreateStyle';

const Create = ({ navigation }) => {
  const [markerLocation, setMarkerLocation] = useState(null);
  const [inputAddress, setInputAddress] = useState('');
  const [meetingName, setMeetingName] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [locationSelected, setLocationSelected] = useState(false);

  const mapRef = useRef(null);

  const handleNext = () => {
    if (markerLocation && selectedDate && selectedTime && meetingName) {
      navigation.navigate('Confirm', {
        meetingName,
        inputAddress,
        selectedDate,
        selectedTime,
      });
    } else {
      Alert.alert('Please select a location, name the meeting, and choose a date and time for the meeting.');
    }
  };
  

  const handleConfirm = () => {
    navigation.navigate('Confirm');
  };

  return (
<LinearGradient colors={['#7B0000', '#0C0C0C']} style={CreateStyle.container}>
<View style={CreateStyle.header}>
        <Text style={CreateStyle.title}>Create a New Meeting</Text>
        <Text style={CreateStyle.description}>Set the meeting date and time, then select the location on the map.</Text>
      </View>

      <>
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
      </>

      <TouchableOpacity style={CreateStyle.button} onPress={handleNext}>
        <Text style={CreateStyle.buttonText}>Confirm</Text>
      </TouchableOpacity>

    </LinearGradient>
  );
};

export default Create;
