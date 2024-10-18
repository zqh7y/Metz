import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import ConfirmStyle from '../styles/ConfirmStyle';

const Confirm = ({ route, navigation }) => {
  const { meetingName, inputAddress, selectedDate, selectedTime } = route.params;

  const handleConfirm = () => {
    const currentTime = new Date();
    const meetingTime = new Date(selectedDate);
    meetingTime.setHours(selectedTime.getHours());
    meetingTime.setMinutes(selectedTime.getMinutes());

    const timeDifference = meetingTime - currentTime;

    if (timeDifference < 0) {
      Alert.alert('The selected time is in the past. Please choose a future time.');
    } else if (timeDifference < 60 * 60 * 1000) { // less than 1 hour
      Alert.alert('Please select a time that is at least 1 hour from now.');
    } else {
      Alert.alert('Meeting confirmed successfully!'); // You can add navigation logic here if needed
      // Example: navigation.navigate('SomeOtherScreen');
    }
  };

  return (
    <View style={ConfirmStyle.container}>
      <Text style={ConfirmStyle.title}>Confirm Your Meeting</Text>
      <Text style={ConfirmStyle.details}>
        Meeting Name: {meetingName}{'\n'}
        Address: {inputAddress}{'\n'}
        Date: {selectedDate.toLocaleDateString()}{'\n'}
        Time: {selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </Text>
      <TouchableOpacity style={ConfirmStyle.confirmButton} onPress={handleConfirm}>
        <Text style={ConfirmStyle.confirmButtonText}>Confirm Meeting</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Confirm;
