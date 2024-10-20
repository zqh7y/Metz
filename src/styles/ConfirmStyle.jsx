import { Dimensions, StyleSheet } from 'react-native';

const ConfirmStyle = StyleSheet.create({
  container: {
    paddingTop: 100,
    height: Dimensions.get('window').height * 1.05,
  },
  card: {
    backgroundColor: '#222',
    paddingTop: 15,
    paddingHorizontal: 15,
    paddingBottom: 5,
    borderRadius: 8,
    shadowColor: '#444',
    shadowOpacity: 0.1,
    borderColor: "#333",
    borderWidth: 1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 30,
    fontFamily: "Pac",
    marginBottom: 70,
    textAlign: 'center',
    color: "#000",
  },
  meetingName: {
    fontSize: 27,
    color: '#ccc',
    fontFamily: "Kan",
    textAlign: 'center',
    letterSpacing: 1.2,
  },
  address: {
    fontSize: 19,
    color: '#ccc',
    fontFamily: "Kan",
    paddingVertical: 3,
  },
  date: {
    fontSize: 22,
    color: '#ccc',
    fontFamily: "Pac",
    textAlign: 'center',
  },
  map: {
    width: '109%',
    height: 200,
    right: 15,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  switchLabel: {
    fontSize: 18,
    fontFamily: "Kan",
    color: '#ccc',
    marginRight: 30,
    left: 20,
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  linkInput: {
    flex: 1,
    borderColor: '#444',
    borderWidth: 1,
    borderRadius: 8,
    padding: 7,
    paddingHorizontal: 10,
    backgroundColor: '#333',
    color: "#ccc",
    letterSpacing: 1.2,
  },
  copyButton: {
    marginLeft: 10,
    backgroundColor: '#FF7E5F',
    padding: 15,
    paddingVertical: 12,
    borderRadius: 8,
  },
  copyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: "Kan",
  },
  confirmButton: {
    backgroundColor: '#FF7E5F',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#FF7E5F',
    shadowOpacity: 1,
    shadowOffset: { width: 5, height: 20 },
    shadowRadius: 8,
    elevation: 20,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: "Kan",
    letterSpacing: 1.2,
  },
  error: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
  area: {
    backgroundColor: "#111",
    padding: 20,
    height: 750,
  },
});

export default ConfirmStyle;
