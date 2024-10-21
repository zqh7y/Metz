import { StyleSheet } from 'react-native';

const ProfileStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#333",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  infoContainer: {
    justifyContent: 'center',
  },
  nameText: {
    fontSize: 18,
    color: '#fff',
    fontFamily:"Pac",
    top: -2,
  },
  statusText: {
    fontSize: 12,
    color: '#ccc',
    fontFamily: "Kan",
    bottom: 2,
  },
});

export default ProfileStyle;
