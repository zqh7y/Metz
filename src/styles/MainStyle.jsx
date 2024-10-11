import { StyleSheet } from 'react-native';

const MainStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  titleContainer: {
    marginTop: 40,
  },
  appTitle: {
    fontSize: 80,
    fontFamily: "Pac",
    color: '#fff',
    marginBottom: -10,
    textAlign: 'center',
  },
  description: {
    fontSize: 12,
    color: '#fff',
    marginBottom: 20,
    fontFamily: "Kan",
    width: '25%',
    textAlign: "center",
    lineHeight: 12,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'rgba(240, 240, 240, 0.7)',
    padding: 15,
    borderRadius: 60,
    margin: 10,
    width: 350,
    height: 170,

    //shadows 
    shadowColor: 'rgba(240, 240, 240, 1)',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3, 
    shadowRadius: 10,
    elevation: 16, 
  },
  buttonText: {
    color: '#000',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: "Kan",
    letterSpacing: 2,
  },
  image: {
    width: 180,
    height: 180,
    position: "absolute",
    bottom: -30,
    left: 82,
  },
  image2: {
    width: 150,
    height: 120,
    position: "absolute",
    bottom: 10,
    left: 90,
  },
});

export default MainStyle;
