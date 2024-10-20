import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import * as Location from 'expo-location';
import { LinearGradient } from 'expo-linear-gradient';
import MainStyle from '../styles/MainStyle';
import Search from '../components/Main/Search';
import MapComponent from '../components/Main/Map';
import CreateButton from '../components/Main/CreateButton';

const Main = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);
    })();
  }, []);

  return (
    <LinearGradient colors={['#777', '#555']} style={MainStyle.container}>
      <Search />
      <View style={MainStyle.mainContainer}>
        <MapComponent location={location} />
        <CreateButton navigation={navigation} />
      </View>
    </LinearGradient>
  );
};

export default Main;
