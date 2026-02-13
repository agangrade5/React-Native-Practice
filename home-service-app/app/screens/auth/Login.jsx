import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import * as WebBrowser from 'expo-web-browser';
import { useOAuth } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';

import Colors from '../../utils/Colors';

// Warm up the browser for better performance
WebBrowser.maybeCompleteAuthSession();

export default function Login() {
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
    const router = useRouter();

    const handleGoogleSignIn = async () => {
        try {
            const { createdSessionId, setActive } = await startOAuthFlow();
            
            if (createdSessionId) {
                await setActive({ session: createdSessionId });
                router.replace("/(tabs)/home");
            }
        } catch (error) {
            console.error('OAuth error:', error);
            Alert.alert('Error', 'Failed to sign in with Google');
        }
    };
    return (
        <View style={{ alignItems: 'center' }}>
            <Image 
                source={require('../../../assets/images/auth/login.png')} 
                style={styles.loginImage} 
            />
            <View style={styles.subContainer}>
                <Text style={{ fontSize: 26, color: Colors.white, textAlign: 'center'}}>Let's Find 
                    <Text style={{ fontWeight: 'bold', fontSize: 27}}> Professional Cleaning and Repair </Text>
                    Services
                </Text>
                <Text style={{ fontSize: 16, color: Colors.white, marginTop: 20, textAlign: 'center'}}>
                    Best App to find services near you which delivers the best quality services.
                </Text>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={handleGoogleSignIn}
                >
                    <Text style={styles.buttonText}>Let's Get Started</Text>
                </TouchableOpacity> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    loginImage: {
        width: 230,
        height: 450,
        marginTop: 70,
        borderWidth: 4,
        borderColor: Colors.black,
        borderRadius: 15
    },
    subContainer: {
        width:'100%',
        height:'70%',
        backgroundColor: Colors.primary,
        marginTop: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20
    },
    button: {
        backgroundColor: Colors.white,
        padding: 15,
        borderRadius: 99,
        marginTop: 30,
    },
    buttonText: {
        color: Colors.primary,
        fontSize: 16,
        textAlign: 'center',
    },
})