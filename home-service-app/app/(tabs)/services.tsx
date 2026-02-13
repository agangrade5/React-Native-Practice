import { View, Text, StyleSheet } from 'react-native';
import Colors from '../utils/Colors';

export default function Services() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Services</Text>
      <Text style={styles.subtitle}>Browse all available services</Text>
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