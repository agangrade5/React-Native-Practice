import { View, Text, StyleSheet } from 'react-native';
import Colors from '../utils/Colors';

export default function Bookings() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Bookings</Text>
      <Text style={styles.subtitle}>View your upcoming and past bookings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.darkGray,
  },
});