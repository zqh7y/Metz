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
  description: {
    fontSize: 16,
    color: '#fff',
    fontFamily: "Kan",
    textAlign: 'center',
    paddingHorizontal: 30,
    lineHeight: 18
  },
  header: {
    marginTop: 40,
    backgroundColor: 'rgba(240, 240, 240, 0.25)',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    paddingVertical: 10,
  }
});

export default CreateStyle;
