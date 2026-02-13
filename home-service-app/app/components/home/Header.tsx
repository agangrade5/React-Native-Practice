import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useUser } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../utils/Colors';

export default function Header() {
    const { user } = useUser();

    return (
        <View style={styles.header}>
            <View style={styles.headerLeft}>
                <View style={styles.profileCircle}>
                    {user?.imageUrl ? (
                        <Image 
                            source={{ uri: user.imageUrl }} 
                            style={styles.profileImage} 
                        />
                    ) : (
                        <Text style={styles.profileInitial}>
                            {user?.firstName?.charAt(0) || 'G'}
                        </Text>
                    )}
                </View>
                <View style={styles.welcomeContainer}>
                    <Text style={styles.welcomeText}>Welcome,</Text>
                    <Text style={styles.userName}>
                        {user?.firstName || 'Game Play'}
                    </Text>
                </View>
            </View>
            <TouchableOpacity style={styles.saveIcon}>
                <Ionicons name="bookmark-outline" size={24} color={Colors.white} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.primary,
        paddingTop: 10,
        paddingBottom: 5,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileCircle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    profileInitial: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.primary,
    },
    welcomeContainer: {
        justifyContent: 'center',
    },
    welcomeText: {
        fontSize: 14,
        color: Colors.white,
        opacity: 0.9,
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.white,
    },
    saveIcon: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
});