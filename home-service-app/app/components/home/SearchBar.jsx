import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../utils/Colors';
import Fonts from "../../utils/Fonts";

export default function SearchBar() {
    return (
        <View style={styles.searchSection}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
                    placeholderTextColor={Colors.gray60}
                />
            </View>
            <TouchableOpacity style={styles.searchButton}>
                <Ionicons name="search" size={24} color={Colors.primary} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    searchSection: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: Colors.primary,
        gap: 10,
    },
    searchContainer: {
        flex: 1,
        backgroundColor: Colors.white,
        borderRadius: 10,
    },
    searchInput: {
        paddingHorizontal: 15,
        paddingVertical: 12,
        fontSize: 16,
        color: Colors.darkCharcoal,
        fontFamily: Fonts.regular,
    },
    searchButton: {
        width: 50,
        height: 48,
        backgroundColor: Colors.white,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
