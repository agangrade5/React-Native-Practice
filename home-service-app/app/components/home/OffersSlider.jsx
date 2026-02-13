import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../utils/Colors';

const { width } = Dimensions.get('window');

export default function OffersSlider({ offers }) {
    const OfferCard = ({ item }) => (
        <View style={[styles.offerCard, { backgroundColor: item.color }]}>
            <View style={styles.offerContent}>
                <Text style={styles.offerTitle}>{item.title}</Text>
                <Text style={styles.offerSubtitle}>{item.subtitle}</Text>
                <Text style={styles.offerDescription}>{item.description}</Text>
            </View>
            <View style={styles.offerIconContainer}>
                <Ionicons name="gift" size={50} color="rgba(255,255,255,0.3)" />
            </View>
        </View>
    );

    return (
        <View style={styles.section}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Offers For You</Text>
            </View>
            <FlatList
                data={offers}
                renderItem={({ item }) => <OfferCard item={item} />}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.offersList}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        marginTop: 15,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        paddingLeft: 1,
    },
    offersList: {
        paddingHorizontal: 20,
    },
    offerCard: {
        width: width * 0.7,
        height: 125,
        borderRadius: 15,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 15,
    },
    offerContent: {
        flex: 1,
        justifyContent: 'center',
    },
    offerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 5,
    },
    offerSubtitle: {
        fontSize: 12,
        color: '#fff',
        opacity: 0.9,
        marginBottom: 5,
    },
    offerDescription: {
        fontSize: 11,
        color: '#fff',
        opacity: 0.8,
    },
    offerIconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
