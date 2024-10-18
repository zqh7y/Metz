import { StyleSheet } from 'react-native';

const MainStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  titleContainer: {
    marginTop: 70,
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
    backgroundColor: 'rgba(255, 255, 255, .99)',
    padding: 15,
    borderRadius: 10,
    margin: 2,
    width: 350,
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    //shadows 
    shadowColor: 'rgba(240, 240, 240, 1)',
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 1, 
    shadowRadius: 10,
    elevation: 0, 
  },
  button2: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    padding: 15,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    margin: 3,
    width: 350,
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    //shadows 
    shadowColor: 'rgba(240, 240, 240, 1)',
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 1, 
    shadowRadius: 10,
    elevation: 0, 
  },
  buttonText: {
    color: '#000',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: "Kan",
    letterSpacing: 2,
    right: 50,
  },
  image: {
    width: 80,
    height: 80,
  },
  image2: {
    width: 70,
    height: 70,
  },
});

export default MainStyle;
