import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useUser, useAuth } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import Colors from '../utils/Colors';

export default function Profile() {
  const { user } = useUser();
  const { signOut } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut();
      router.replace('/');
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: user?.imageUrl }}
          style={styles.avatar}
        />
        <Text style={styles.name}>{user?.fullName || 'User'}</Text>
        <Text style={styles.email}>{user?.primaryEmailAddress?.emailAddress}</Text>
      </View>

      <View style={styles.content}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Edit Profile</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Help & Support</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.menuItem, styles.signOutButton]} 
          onPress={handleSignOut}
        >
          <Text style={[styles.menuText, styles.signOutText]}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    alignItems: 'center',
    padding: 30,
    paddingTop: 60,
    backgroundColor: Colors.primary,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
    backgroundColor: Colors.white,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.white,
    marginBottom: 5,
  },
  email: {
    fontSize: 14,
    color: Colors.white,
    opacity: 0.9,
  },
  content: {
    padding: 20,
  },
  menuItem: {
    padding: 18,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray,
  },
  menuText: {
    fontSize: 16,
    color: Colors.darkCharcoal,
  },
  signOutButton: {
    marginTop: 20,
    backgroundColor: Colors.pink,
    borderRadius: 10,
    borderBottomWidth: 0,
  },
  signOutText: {
    color: Colors.brightRed,
    fontWeight: '600',
  },
});