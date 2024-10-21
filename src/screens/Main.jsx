import React, { useEffect, useState } from 'react';
import { Animated, View } from 'react-native';
import * as Location from 'expo-location';
import { LinearGradient } from 'expo-linear-gradient';
import MainStyle from '../styles/MainStyle';
import Search from '../components/Main/Search';
import MapComponent from '../components/Main/Map';
import CreateButton from '../components/Main/CreateButton';
import Profile from '../components/Profile';
import TheLine from '../components/TheLine';

const Main = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [city, setCity] = useState('');
  const [containerHeight] = useState(new Animated.Value(0));
  const [count, setCount] = useState(0);

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

  const handleLinePress = () => {
    setCount(prev => prev + 1);
    {count % 2 === 1 ? //if
      Animated.timing(containerHeight, {
        toValue: -220,
        duration: 500,
        useNativeDriver: false,
      }).start() 
      : //else
      Animated.timing(containerHeight, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false
      }).start();
    }
  };

  return (
    <LinearGradient colors={['#777', '#555']} style={MainStyle.container}>
      <Search />
      <Animated.View style={[MainStyle.mainContainer, { top: containerHeight }]}>
        <TheLine onPress={handleLinePress} />
        <Profile city={city} />
        <MapComponent location={location} setCity={setCity} />
      </Animated.View>
      <CreateButton navigation={navigation} />
    </LinearGradient>
  );
};

export default Main;
