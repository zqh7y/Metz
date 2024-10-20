import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, TextInput, Clipboard } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import ConfirmStyle from '../styles/ConfirmStyle';
import Notification from '../components/Notification';
import nightModeStyle from '../MapData/NightModeStyle';
import { LinearGradient } from 'expo-linear-gradient';
import { Switch } from 'react-native';

const Confirm = ({ route, navigation }) => {
  const { meetingName, inputAddress, selectedDate, selectedTime, markerLocation } = route.params;
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [randomLink, setRandomLink] = useState('https://metz.com/' + Math.random().toString(36).substring(7));

  const handleConfirm = () => {
    const currentTime = new Date();
    const meetingTime = new Date(selectedDate);
    meetingTime.setHours(selectedTime.getHours());
    meetingTime.setMinutes(selectedTime.getMinutes());

    const timeDifference = meetingTime - currentTime;

    if (timeDifference < 0) {
      setNotificationMessage('The selected time is in the past. Please choose a future time.');
    } else if (timeDifference < 60 * 60 * 1000) {
      setNotificationMessage("Please select a time that is at least 1 hour from now.")
    } else {
      setNotificationMessage('Meeting confirmed successfully!');
      setNotificationVisible(true);
      setTimeout(() => navigation.navigate("Main"), 5000);
    }
  };

  const handleCopyLink = () => {
    Clipboard.setString(randomLink);
    setNotificationMessage("Link copied to clipboard!");
    setNotificationVisible(true);
  };

  return (
    <LinearGradient colors={['#777', '#555']} style={ConfirmStyle.container}>
      <Text style={ConfirmStyle.title}>Confirm Your Meeting</Text>

      <View style={ConfirmStyle.area}>
        <View style={ConfirmStyle.card}>
          <Text style={ConfirmStyle.meetingName}>{meetingName}</Text>
          <Text style={ConfirmStyle.date}>{selectedDate.toLocaleDateString()}{"  -  "}
          {selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>

          {markerLocation && markerLocation.latitude && markerLocation.longitude ? (
            <MapView
              style={ConfirmStyle.map}
              customMapStyle={nightModeStyle}
              initialRegion={{
                latitude: markerLocation.latitude,
                longitude: markerLocation.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
              }}
            >
              <Marker
                coordinate={{ latitude: markerLocation.latitude, longitude: markerLocation.longitude }}
                title={meetingName}
                description={inputAddress}
              />
            </MapView>
          ) : (
            <Text style={ConfirmStyle.error}>Location not available. Please select a valid location.</Text>
          )}
          <Text style={ConfirmStyle.address}>{inputAddress}</Text>
        </View>

        <View style={ConfirmStyle.switchContainer}>
          <Text style={ConfirmStyle.switchLabel}>Private Meeting</Text>
          <Switch
            value={isPrivate}
            onValueChange={setIsPrivate}
            thumbColor={isPrivate ? '#FF7E5F' : '#fff'}
          />
        </View>

        {isPrivate && (
          <View style={ConfirmStyle.linkContainer}>
            <TextInput
              style={ConfirmStyle.linkInput}
              value={randomLink}
              editable={false}
            />
            <TouchableOpacity onPress={handleCopyLink} style={ConfirmStyle.copyButton}>
              <Text style={ConfirmStyle.copyButtonText}>Copy</Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={ConfirmStyle.shadow}>
          <TouchableOpacity style={ConfirmStyle.confirmButton} onPress={handleConfirm}>
            <Text style={ConfirmStyle.confirmButtonText}>Confirm Meeting</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Notification
        visible={notificationVisible}
        message={notificationMessage}
        onClose={() => setNotificationVisible(false)}
      />
    </LinearGradient>
  );
};

export default Confirm;
