import { Dimensions, StyleSheet } from 'react-native';

const CreateStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    padding: 20,
    height: Dimensions.get('window').height * 1.1,
  },
  title: {
    fontSize: 36,
    marginBottom: 10,
    fontFamily: "Pac",
    color: '#fff',
  },
  header: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 10,
  },
  mapContainer: {
    padding: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginTop: 20,
    borderRadius: 15,
    width: '104%',
    alignItems: 'center',
  },
  description: {
    fontSize: 16,
    color: '#fff',
    fontFamily: "Kan",
    textAlign: 'center',
    paddingHorizontal: 30,
    lineHeight: 18
  },
  map: {
    width: Dimensions.get('window').width * 0.9359,
    height: 200,
    marginTop: 5,
    borderRadius: 15,
  },
  input: {
    height: 40,
    borderColor: '#333',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
    width: '90%',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 5,
  },
  loadingText: {
    fontSize: 18,
    color: '#fff',
    marginTop: 20,
  },
  label: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  timeContainer: {
    marginTop: 30,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    width: '100%',
    alignItems: 'center',
  },
  nameContainer: {
    marginTop: 30,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    width: '100%',
    alignItems: 'center',
  },
  submitContainer: {
    marginTop: 30,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    width: '100%',
    alignItems: 'center',
  },
  finalText: {
    fontSize: 18,
    color: '#555',
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  navButtons: {
    flexDirection: 'row',
    marginTop: 20,
  },
  navButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  navButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default CreateStyle;
