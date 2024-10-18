import { StyleSheet } from 'react-native';

const NotificationStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark background with transparency
  },
  notification: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default NotificationStyle;
