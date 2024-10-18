import { StyleSheet } from 'react-native';

const ConfirmStyle = StyleSheet.create({
  container: {
    marginTop: 100,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  card: {
    backgroundColor: '#fff',
    paddingTop: 15,
    paddingHorizontal: 15,
    paddingBottom: 5,
    borderRadius: 8,
    shadowColor: '#444',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontFamily: "Pac",
    marginBottom: 30,
    textAlign: 'center',
  },
  meetingName: {
    fontSize: 27,
    color: '#333',
    fontFamily: "Kan",
    textAlign: 'center',
    letterSpacing: 1.2
  },
  address: {
    fontSize: 19,
    color: '#333',
    fontFamily: "Kan",
  },
  date: {
    fontSize: 22,
    color: '#333',
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
    color: '#333',
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
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#f0f0f0',
    color: "#333",
    letterSpacing: 1.2,
  },
  copyButton: {
    marginLeft: 10,
    backgroundColor: '#FF7E5F',
    padding: 15,
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
    borderRadius: 50,
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
});

export default ConfirmStyle;
