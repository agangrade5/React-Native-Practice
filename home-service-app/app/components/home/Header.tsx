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
        backgroundColor: '#8B5CF6',
        paddingTop: 50,
        paddingBottom: 1,
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
        backgroundColor: '#fff',
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
        color: '#8B5CF6',
    },
    welcomeContainer: {
        justifyContent: 'center',
    },
    welcomeText: {
        fontSize: 14,
        color: '#fff',
        opacity: 0.9,
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    saveIcon: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
