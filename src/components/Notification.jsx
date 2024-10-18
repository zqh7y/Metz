import React, { useState, useEffect } from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import NotificationStyle from '../styles/NotificationStyle';
import { StatusBar } from 'expo-status-bar';

const Notification = ({ visible, message, onClose }) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Display for 5 seconds
      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [visible, onClose]);

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={NotificationStyle.container}>
        <View style={NotificationStyle.notification}>
          <Text style={NotificationStyle.message}>{message}</Text>
        </View>
      </View>
      
      <StatusBar style='auto' />
    </Modal>
  );
};

export default Notification;
