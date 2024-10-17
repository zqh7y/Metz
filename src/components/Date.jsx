import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import CreateStyle from '../styles/CreateStyle';

const DateComponent = ({ selectedDate, setSelectedDate, selectedTime, setSelectedTime }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const renderTimeDigits = () => {
    const timeString = selectedTime.toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });

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

  const renderDateDigits = () => {
    const dateString = selectedDate.toLocaleDateString('en-US', {
      month: 'long',
      day: '2-digit'
    });

    return (
      <View style={CreateStyle.timeDigitsContainer}>
        {dateString.split('').map((digit, index) => (
          <View key={index} style={CreateStyle.timeDigit}>
            <Text style={CreateStyle.timeDigitText}>{digit}</Text>
          </View>
        ))}
      </View>
    )
  };

  return (
    <View style={CreateStyle.timeContainer}>
      <View style={CreateStyle.row}>
        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
          <Text>{renderDateDigits()}</Text>
        </TouchableOpacity>
        <View style={CreateStyle.hr1} />
        <TouchableOpacity onPress={() => setShowTimePicker(true)}>
          {renderTimeDigits()}
        </TouchableOpacity>
      </View>

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
    </View>
  );
};

export default DateComponent;
