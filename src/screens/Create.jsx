import React, { useState, useRef } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import MapComponent from '../components/Map';
import DateComponent from '../components/Date';
import CreateStyle from '../styles/CreateStyle';
import Notification from '../components/Notification';

const Create = ({ navigation }) => {
  const [markerLocation, setMarkerLocation] = useState(null);
  const [inputAddress, setInputAddress] = useState('');
  const [meetingName, setMeetingName] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [locationSelected, setLocationSelected] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationVisible, setNotificationVisible] = useState(false);

  const mapRef = useRef(null);

  const handleNext = () => {
    if (markerLocation && selectedDate && selectedTime && meetingName) {
      navigation.navigate('Confirm', {
        meetingName,
        inputAddress,
        selectedDate,
        selectedTime,
        markerLocation,
      });
    } else {
      setNotificationVisible(true);
      setNotificationMessage('Please select a location, name the meeting, and choose a date and time for the meeting.');
    }
  };

  const handleConfirm = () => {
    navigation.navigate('Confirm');
  };

  return (
    <LinearGradient colors={['#777', '#555']} style={CreateStyle.container}>
      <View style={CreateStyle.header}>
        <Text style={CreateStyle.title}>Create a New Meeting</Text>
        <Text style={CreateStyle.description}>Set the meeting date and time, then select the location on the map.</Text>
      </View>

      <View style={CreateStyle.mainContainer}>
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
      </View>

      <TouchableOpacity style={CreateStyle.button} onPress={handleNext}>
        <View>
          <Text style={CreateStyle.buttonText}>Confirm Metz</Text>
          <Text style={CreateStyle.buttonDescr}>Go to the next confirm section to make sure every Metz information is correct.</Text>
        </View>
        <Ionicons name="chevron-forward" size={26} color="#ccc" />
      </TouchableOpacity>

      <Notification 
        message={notificationMessage}
        visible={notificationVisible}
        onClose={() => setNotificationVisible(false)}
      />
    </LinearGradient>
  );
};

export default Create;
