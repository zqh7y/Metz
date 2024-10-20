import { createContext } from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const MainStyle = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height * 1.05,
    paddingTop: 30,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222',
    borderRadius: 100,
    paddingLeft: 15,
    paddingRight: 6,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  searchInput: {
    flex: 1,
    color: 'white',
    padding: 10,
    fontFamily: 'Kan',
    letterSpacing: 1.2,
  },
  buttonSearchContainer: {
    backgroundColor: "#444",
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  ideaContainer: {
    borderRadius: 10,
    padding: 15,
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignItems: "center",
  },
  descrText: {
    fontSize: 14,
    color: '#000',
    textAlign:"center",
    fontFamily: "Kan",
  },
  titleText: {
    fontSize: 28,
    color: '#000',
    fontFamily: "Pac",
    marginBottom: 110, 
    marginTop: -10,   
  },
  mainContainer: {
    backgroundColor: "#151515",
    height: "60%",
    padding: 15,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  mapDescription: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'Kan',
  },
  mapTitle: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Kan',
    letterSpacing: 1.4,
    marginTop: -4,
  },
  map: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  mapContainer: {
    height: 210,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 5,
    borderRadius: 5,
  },
  image: {
    width: 300,
    height: 100,
    position: "absolute",
    top: 110,
  },
  createContainer: {
    width: 383,
    height: 70,
    backgroundColor: "#222",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderRadius: 15,
    position: "absolute",
    bottom: 40,
    left: 15.5,
    flexDirection: "row",
  },
  createTitle: {
    color: "#ccc",
    fontSize: 25,
    fontFamily: "Kan"
  },
  createDescr: {
    color: "#ccc",
    fontSize: 13,
    fontFamily: "Kan",
    lineHeight: 14,
    marginBottom: 3,
  },
  createView: {
    width: 300,
  }
});

export default MainStyle;
