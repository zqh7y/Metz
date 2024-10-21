import React from 'react';
import { TouchableOpacity, View } from 'react-native';

export default TheLine = ({ onPress }) => (
  <TouchableOpacity 
    style={{
      width: 414,
      height: 20,
      top: -6,
      justifyContent: "center",
      alignItems: "center",
    }}
    onPress={onPress}
  >
    <View style={{ 
      height: 4, 
      width: 100, 
      backgroundColor: "#fff",
      borderRadius: 100, 
      right: 10,
  }} />
  </TouchableOpacity>
)
